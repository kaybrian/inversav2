import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_LENGTHS = {
  name: 120,
  email: 200,
  company: 160,
  subject: 160,
  message: 5000,
};

function clean(value, limit) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, limit);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "We could not read that request." },
      { status: 400 }
    );
  }

  // Bots fill hidden fields. Humans never see this one, so anything in it is spam.
  if (clean(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, MAX_LENGTHS.name);
  const email = clean(body.email, MAX_LENGTHS.email);
  const company = clean(body.company, MAX_LENGTHS.company);
  const subject = clean(body.subject, MAX_LENGTHS.subject);
  const message = clean(body.message, MAX_LENGTHS.message);
  const kind = body.kind === "investor" ? "investor" : "general";

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "Name, email and message are all required." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return Response.json(
      { ok: false, error: "That email address does not look right." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, so the message was not sent.");
    return Response.json(
      { ok: false, error: "Email is not configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  const to =
    kind === "investor" && process.env.INVESTOR_TO_EMAIL
      ? process.env.INVESTOR_TO_EMAIL
      : process.env.CONTACT_TO_EMAIL || "support@inversa-inc.xyz";

  const from =
    process.env.CONTACT_FROM_EMAIL || "Inversa Website <onboarding@resend.dev>";

  const heading =
    kind === "investor"
      ? "New investor enquiry"
      : "New message from the website";

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "Not given"],
    ["Subject", subject || "Not given"],
  ];

  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#111;line-height:1.6">
      <h2 style="margin:0 0 18px;font-weight:500">${heading}</h2>
      <table style="border-collapse:collapse;margin-bottom:22px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr>
                 <td style="padding:4px 18px 4px 0;color:#666">${label}</td>
                 <td style="padding:4px 0"><strong>${escapeHtml(value)}</strong></td>
               </tr>`
          )
          .join("")}
      </table>
      <div style="padding:18px;background:#f4f4f2;border-radius:10px;white-space:pre-wrap">${escapeHtml(
        message
      )}</div>
    </div>
  `;

  const text = [
    heading,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: subject
        ? `${heading}: ${subject}`
        : `${heading} from ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend rejected the message:", error);
      return Response.json(
        { ok: false, error: "We could not send that. Please try again shortly." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (caught) {
    console.error("Sending through Resend threw:", caught);
    return Response.json(
      { ok: false, error: "We could not send that. Please try again shortly." },
      { status: 500 }
    );
  }
}
