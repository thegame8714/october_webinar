// TODO: replace with real testimonials (names, roles, photos, quotes)
const testimonials = [
  {
    quote:
      "This webinar completely changed how we think about our pipeline. We implemented one idea from the first 20 minutes and saw results within a week.",
    name: "Jane Doe",
    role: "Marketing Director, Acme Co.",
  },
  {
    quote:
      "Clear, actionable, and no fluff. I've sat through a lot of webinars and this was genuinely one of the best.",
    name: "John Smith",
    role: "Founder, Smith Consulting",
  },
  {
    quote:
      "I loved that it was practical, not theoretical. Walked away with a checklist I could use the same day.",
    name: "Maria Lopez",
    role: "Head of Growth, Nova Studio",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            What Past Attendees Are Saying
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/70">
            Don&apos;t just take our word for it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-cream/10 bg-cream/5 p-6"
            >
              <blockquote className="text-cream/90">
                <span className="text-3xl leading-none text-amber">
                  &ldquo;
                </span>
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple text-sm font-semibold text-cream"
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream">
                    {t.name}
                  </p>
                  <p className="text-xs text-cream/60">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
