// To go live: set NEXT_PUBLIC_WEBINAR_VIDEO_URL in your Vercel project's
// environment variables to a YouTube/Vimeo/Wistia EMBED url, e.g.
// https://www.youtube.com/embed/VIDEO_ID
const videoUrl = process.env.NEXT_PUBLIC_WEBINAR_VIDEO_URL;

export default function VideoSection() {
  return (
    <section id="video" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Here&apos;s a Sneak Peek of What You&apos;ll Learn
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/70">
          Watch this short preview before you save your seat.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-navy/10 bg-navy shadow-xl">
          <div className="relative aspect-video w-full">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                title="Webinar preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
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
                <p className="text-sm">
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
      </div>
    </section>
  );
}
