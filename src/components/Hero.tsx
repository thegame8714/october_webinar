export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-dark text-cream"
    >
      {/* decorative background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-purple/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-amber/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32">
        {/* TODO: replace with your actual date/time */}
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-sm font-medium text-amber">
          Free Live Webinar &middot; October 2026
        </span>

        {/* TODO: replace with your real headline promise */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Fill Your Calendar With Qualified Leads —{" "}
          <span className="text-amber">Without Spending More on Ads</span>
        </h1>

        {/* TODO: replace with your subheadline */}
        <p className="mt-6 max-w-2xl text-lg text-cream/80 sm:text-xl">
          Join us live for a 60-minute masterclass and walk away with a
          repeatable system you can start using the same day.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#signup"
            className="rounded-full bg-amber px-8 py-4 text-base font-semibold text-cream shadow-lg shadow-amber/20 transition hover:brightness-110"
          >
            Save My Free Seat
          </a>
          <a
            href="#video"
            className="rounded-full border border-cream/30 px-8 py-4 text-base font-semibold text-cream transition hover:bg-cream/10"
          >
            Watch the Preview
          </a>
        </div>

        <p className="mt-6 text-sm text-cream/60">
          100% free &middot; Limited seats &middot; Replay available for a
          limited time
        </p>
      </div>
    </section>
  );
}
