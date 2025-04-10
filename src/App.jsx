import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Tech from "./components/Tech"
import Works from "./components/Works"
import Contact from "./components/Contact"
import "./index.css";
import StartsCanvas from "./components/canvas/Stars"


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="">
            <div className="">
              <Navbar />
              <Hero />
            </div>

            <About />
            <Experience />
            <Tech />
            <Works />
          </div>

          <div className="relative z-0">
            <Contact />
            <StartsCanvas />
          </div>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
