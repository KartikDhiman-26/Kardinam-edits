import { useInView } from "react-intersection-observer"
import Tilt from "react-parallax-tilt"

export default function VideoCard({ src, setActiveVideo, ratio }) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4
  })

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
            src={`https://drive.google.com/file/d/${src}/preview`}
            className="w-full h-full pointer-events-none"
            allow="autoplay"
          />

        ) : (

          <div className="w-full h-full bg-black flex items-center justify-center text-gray-600 text-sm">
            Loading preview...
          </div>

        )}

        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition flex items-center justify-center">

          <div className="opacity-0 hover:opacity-100 transition text-white text-xs tracking-widest">
            CLICK TO WATCH
          </div>

        </div>

      </div>

    </Tilt>

  )
}