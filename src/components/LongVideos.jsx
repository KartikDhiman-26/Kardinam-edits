import { useState } from "react"
import { motion } from "framer-motion"
import VideoCard from "./VideoCard"
import VideoModal from "./VideoModal"

export default function LongVideos() {

  const [activeVideo, setActiveVideo] = useState(null)

  const videos = [
    "uo-p_cnnt3w",
    "o5ZoPPHgW3U",
    "8AIKWYoAQLA",
    "D0cpcEu3juE",
  ]

  return (
    <section className="py-40 max-w-7xl mx-auto px-8">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-20"
      >
        Long Form Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-14">
        {videos.map((video, i) => (
          <VideoCard
            key={i}
            src={video}
            setActiveVideo={setActiveVideo}
            ratio="16:9"
            platform="youtube"
          />
        ))}
      </div>

      <VideoModal
        video={activeVideo}
        ratio="16:9"
        platform="youtube"
        close={() => setActiveVideo(null)}
      />

    </section>
  )
}