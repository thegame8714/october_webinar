import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SIGNUP_COOKIE_NAME } from "@/lib/signup-cookie";
import { WEBINAR_NAME } from "@/lib/webinar";

export const metadata: Metadata = {
  title: "VIP Access, One More Step",
  description: "Upgrade your free registration to VIP access.",
};

// TODO: replace with your real GHL order form URL if this one changes
const GHL_ORDER_FORM_URL =
  "https://thehub-api.mastermind.com/payment-link/6aafa7cd9f7ff2c808a76946";

const VIP_PRICE = "$67";
const DECLINE_URL = "/api/upsell/complete?result=declined";
const PAID_URL = "/api/upsell/complete?result=paid";

const DELIVERABLES = [
  {
    name: "Behind-the-Scenes VIP Q&A Session",
    description:
      "Stay for a private session after the talk. Ask your questions live. Get direct feedback and real-world fixes.",
    value: "$197",
  },
  {
    name: "Full HD Replay Vault + Timestamp Index",
    description:
      "Keep the full recording for life. Use the timestamps to jump to the key ideas.",
    value: "$97",
  },
  {
    name: "Speaker Slide Deck",
    description:
      "Get the exact slides. No need to rush and take notes.",
    value: "$47",
  },
];

const TOTAL_VALUE = "$341";

const COMPARISON_ROWS = [
  { feature: "Join the live session.", free: true, vip: true },
  { feature: "Live Q&A after the session.", free: false, vip: true },
  { feature: "Recording for life.", free: false, vip: true },
  {
    feature: "Slides to download.",
    free: false,
    vip: true,
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.415L8.5 12.086l6.79-6.796a1 1 0 011.415 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default async function UpsellPage() {
  const cookieStore = await cookies();
  const hasSignedUp = cookieStore.has(SIGNUP_COOKIE_NAME);

  if (!hasSignedUp) {
    redirect("/");
  }

  return (
    <main className="text-navy">
      {/* Top: logo, progress, one-time warning, headline, copy, CTAs */}
      <section className="bg-sand px-6 py-12 sm:py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Image
            src="/logo-light.png"
            alt={WEBINAR_NAME}
            width={600}
            height={445}
            priority
            className="mb-6 h-16 w-auto"
          />

          <div className="mb-5 flex items-center gap-2" aria-label="Step 2 of 2">
            <span className="h-1.5 w-10 rounded-full bg-amber" />
            <span className="h-1.5 w-10 rounded-full bg-amber" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide text-navy/60">
            Step 2 of 2. You have a free seat.
          </p>

          <div
            role="alert"
            className="mt-6 flex w-full max-w-xl items-start gap-3 rounded-xl border-2 border-amber bg-amber/10 px-5 py-4 text-left shadow-lg shadow-amber/10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mt-0.5 h-6 w-6 flex-none text-amber"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wide text-brown">
                Do not close this page. This is a one-time offer.
              </p>
              <p className="mt-1 font-medium text-navy">
                Once you leave this page, you won&apos;t see this offer again.
              </p>
            </div>
          </div>

          <h1 className="mt-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            You&apos;re in! Want to upgrade to VIP and get personal guidance?
          </h1>

          <div className="mt-8 max-w-xl space-y-4 text-left text-navy/80">
            <p>
              You signed up for {WEBINAR_NAME}. You&apos;ll get great value
              from the live session. But here&apos;s the catch. When the live
              stream ends, the room closes.
            </p>
            <p>
              Don&apos;t lose the feeling and the energy you get during the
              webinar. With VIP, you can rewatch the whole webinar any time
              and keep that energy at home. You can also join the Q&amp;A.
              Fabio answers your questions, so you can clear your own
              bottlenecks.
            </p>
            <p>
              Here is the main difference between those who watch live and
              those who get VIP Access.
            </p>
            <p className="font-semibold text-navy">
              Within 48 hours, standard viewers lose their energy and
              drive. VIPs can bring it all back at home, any time.
            </p>
          </div>

          <a
            href="#checkout"
            className="mt-10 inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-amber px-8 py-5 text-lg font-bold text-cream shadow-xl shadow-amber/30 ring-4 ring-amber/20 transition hover:scale-[1.02] hover:brightness-110"
          >
            Yes! I want VIP Access for {VIP_PRICE} &rarr;
          </a>
          <p className="mt-3 text-sm font-semibold text-brown">
            This offer ends when you leave this page.
          </p>
          <a
            href={DECLINE_URL}
            className="mt-3 text-sm text-navy/50 underline hover:text-navy"
          >
            No thanks, skip this offer
          </a>
        </div>
      </section>

      {/* The two problems */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Two things every free webinar runs into.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-navy/10 bg-cream p-6">
              <p className="font-bold">Problem 1: No replay.</p>
              <p className="mt-2 text-navy/70">
                Life gets busy. A meeting may run over. Or you may want to
                rewatch one idea. The free session has no public replay.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-cream p-6">
              <p className="font-bold">Problem 2: Generic advice.</p>
              <p className="mt-2 text-navy/70">
                A talk shares the big ideas. It can&apos;t fit your own team
                unless you ask questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The offer stack, comparison and price anchor */}
      <section className="bg-navy px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Here&apos;s everything you get with VIP Access.
          </h2>

          <div className="mt-10 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
            <ul className="space-y-6">
              {DELIVERABLES.map((item) => (
                <li key={item.name} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-purple/10 text-purple">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <p className="font-semibold">{item.name}</p>
                      <span className="text-sm text-navy/50">
                        {item.value} value
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-navy/70">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sand">
                  <th className="p-3 text-left font-semibold">Feature</th>
                  <th className="p-3 text-center font-semibold">Free</th>
                  <th className="p-3 text-center font-semibold text-brown">
                    VIP
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 1 ? "bg-cream" : undefined}
                  >
                    <td className="p-3 text-navy/80">{row.feature}</td>
                    <td className="p-3 text-center">
                      {row.free ? (
                        <CheckIcon className="mx-auto h-4 w-4 text-navy/40" />
                      ) : (
                        <XIcon className="mx-auto h-4 w-4 text-navy/25" />
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {row.vip ? (
                        <CheckIcon className="mx-auto h-4 w-4 text-amber" />
                      ) : (
                        <XIcon className="mx-auto h-4 w-4 text-navy/25" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-amber/40 bg-white p-6 text-center shadow-sm">
            <p className="text-sm text-navy/50 line-through">
              Total value: {TOTAL_VALUE}.
            </p>
            <p className="mt-1 text-sm text-navy/70">
              Standard masterclass fee: $147.
            </p>
            <p className="mt-2 text-sm font-medium text-navy/80">
              Your price today.
            </p>
            <p className="text-4xl font-bold text-amber">{VIP_PRICE}</p>
          </div>
        </div>
      </section>

      {/* Checkout */}
      <section className="bg-sand px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="checkout"
            className="scroll-mt-6 text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Upgrade your ticket to VIP.
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-xl">
            <iframe
              src={GHL_ORDER_FORM_URL}
              title="VIP Access checkout"
              className="h-[720px] w-full border-0"
              loading="lazy"
            />
          </div>

          <p className="mt-3 text-xs text-navy/60">
            Instant confirmation. 30-day money-back guarantee.{" "}
            <a
              href={GHL_ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-navy"
            >
              Trouble loading? Open in a new tab.
            </a>
          </p>

          <div className="mt-8">
            <p className="text-sm text-navy/60">Finished your payment?</p>
            <a
              href={PAID_URL}
              className="mt-2 inline-flex items-center justify-center rounded-full border-2 border-navy px-6 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-cream"
            >
              Continue to my confirmation &rarr;
            </a>
          </div>

          <a
            href={DECLINE_URL}
            className="mt-10 inline-block max-w-md text-sm text-navy/50 underline hover:text-navy"
          >
            No thanks, I will only attend the free live session. If I miss
            any part, I get no replay and no chance to ask questions.
          </a>
        </div>
      </section>
    </main>
  );
}
