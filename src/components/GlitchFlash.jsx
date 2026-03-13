import { useEffect } from "react"

export default function GlitchFlash(){

  useEffect(()=>{

    const flash = document.createElement("div")

    flash.style.position = "fixed"
    flash.style.inset = "0"
    flash.style.background = "rgba(255,0,0,0.05)"
    flash.style.opacity = "0"
    flash.style.pointerEvents = "none"
    flash.style.zIndex = "999"

    document.body.appendChild(flash)

    setInterval(()=>{

      flash.style.opacity = "0.3"

      setTimeout(()=>{
        flash.style.opacity = "0"
      },80)

    },8000)

  },[])

  return null
}