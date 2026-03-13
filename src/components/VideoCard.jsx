import { useInView } from "react-intersection-observer"
import Tilt from "react-parallax-tilt"

export default function VideoCard({ src, setActiveVideo, ratio, platform }) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const embedURL = platform === "youtube"
    ? `https://www.youtube.com/embed/${src}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1`
    : `https://player.vimeo.com/video/${src}?background=1&autoplay=1&loop=1&muted=1&transparent=0`

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.3}
      scale={1.05}
      transitionSpeed={2000}
      className="rounded-2xl"
    >
      <div
        ref={ref}
        onClick={() => setActiveVideo(src)}
        className={`cursor-pointer relative overflow-hidden rounded-2xl border border-red-500/30 shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:shadow-[0_0_60px_rgba(255,0,0,0.35)] transition group ${
          ratio === "9:16" ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        {inView ? (
          <>
            <iframe
              src={embedURL}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />

            {/* Overlay to catch clicks */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition text-white text-xs tracking-widest">
                CLICK TO WATCH
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-zinc-900" />
        )}
      </div>
    </Tilt>
  )
}