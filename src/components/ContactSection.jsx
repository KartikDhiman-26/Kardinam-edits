import { motion } from "framer-motion"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function ContactSection() {

  return (

    <section id="contact" className="py-40 max-w-6xl mx-auto px-8 text-center">

      <motion.h2
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className="text-5xl font-bold mb-12"
      >
        Let's Work Together
      </motion.h2>

      <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.3}}
        viewport={{once:true}}
        className="text-gray-400 mb-16 text-lg"
      >
        Have a project in mind? Reach out and let's create something amazing.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-8">

        {/* WhatsApp */}

        <a
          href="https://wa.me/+918707071864"
          target="_blank"
          className="flex items-center gap-4 bg-red-500 px-8 py-4 rounded-xl hover:bg-red-600 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] transition"
        >
          <FaWhatsapp size={24}/>
          WhatsApp
        </a>

        {/* Instagram */}

        <a
          href="https://www.instagram.com/kardinam_edits"
          target="_blank"
          className="flex items-center gap-4 bg-red-500 px-8 py-4 rounded-xl hover:bg-red-600 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] transition"
        >
          <FaInstagram size={24}/>
          Instagram
        </a>

        {/* Email */}

        <a
          href="mailto:kartikdhiman80@gmail.com"
          className="flex items-center gap-4 bg-red-500 px-8 py-4 rounded-xl hover:bg-red-600 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] transition"
        >
          <MdEmail size={24}/>
          Email
        </a>

      </div>

    </section>

  )

}