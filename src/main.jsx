import { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Hero from "./components/Hero" // NOT lazy — this is your LCP element

// Lazy load everything below the fold
const ReelsSection = lazy(() => import("./components/ReelsSection"))
const LongVideos = lazy(() => import("./components/LongVideos"))
const Navbar = lazy(() => import("./components/Navbar"))
const Footer = lazy(() => import("./components/Footer"))

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={null}>
    <Navbar />
    <Hero />
    <ReelsSection />
    <LongVideos />
    <Footer />
  </Suspense>
)