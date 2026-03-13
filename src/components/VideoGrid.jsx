import { useState } from "react"
import { motion } from "framer-motion"
import VideoCard from "./VideoCard"
import VideoModal from "./VideoModal"

export default function ReelsSection() {

  const [activeVideo, setActiveVideo] = useState(null)

  const reels = [
    "1nc_kF2YA0n3ZOYmKffpi0lSHFXpbZLRc",
    "1GTXlWti4EB-xwFgJXahtS4n5Z3s48h_w",
    "1ms_POHrcFm5Nuq-rd2kwOC0rxZtpkAwd",
    "1h4H6i-CRE_Gxl1cl0Szl9uqb9ZUdpWeX",
    "1nomJMy0ZqPAYy1i1EuZyPZDkzA_1xRu8",
    "1U-AN_iKrU9rMsJSrEnm7pRkQa3Tu1aho"
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