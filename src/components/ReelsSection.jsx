import { useState } from "react"
import { motion } from "framer-motion"

export default function ReelsSection() {

  const [activeVideo, setActiveVideo] = useState(null)

  // Put your YouTube video IDs here
  const reels = [
    "wjSuFITGDkA",
    "od6Y9gJVoUE",
    "z2FDnduITIg",
    "rJ7TxTfd-Ug",
    "z2FDnduITIg",
    "E2GyeAY6srw"
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

        {reels.map((id, i) => (

          <div
            key={i}
            onClick={() => setActiveVideo(id)}
            className="cursor-pointer rounded-xl overflow-hidden aspect-[9/16] bg-black"
          >

            <iframe
              className="w-full h-full pointer-events-none"
              src={`https://www.youtube.com/embed/${id}?controls=0&modestbranding=1`}
              title="YouTube reel"
              frameBorder="0"
              allowFullScreen
            />

          </div>

        ))}

      </div>

      {/* Video Modal */}

      {activeVideo && (

        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50"
        >

          <div
            className="w-[350px] md:w-[420px] aspect-[9/16]"
            onClick={(e) => e.stopPropagation()}
          >

            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube reel"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

          </div>

        </div>

      )}

    </section>
  )
}