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
  {
    quote:
      "Fabio has a great listening presence as a coach. He is not afraid to challenge when the client is stuck and has the ability to ask simple and yet powerful questions. Fabio does not follow a script but is able to use different techniques",
    name: "Giovanni Amodeo",
    role: "Private Markets Executive",
    photo: "/testimonials/giovanni-amodeo.jpg",
  },
  {
    quote:
      "The session helped me focus more on the things I can control and influence instead of putting pressure on myself to prove everything from day one. I left the session feeling more confident and with clear action items that I can use when starting my next role.",
    name: "Oleksandr A.",
    role: "Engineering Manager",
    photo: "/testimonials/oleksandr-a.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Here&apos;s what past attendees say.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/70">
            Don&apos;t just take our word for it.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-navy/10 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-navy/80">
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
                    width={50}
                    height={50}
                    className="h-[50px] w-[50px] flex-none rounded-full object-cover"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-full bg-purple text-sm font-semibold text-cream"
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-navy">
                    {t.name}
                  </p>
                  <p className="text-xs text-navy/60">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
