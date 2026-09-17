// TODO: if you add a specific start time, update the copy below to match
const WEBINAR_DATE_LABEL = "October 29, 2026";
const WEBINAR_HEADLINE_LEAD = "TURN YOUR UNDERPERFORMER INTO YOUR TOP PERFORMER";
const WEBINAR_HEADLINE_HIGHLIGHT = "WITHOUT MANAGING THEM OUT";
const WEBINAR_SUBHEADLINE =
  "In 60 minutes, I'll walk you through the 4 U's — the exact framework I use to turn struggling team members around, built from my own years as an Engineering Manager, including the year I nearly stepped away from the role myself.";

// To go live: set NEXT_PUBLIC_WEBINAR_VIDEO_URL in your Vercel project's
// environment variables to a YouTube/Vimeo/Wistia EMBED url, e.g.
// https://www.youtube.com/embed/VIDEO_ID
const videoUrl = process.env.NEXT_PUBLIC_WEBINAR_VIDEO_URL;

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

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center sm:py-24">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-sm font-medium text-amber">
          Free Live Webinar &middot; {WEBINAR_DATE_LABEL}
        </span>

        <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          {WEBINAR_HEADLINE_LEAD}{" "}
          <span className="text-amber">{WEBINAR_HEADLINE_HIGHLIGHT}</span>
        </h1>

        <div className="mt-8 w-full max-w-2xl overflow-hidden rounded-2xl border border-cream/10 bg-navy shadow-xl">
          <div className="relative aspect-video w-full">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                title="Webinar preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-navy to-navy-dark text-cream/80">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber/90">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-7 w-7 text-cream"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="px-6 text-center text-sm">
                  Video preview coming soon &mdash; add{" "}
                  <code className="rounded bg-cream/10 px-1.5 py-0.5">
                    NEXT_PUBLIC_WEBINAR_VIDEO_URL
                  </code>{" "}
                  in your environment variables.
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-sm text-cream/70 sm:text-base">
          {WEBINAR_SUBHEADLINE}
        </p>

        <div className="mt-8">
          <a
            href="#signup"
            className="rounded-full bg-amber px-8 py-4 text-base font-semibold text-cream shadow-lg shadow-amber/20 transition hover:brightness-110"
          >
            Save My Free Seat
          </a>
        </div>

        <p className="mt-6 text-sm text-cream/60">
          100% free &middot; Replay available for a limited time
        </p>
      </div>
    </section>
  );
}
