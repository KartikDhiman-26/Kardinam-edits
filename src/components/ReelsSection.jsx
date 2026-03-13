import { useState } from "react"
import { motion } from "framer-motion"
import VideoCard from "./VideoCard"
import VideoModal from "./VideoModal"

export default function ReelsSection() {

  const [activeVideo,setActiveVideo] = useState(null)

  const reels = [
    "/videos/reel1.mp4",
    "/videos/reel2.mp4",
    "/videos/reel5.mp4",
    "/videos/reel4.mp4",
    "/videos/reel3.mp4",
    "/videos/reel6.mp4"
  ]

  return (

    <section id="works" className="py-40 max-w-7xl mx-auto px-8">

      <motion.h2
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className="text-5xl font-bold text-center mb-20"
      >
        Short Form Edits
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

        {reels.map((video,i)=>(
          <VideoCard
            key={i}
            src={video}
            setActiveVideo={setActiveVideo}
            ratio="9:16"
          />
        ))}

      </div>

      <VideoModal
        video={activeVideo}
        close={()=>setActiveVideo(null)}
      />

    </section>

  )
}