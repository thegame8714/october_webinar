import Image from "next/image";

// TODO: replace with real testimonials (names, roles, photos, quotes)
const testimonials = [
  {
    quote:
      "I received guidance on building trust within my team. The advice was valuable and it will help me in building my career going forwards",
    name: "Yuvika A.",
    role: "Engineering Manager",
    photo: "/testimonials/yuvika-a.jpg",
  },
  {
    quote:
      "Fabio taught how to remove bottlenecks, establish clear accountability, and gave me the psychological safety to innovate without fear of failure",
    name: "Mihai M.",
    role: "Engineering Manager - QA",
    photo: "/testimonials/mihai-m.jpg",
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

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
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
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 flex-none rounded-full object-cover"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-purple text-sm font-semibold text-cream"
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
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
