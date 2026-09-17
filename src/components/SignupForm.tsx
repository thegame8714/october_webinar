"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function SignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!consent) {
      setStatus("error");
      setErrorMessage("Please accept the privacy policy to continue.");
      return;
    }

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      consent,
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
      setConsent(false);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-amber/30 bg-cream p-8 text-center">
        <h3 className="text-2xl font-bold text-navy">You&apos;re in! 🎉</h3>
        <p className="mt-2 text-navy/70">
          Check your inbox for your confirmation and calendar invite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-cream p-6 shadow-xl sm:p-8">
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className="w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/30"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@example.com"
            className="w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/30"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/30"
          />
        </div>

        {/* GDPR consent — TODO: update copy + link to your real privacy policy */}
        <label className="flex items-start gap-3 text-sm text-navy/70">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-navy/30 text-purple focus:ring-purple/40"
          />
          <span>
            I agree to receive communications about this webinar and consent
            to my data being processed in accordance with the{" "}
            <a href="/privacy-policy" className="underline hover:text-purple">
              Privacy Policy
            </a>
            . You can unsubscribe at any time.
          </span>
        </label>

        {status === "error" && (
          <p className="text-sm font-medium text-red-600">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-cream transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "I'm in!"}
        </button>
      </div>
    </form>
  );
}
