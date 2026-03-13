export default function VideoModal({ video, close }) {

  if (!video) return null

  return (

    <div
      onClick={close}
      className="fixed inset-0 bg-black/90 backdrop-blur flex items-center justify-center z-50"
    >

      <div
        className="w-[350px] md:w-[420px] aspect-[9/16]"
        onClick={(e) => e.stopPropagation()}
      >

        <iframe
          src={`https://drive.google.com/file/d/${video}/preview`}
          className="w-full h-full rounded-xl"
          allow="autoplay"
        />

      </div>

    </div>

  )
}