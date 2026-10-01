import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
        <a href="#hero" aria-label="Leading Communication">
          <Image
            src="/logo.png"
            alt="Leading Communication"
            width={600}
            height={445}
            priority
            className="h-14 w-auto sm:h-16"
          />
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
