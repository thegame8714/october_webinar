const bullets = [
  "Leave with a real framework you can use in your next 1:1, not just theory.",
  'Learn why "communicate better" advice has not worked for you so far.',
  "Learn the technique behind Unbiased Reading. Most managers skip this step.",
];

export default function WhatYoullLearn() {
  return (
    <section className="bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Here&apos;s what you&apos;ll walk away with.
        </h2>

        <ul className="mt-12 space-y-6">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-4">
              <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-purple/10 text-purple">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.415L8.5 12.086l6.79-6.796a1 1 0 011.415 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="text-lg text-navy/80">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
