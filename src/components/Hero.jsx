import { motion } from "framer-motion"
import MagneticButton from "./MagneticButton"

export default function Hero() {

  return (

    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center"
    >

      <motion.h1
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        className="text-7xl font-bold tracking-tight"
      >
        Kardinam Edits
      </motion.h1>

      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.5 }}
        className="text-gray-400 mt-4 text-xl"
      >
        Video Editor & Motion Designer
      </motion.p>

      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1 }}
        className="mt-10"
      >

        <a href="#works">
          <MagneticButton>
            View My Work
          </MagneticButton>
        </a>

      </motion.div>

    </section>

  )
}