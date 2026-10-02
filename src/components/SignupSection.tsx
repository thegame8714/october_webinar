import SignupForm from "./SignupForm";

export default function SignupSection() {
  return (
    <section
      id="signup"
      className="bg-sand px-6 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div className="text-navy">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Reserve your free spot now.
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Sign up now to save your spot. We&apos;ll remind you before we go
            live.
          </p>
          <ul className="mt-8 space-y-3 text-navy/80">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              Learn the 4 U&apos;s live.
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              It&apos;s free to attend.
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              It works for any manager.
            </li>
          </ul>
        </div>

        <SignupForm />
      </div>
    </section>
  );
}
