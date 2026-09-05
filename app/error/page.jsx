import Link from "next/link";
import NeoHeader from "@/components/headers/NeoHeader";
import NeoFooter from "@/components/footers/NeoFooter";

export const metadata = {
  title: "Something went wrong",
  description: "An unexpected error occurred. Head back to the Inversa homepage.",
  robots: { index: false, follow: false },
};

export default function ErrorPage() {
  return (
    <>
      <NeoHeader theme="dark" />
      <main className="neo-main">
        <div className="neo-error">
          <div className="neo-container">
            <p className="neo-error__code">500</p>
            <h1 className="neo-title neo-title--sm">Something went wrong</h1>
            <p className="neo-text" style={{ margin: "18px 0 30px" }}>
              We hit an unexpected error. Try again, or head back to the
              homepage.
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
