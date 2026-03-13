import { useEffect } from "react"

export default function VideoModal({ video, ratio, platform, close }) {

  if (!video) return null

  const embedURL = platform === "youtube"
    ? `https://www.youtube.com/embed/${video}?autoplay=1&rel=0&modestbranding=1`
    : `https://player.vimeo.com/video/${video}?autoplay=1&title=0&byline=0&portrait=0`

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") close() }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [close])

  return (
    <div
      onClick={close}
      className="fixed inset-0 bg-black/90 backdrop-blur flex items-center justify-center z-50"
    >
      <div
        className={ratio === "9:16"
          ? "w-[320px] md:w-[420px] aspect-[9/16]"
          : "w-[90vw] max-w-4xl aspect-video"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={embedURL}
          className="w-full h-full rounded-xl"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      <button
        onClick={close}
        className="absolute top-6 right-8 text-white text-3xl hover:text-red-400 transition"
      >
        ✕
      </button>
    </div>
  )
}