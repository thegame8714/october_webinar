import SignupForm from "./SignupForm";

export default function SignupSection() {
  return (
    <section
      id="signup"
      className="bg-gradient-to-b from-navy-dark to-navy px-6 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div className="text-cream">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Reserve Your Free Spot Now
          </h2>
          <p className="mt-4 text-lg text-cream/70">
            Seats are limited &mdash; sign up now to guarantee access and get
            a reminder before we go live.
          </p>
          <ul className="mt-8 space-y-3 text-cream/80">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              Live Q&amp;A after the session
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              Replay sent straight to your inbox
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              Free resource pack for attendees
            </li>
          </ul>
        </div>

        <SignupForm />
      </div>
    </section>
  );
}
