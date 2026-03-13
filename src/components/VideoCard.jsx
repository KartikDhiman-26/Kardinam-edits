import { useInView } from "react-intersection-observer"
import Tilt from "react-parallax-tilt"

export default function VideoCard({ src, setActiveVideo, ratio, platform }) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const embedURL = platform === "youtube"
    ? `https://www.youtube.com/embed/${src}?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0`
    : `https://player.vimeo.com/video/${src}?background=1&autoplay=1&loop=1&muted=1`

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
        className={`cursor-pointer relative overflow-hidden rounded-2xl border border-red-500/30 shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:shadow-[0_0_60px_rgba(255,0,0,0.35)] transition ${
          ratio === "9:16" ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        {inView ? (
          <iframe
            src={embedURL}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center text-gray-500">
            Loading preview...
          </div>
        )}

        {/* Overlay to catch clicks since iframe swallows them */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition flex items-center justify-center">
          <div className="opacity-0 hover:opacity-100 transition text-white text-xs tracking-widest">
            CLICK TO WATCH
          </div>
        </div>

      </div>
    </Tilt>
  )
}