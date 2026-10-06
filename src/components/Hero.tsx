import Image from "next/image";
import Countdown from "./Countdown";
import { VIDEO_TRANSCRIPT } from "@/lib/transcript";
import {
  WEBINAR_NAME,
  WEBINAR_DATE_LABEL,
  WEBINAR_DATETIME_ISO,
} from "@/lib/webinar";

const WEBINAR_HEADLINE = "You're clear, they are confused.";
const WEBINAR_TAGLINE =
  "Spend less time repeating yourself and more time coaching your team to perform.";
const WEBINAR_SUBHEADLINE =
  "In 60 minutes, learn how to communicate with each type of team member. These methods come from my own research and years of experience. Meet their needs, help them understand you, and build a stronger relationship.";

// Self-hosted video (Vercel Blob) — set NEXT_PUBLIC_WEBINAR_VIDEO_URL in
// your Vercel project's environment variables to the direct .mp4 blob URL.
const videoUrl = process.env.NEXT_PUBLIC_WEBINAR_VIDEO_URL;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-sand text-navy"
    >
      {/* decorative background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-amber/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center sm:py-24">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber/50 bg-amber/10 px-4 py-1.5 text-sm font-medium text-brown">
          {WEBINAR_NAME} &middot; Free Live Webinar &middot; {WEBINAR_DATE_LABEL}
        </span>

        <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          {WEBINAR_HEADLINE}
        </h1>

        <p className="mt-3 max-w-xl text-sm text-navy/70 sm:text-base">
          {WEBINAR_TAGLINE}
        </p>

        <div className="mt-8 w-full max-w-xs overflow-hidden rounded-[20px] border border-navy/10 bg-navy shadow-2xl sm:max-w-2xl">
          <div className="relative aspect-[9/16] w-full sm:aspect-video">
            {videoUrl ? (
              <>
                <Image
                  src="/video-poster.jpg"
                  alt=""
                  aria-hidden
                  fill
                  sizes="672px"
                  className="scale-110 object-cover opacity-80 blur-2xl"
                />
                <video
                  src={videoUrl}
                  poster="/video-poster.jpg"
                  controls
                  aria-label="Welcome video from Fabio Salimbeni"
                  preload="metadata"
                  playsInline
                  className="absolute inset-0 h-full w-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </>
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

        <p className="mt-6 max-w-2xl text-sm text-navy/70 sm:text-base">
          {WEBINAR_SUBHEADLINE}
        </p>

        <div className="mt-8 min-h-[66px]">
          <Countdown targetDate={WEBINAR_DATETIME_ISO} />
        </div>

        <div className="mt-8">
          <a
            href="#signup"
            className="rounded-full bg-amber px-8 py-4 text-base font-semibold text-cream shadow-lg shadow-amber/20 transition hover:brightness-110"
          >
            I&apos;m in!
          </a>
        </div>

        <p className="mt-6 text-sm text-navy/60">100% free to attend live.</p>

        <details className="group mt-8 w-full max-w-2xl text-left">
          <summary className="cursor-pointer list-none text-center text-sm font-medium text-navy/70 underline-offset-4 hover:text-navy hover:underline">
            Read the video transcript
          </summary>
          <div className="mt-4 space-y-3 rounded-2xl border border-navy/10 bg-white/70 p-5 text-sm text-navy/80">
            {VIDEO_TRANSCRIPT.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
