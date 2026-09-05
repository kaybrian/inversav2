import Link from "next/link";
import NeoHeader from "@/components/headers/NeoHeader";
import NeoFooter from "@/components/footers/NeoFooter";

export const metadata = {
  title: "Page not found",
  description:
    "The page you were looking for has moved or no longer exists. Head back to the Inversa homepage.",
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return (
    <>
      <NeoHeader theme="dark" />
      <main className="neo-main">
        <div className="neo-error">
          <div className="neo-container">
            <p className="neo-error__code">404</p>
            <h1 className="neo-title neo-title--sm">Looks like you&apos;re lost</h1>
            <p className="neo-text" style={{ margin: "18px 0 30px" }}>
              The link you followed is probably broken, or the page has moved.
            </p>
            <Link href="/" className="neo-btn neo-btn--light">
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <NeoFooter />
    </>
  );
}
