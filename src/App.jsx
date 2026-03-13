import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ReelsSection from "./components/ReelsSection"
import LongVideos from "./components/LongVideos"
import ContactSection from "./components/ContactSection"
import SectionDivider from "./components/SectionDivider"

import BackgroundGlow from "./components/BackgroundGlow"
import CursorGlow from "./components/CursorGlow"
import NeonLines from "./components/NeonLines"
import GlitchFlash from "./components/GlitchFlash"

function App() {

  return (

    <div className="relative overflow-x-hidden">

      {/* CINEMATIC BACKGROUND SYSTEM */}

      <BackgroundGlow/>
      <CursorGlow/>
      <NeonLines/>
      <GlitchFlash/>

      {/* SCANLINE EFFECT */}

      <div className="scanlines"></div>

      {/* MAIN WEBSITE CONTENT */}

      <Navbar/>

      {/* HERO SECTION */}

      <Hero/>

      {/* DIVIDER */}

      <SectionDivider/>

      {/* REELS PROJECTS */}

      <ReelsSection/>

      {/* DIVIDER */}

      <SectionDivider/>

      {/* LONG FORM VIDEOS */}

      <LongVideos/>

      {/* DIVIDER */}

      <SectionDivider/>

      {/* CONTACT / CTA */}

      <ContactSection/>

    </div>

  )

}

export default App