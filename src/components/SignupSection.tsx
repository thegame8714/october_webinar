import SignupForm from "./SignupForm";

export default function SignupSection() {
  return (
    <section
      id="signup"
      className="bg-sand px-6 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-2xl gap-12 xl:max-w-6xl xl:grid-cols-[600px_1fr] xl:items-center">
        <div className="text-navy">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Reserve your free spot now.
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Sign up now to save your spot. We&apos;ll remind you before we go
            live.
          </p>
          <ul className="mt-8 space-y-3 text-navy/80">
            <li className="flex items-start gap-3 md:whitespace-nowrap">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber" />
              Learn how to communicate efficiently with every team member.
            </li>
            <li className="flex items-start gap-3 md:whitespace-nowrap">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber" />
              It&apos;s free to attend.
            </li>
            <li className="flex items-start gap-3 md:whitespace-nowrap">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber" />
              It works mainly for engineering managers, and it&apos;s good for all managers.
            </li>
          </ul>
        </div>

        <SignupForm />
      </div>
    </section>
  );
}
