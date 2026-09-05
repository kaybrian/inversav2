"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/components/motion/Reveal";

const EMPTY = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
  website: "",
};

export default function NeoContactForm({
  kind = "general",
  subjects = [],
  submitLabel = "Send message",
  messageLabel = "How can we help?",
}) {
  const [values, setValues] = useState({
    ...EMPTY,
    subject: subjects[0] || "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (field) => (event) =>
    setValues((current) => ({ ...current, [field]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, kind }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setValues({ ...EMPTY, subject: subjects[0] || "" });
      setStatus("sent");
    } catch {
      setError("We could not reach the server. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        className="neo-form neo-form__done"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.span
          className="neo-form__tick"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 340, damping: 16, delay: 0.1 }}
        >
          <i className="fas fa-check"></i>
        </motion.span>
        <h3>Message received</h3>
        <p className="neo-text">
          Thank you. It has landed in our inbox and someone from the team will
          come back to you shortly.
        </p>
        <button
          type="button"
          className="neo-btn neo-btn--ghost"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      className="neo-form"
      onSubmit={handleSubmit}
      noValidate
      // a short shake is the fastest way to say "this did not go through"
      animate={status === "error" ? { x: [0, -9, 8, -5, 3, 0] } : { x: 0 }}
      transition={{ duration: 0.42 }}
    >
      <div className="neo-form__row">
        <label className="neo-field">
          <span>Your name</span>
          <input
            type="text"
            required
            value={values.name}
            onChange={update("name")}
            placeholder="Ada Lovelace"
          />
        </label>

        <label className="neo-field">
          <span>Email</span>
          <input
            type="email"
            required
            value={values.email}
            onChange={update("email")}
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="neo-form__row">
        <label className="neo-field">
          <span>Company or fund</span>
          <input
            type="text"
            value={values.company}
            onChange={update("company")}
            placeholder="Optional"
          />
        </label>

        <label className="neo-field">
          <span>Subject</span>
          {subjects.length ? (
            <select value={values.subject} onChange={update("subject")}>
              {subjects.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={values.subject}
              onChange={update("subject")}
              placeholder="What is this about?"
            />
          )}
        </label>
      </div>

      <label className="neo-field">
        <span>{messageLabel}</span>
        <textarea
          rows={6}
          required
          value={values.message}
          onChange={update("message")}
          placeholder="Tell us what you are working on."
        />
      </label>

      {/* Hidden from people, irresistible to bots. */}
      <div className="neo-form__trap" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={update("website")}
          />
        </label>
      </div>

      <div className="neo-form__foot">
        <motion.button
          type="submit"
          className="neo-btn neo-btn--light"
          disabled={status === "sending"}
          whileHover={status === "sending" ? undefined : { scale: 1.03 }}
          whileTap={status === "sending" ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          {status === "sending" ? (
            <>
              <motion.i
                className="fas fa-circle-notch"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              />
              Sending
            </>
          ) : (
            submitLabel
          )}
        </motion.button>

        <AnimatePresence>
          {status === "error" ? (
            <motion.p
              className="neo-form__error"
              role="alert"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.form>
  );
}
