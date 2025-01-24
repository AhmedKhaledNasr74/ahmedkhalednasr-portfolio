import { Toaster } from "react-hot-toast";
import "./App.css";
import About from "./Components/About/About";
import { CanvasRevealEffectDemo } from "./Components/Approach/Approach";
import { Contact } from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";

import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";
import { FloatingNav } from "./Components/ui/FloatingNav";

import { SpotlightNew } from "./Components/ui/Spotlight-New";
import ScoreContextProvider from "./Context/ScoreContext";
import { navItems } from "./data/index";

function App() {
    return (
        <ScoreContextProvider>
            <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
                <Toaster position="bottom-right" />
                <div>
                    <SpotlightNew
                        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 100%, 85%, .08) 0, hsla(270, 100%, 55%, .06) 50%, hsla(270, 100%, 45%, 0) 80%)"
                        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 85%, .06) 0, hsla(270, 100%, 55%, .04) 80%, transparent 100%)"
                        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 85%, .04) 0, hsla(270, 100%, 45%, .02) 80%, transparent 100%)"
                    />
                </div>
                <div className="max-w-7xl w-full flex flex-col gap-20">
                    <FloatingNav navItems={navItems} />
                    <Hero />
                    <About />
                    <Projects />
                    <Testimonials />
                    <CanvasRevealEffectDemo />

                    <Contact />
                    <Footer />
                </div>
            </main>
        </ScoreContextProvider>
    );
}

export default App;
