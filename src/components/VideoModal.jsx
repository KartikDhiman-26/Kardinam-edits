export default function VideoModal({ video, close }) {

  if (!video) return null

  return (

    <div
      onClick={close}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
    >

      <div
        className="w-[350px] md:w-[420px] aspect-[9/16]"
        onClick={(e) => e.stopPropagation()}
      >

        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

      </div>

    </div>

  )
}