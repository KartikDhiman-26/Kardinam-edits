import { motion } from "framer-motion"

export default function BackgroundGlow() {

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 200, -200, 0],
          y: [0, -200, 200, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[700px] h-[700px] bg-red-600/20 blur-[200px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -300, 300, 0],
          y: [0, 300, -300, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute right-0 bottom-0 w-[700px] h-[700px] bg-red-500/10 blur-[200px] rounded-full"
      />

    </div>
  )
}