import { useEffect } from "react"

export default function CursorGlow() {

  useEffect(() => {

    const glow = document.createElement("div")

    glow.style.position = "fixed"
    glow.style.width = "200px"
    glow.style.height = "200px"
    glow.style.borderRadius = "50%"
    glow.style.background = "rgba(255,0,0,0.15)"
    glow.style.pointerEvents = "none"
    glow.style.filter = "blur(80px)"
    glow.style.zIndex = "9999"

    document.body.appendChild(glow)

    const move = (e) => {
      glow.style.left = e.clientX - 100 + "px"
      glow.style.top = e.clientY - 100 + "px"
    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)

  }, [])

  return null
}