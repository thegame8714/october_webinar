import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SIGNUP_COOKIE_NAME } from "@/lib/signup-cookie";

export const metadata: Metadata = {
  title: "VIP Access — One More Step",
  description: "Upgrade your free registration to VIP access.",
};

// TODO: replace with your real GHL order form URL if this one changes
const GHL_ORDER_FORM_URL =
  "https://thehub-api.mastermind.com/payment-link/6aafa7cd9f7ff2c808a76946";

const VIP_INCLUDES = [
  "Full recording of the live webinar, yours to keep and rewatch",
  "Access to the live Q&A session held right after the webinar",
];

export default async function UpsellPage() {
  const cookieStore = await cookies();
  const hasSignedUp = cookieStore.has(SIGNUP_COOKIE_NAME);

  if (!hasSignedUp) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-navy to-navy-dark text-cream">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-sm font-medium text-amber">
          You&apos;re registered! One more thing&hellip;
        </span>

        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Upgrade to VIP Access
        </h1>

        <p className="mt-4 max-w-md text-cream/70">
          Get the full recording plus a seat at the live Q&amp;A session
          right after the webinar &mdash; for the people who want to go
          deeper.
        </p>

        <div className="mt-10 w-full rounded-2xl border border-cream/10 bg-cream/5 p-6 text-left sm:p-8">
          <div className="flex items-baseline justify-between border-b border-cream/10 pb-4">
            <span className="text-lg font-semibold">VIP Access</span>
            <span className="text-3xl font-bold text-amber">$67</span>
          </div>

          <ul className="mt-5 space-y-3">
            {VIP_INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-purple/20 text-purple">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.415L8.5 12.086l6.79-6.796a1 1 0 011.415 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-cream/85">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 overflow-hidden rounded-xl bg-white">
            <iframe
              src={GHL_ORDER_FORM_URL}
              title="VIP Access checkout"
              className="h-[720px] w-full border-0"
              loading="lazy"
            />
          </div>

          <p className="mt-3 text-center text-xs text-cream/50">
            Secure checkout &middot; one-time payment, no subscription.{" "}
            <a
              href={GHL_ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cream/80"
            >
              Trouble loading? Open in a new tab.
            </a>
          </p>
        </div>

        <a
          href="/"
          className="mt-8 text-sm text-cream/50 underline hover:text-cream/80"
        >
          No thanks, I&apos;ll just attend the free live session
        </a>
      </div>
    </main>
  );
}
