import VideoCard from "./VideoCard";

export default function VideoGrid() {

  const videos = [
    "/videos/edit1.mp4",
    "/videos/edit2.mp4",
    "/videos/edit3.mp4",
    "/videos/edit4.mp4",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold text-center mb-16">
        My Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {videos.map((video, index) => (
          <VideoCard key={index} src={video} />
        ))}
      </div>

    </section>
  );
}