export default function VideoModal({ video, close }) {

  if (!video) return null

  return (

    <div
      onClick={close}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
    >

      <video
        src={video}
        controls
        autoPlay
        className="max-h-[90vh] max-w-[90vw]"
      />

    </div>
  )
}