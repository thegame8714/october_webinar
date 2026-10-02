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

const WEBINAR_NAME = "Leading Communication";
const VIP_PRICE = "$67";

const DELIVERABLES = [
  {
    name: "Behind-the-Scenes VIP Q&A Session",
    description:
      "Stay on an extended private session after the main presentation ends. Ask your questions live, get direct feedback, and hear real-world troubleshooting.",
    value: "$197",
  },
  {
    name: "Full HD Replay Vault + Timestamp Index",
    description:
      "Lifetime, searchable access to the entire recording. Skip straight to the key frameworks anytime without re-watching the whole session.",
    value: "$97",
  },
  {
    name: "Speaker Slide Deck & Action Checklist",
    description:
      "The exact reference slides and checklist so you don't have to scramble taking notes during the session.",
    value: "$47",
  },
];

const TOTAL_VALUE = "$341";

const COMPARISON_ROWS = [
  { feature: "Access to the live presentation", free: true, vip: true },
  { feature: "Extended live Q&A after the session", free: false, vip: true },
  { feature: "Lifetime recording access", free: false, vip: true },
  {
    feature: "Downloadable slides & action checklist",
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
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-navy to-navy-dark text-cream">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center px-6 py-14 text-center">
        {/* 1. Progress + reassurance header */}
        <div className="mb-5 flex items-center gap-2" aria-label="Step 2 of 2">
          <span className="h-1.5 w-10 rounded-full bg-amber" />
          <span className="h-1.5 w-10 rounded-full bg-amber" />
        </div>
        <p className="text-xs font-semibold tracking-wide text-cream/50">
          STEP 2 OF 2 &middot; YOUR FREE SEAT IS RESERVED
        </p>

        <p className="mt-5 text-xs font-bold tracking-wide text-amber">
          DO NOT CLOSE THIS PAGE &mdash; ONE-TIME ATTENDEE OPPORTUNITY
        </p>

        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Your Free Seat Is Confirmed. Want to Upgrade to VIP Access and Get
          Personal Guidance?
        </h1>

        {/* 2. The frame + contrast */}
        <div className="mt-8 max-w-xl space-y-4 text-left text-cream/80">
          <p>
            Your registration for {WEBINAR_NAME} is locked in &mdash;
            you&apos;re going to get massive value from the live
            presentation. But here&apos;s the reality: once the live stream
            ends, the standard broadcast room closes.
          </p>
          <p>
            Here&apos;s the difference between standard viewers and VIPs.
            Standard viewers are passive listeners who forget most of what
            they heard within 48 hours. VIPs are action-takers &mdash; they
            get their exact bottlenecks unblocked in the private Q&amp;A and
            keep lifetime access to the recordings to revisit anytime.
          </p>
        </div>

        {/* 3. The two problems */}
        <div className="mt-10 w-full max-w-xl rounded-2xl border border-cream/10 bg-cream/5 p-6 text-left sm:p-8">
          <h2 className="text-xl font-bold text-cream">
            Two Things Every Free Webinar Runs Into
          </h2>
          <div className="mt-5 space-y-4">
            <div>
              <p className="font-semibold text-cream">
                The retention &amp; schedule problem
              </p>
              <p className="mt-1 text-cream/70">
                Life gets busy. If a meeting runs over or you want to
                re-watch a specific framework, the free broadcast won&apos;t
                have a public replay.
              </p>
            </div>
            <div>
              <p className="font-semibold text-cream">
                The generic-vs-specific problem
              </p>
              <p className="mt-1 text-cream/70">
                A presentation covers the strategy, but it can&apos;t
                address your specific situation, team, or constraints
                &mdash; unless you can ask questions directly.
              </p>
            </div>
          </div>
        </div>

        {/* 4. The offer stack */}
        <div className="mt-10 w-full max-w-xl rounded-2xl border border-cream/10 bg-cream/5 p-6 text-left sm:p-8">
          <h2 className="text-xl font-bold text-cream">
            Here&apos;s Everything You Get With VIP Access
          </h2>

          <ul className="mt-6 space-y-6">
            {DELIVERABLES.map((item) => (
              <li key={item.name} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-purple/20 text-purple">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <p className="font-semibold text-cream">{item.name}</p>
                    <span className="text-sm text-cream/50">
                      {item.value} value
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-cream/70">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* 5. Comparison table */}
          <div className="mt-8 overflow-hidden rounded-xl border border-cream/10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-cream/10">
                  <th className="p-3 text-left font-semibold text-cream">
                    Feature
                  </th>
                  <th className="p-3 text-center font-semibold text-cream">
                    Free
                  </th>
                  <th className="p-3 text-center font-semibold text-amber">
                    VIP
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 1 ? "bg-cream/5" : undefined}
                  >
                    <td className="p-3 text-cream/80">{row.feature}</td>
                    <td className="p-3 text-center">
                      {row.free ? (
                        <CheckIcon className="mx-auto h-4 w-4 text-cream/50" />
                      ) : (
                        <XIcon className="mx-auto h-4 w-4 text-cream/30" />
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {row.vip ? (
                        <CheckIcon className="mx-auto h-4 w-4 text-amber" />
                      ) : (
                        <XIcon className="mx-auto h-4 w-4 text-cream/30" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 6. Price anchor */}
          <div className="mt-8 rounded-xl border border-amber/30 bg-amber/5 p-5 text-center">
            <p className="text-sm text-cream/60 line-through">
              Total value: {TOTAL_VALUE}
            </p>
            <p className="mt-1 text-sm text-cream/70">
              Standard masterclass fee: $147
            </p>
            <p className="mt-2 text-sm font-medium text-cream/80">
              Your price today
            </p>
            <p className="text-4xl font-bold text-amber">{VIP_PRICE}</p>
          </div>

          {/* 7. CTA + embedded checkout */}
          <p className="mt-8 text-center text-lg font-bold text-cream">
            Upgrade My Ticket to VIP &mdash; Add Q&amp;A, Recording &amp;
            Slides for {VIP_PRICE}
          </p>

          <div className="mt-4 overflow-hidden rounded-xl bg-white">
            <iframe
              src={GHL_ORDER_FORM_URL}
              title="VIP Access checkout"
              className="h-[720px] w-full border-0"
              loading="lazy"
            />
          </div>

          <p className="mt-3 text-center text-xs text-cream/50">
            Instant confirmation &middot; 30-day money-back guarantee.{" "}
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

        {/* 8. Polite decline */}
        <a
          href="/"
          className="mt-8 max-w-md text-sm text-cream/50 underline hover:text-cream/80"
        >
          No thanks, I will only attend the free live session. I understand
          that if I miss any part, there will be no replay access or chance
          to ask questions.
        </a>
      </div>
    </main>
  );
}
