import { useEffect } from "react"

export default function NeonLines() {

  useEffect(() => {

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    canvas.style.position = "fixed"
    canvas.style.top = 0
    canvas.style.left = 0
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.pointerEvents = "none"
    canvas.style.zIndex = "-1"

    document.body.appendChild(canvas)

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const lines = []

    for (let i = 0; i < 20; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 50 + Math.random() * 150,
        speed: 0.2 + Math.random() * 0.5
      })
    }

    function draw() {

      ctx.clearRect(0,0,canvas.width,canvas.height)

      ctx.strokeStyle = "rgba(255,0,0,0.2)"
      ctx.lineWidth = 1

      lines.forEach(line => {

        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x + line.length, line.y)

        ctx.stroke()

        line.x += line.speed

        if(line.x > canvas.width){
          line.x = -line.length
        }

      })

      requestAnimationFrame(draw)

    }

    draw()

  },[])

  return null
}