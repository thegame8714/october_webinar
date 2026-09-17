export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* TODO: swap for your logo image */}
        <a href="#hero" className="text-lg font-semibold tracking-tight text-cream">
          Your Company
        </a>
        <a
          href="#signup"
          className="rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-cream transition hover:brightness-110"
        >
          I&apos;m in!
        </a>
      </div>
    </header>
  );
}
