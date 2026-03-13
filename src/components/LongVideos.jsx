import { useState } from "react"
import { motion } from "framer-motion"
import VideoCard from "./VideoCard"
import VideoModal from "./VideoModal"

export default function LongVideos() {

  const [activeVideo, setActiveVideo] = useState(null)

  const videos = [
    "1k0fJFIIzOotFj2at2Y9zVAZBQ1mPGB6B",
    "1If0-0K688oKS9ArAimoxvbGRskDnwdyq",
    "1qKScIV0ru9pquLHexgwlDNDlOOCt3xX6",
    "1CBhUr9IR8dsF9DlBX7Wp9L_HfhlpaxGd"
  ]

  return (

    <section className="py-40 max-w-7xl mx-auto px-8">

      <motion.h2
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className="text-5xl font-bold text-center mb-20"
      >
        Long Form Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-14">

        {videos.map((video,i)=>(
          <VideoCard
            key={i}
            src={video}
            setActiveVideo={setActiveVideo}
            ratio="16:9"
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