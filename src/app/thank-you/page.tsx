import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Countdown from "@/components/Countdown";
import { SIGNUP_COOKIE_NAME } from "@/lib/signup-cookie";
import {
  UPSELL_OUTCOME_COOKIE_NAME,
  isUpsellOutcome,
} from "@/lib/upsell-outcome";
import {
  WEBINAR_NAME,
  WEBINAR_DATE_LABEL,
  WEBINAR_DATETIME_ISO,
} from "@/lib/webinar";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

// After a payment the checkout iframe redirects itself here. Break out of the
// frame so the visitor sees a full-page thank-you instead of a tiny embedded one.
const BREAK_OUT_OF_FRAME = `try{if(window.top&&window.top!==window.self){window.top.location.replace(window.location.href);document.documentElement.style.display="none";}}catch(e){}`;

export default async function ThankYouPage() {
  const cookieStore = await cookies();

  if (!cookieStore.has(SIGNUP_COOKIE_NAME)) {
    redirect("/");
  }

  const outcome = cookieStore.get(UPSELL_OUTCOME_COOKIE_NAME)?.value;
  if (!isUpsellOutcome(outcome)) {
    redirect("/upsell");
  }

  const isVip = outcome === "vip";

  const steps = isVip
    ? [
        "Check your inbox for your confirmation and calendar invite.",
        `Join the live presentation on ${WEBINAR_DATE_LABEL}.`,
        "Stay on for the VIP Q&A session right after the presentation.",
        "After the session, you'll get your full recording and the speaker slide deck.",
      ]
    : [
        "Check your inbox for your confirmation and calendar invite.",
        "Add the date to your calendar so you don't miss it.",
        `Join us live on ${WEBINAR_DATE_LABEL}. There's no replay for free attendees, so make sure you're there for the whole session.`,
      ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-sand px-6 py-10 text-navy">
      <script dangerouslySetInnerHTML={{ __html: BREAK_OUT_OF_FRAME }} />

      <Image
        src="/logo-light.png"
        alt={WEBINAR_NAME}
        width={600}
        height={445}
        priority
        className="h-16 w-auto"
      />

      <div className="mt-8 w-full max-w-xl rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-xl sm:p-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber/50 bg-amber/10 px-4 py-1.5 text-xs font-bold tracking-wide text-brown">
          {isVip ? "VIP ACCESS CONFIRMED" : "YOU'RE REGISTERED"}
        </span>

        <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {isVip ? "You're In, Welcome to VIP!" : "You're All Set, See You Live!"}
        </h1>

        <p className="mt-4 text-navy/70">
          {isVip
            ? `Thank you for upgrading. Your free seat for ${WEBINAR_NAME} is confirmed, and so is your VIP access.`
            : `Thank you for registering for ${WEBINAR_NAME}. Your free seat is confirmed for ${WEBINAR_DATE_LABEL}.`}
        </p>

        <div className="mt-8 text-left">
          <h2 className="text-lg font-bold">What happens next</h2>
          <ol className="mt-4 space-y-3">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-purple/10 text-xs font-bold text-purple">
                  {i + 1}
                </span>
                <span className="text-navy/80">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-navy/10 pt-8">
          <p className="text-sm font-medium text-navy/60">
            The live session starts in
          </p>
          <Countdown targetDate={WEBINAR_DATETIME_ISO} />
        </div>
      </div>

      <a
        href="/privacy-policy"
        className="mt-8 text-sm text-navy/50 underline hover:text-navy"
      >
        Privacy Policy
      </a>
    </main>
  );
}
