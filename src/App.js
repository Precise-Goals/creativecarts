import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { Footer, Navbar } from "./components";
import { About, Home, Info } from "./containers";
// import ParticleBackground from './components/particles/ParticleBackground';
import { PDTs } from "./components/Products/main";
import LocomotiveScroll from "locomotive-scroll";
import "./locomotive-scroll.css";
import ParticlesComponent from "./components/particles/particle";
import "./components/particles/particle.css";

const App = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    const resizeObserver = new ResizeObserver(() => {
      scroll.update();
    });

    resizeObserver.observe(scrollRef.current);

    return () => {
      resizeObserver.unobserve(scrollRef.current);
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container className="scroll-container" ref={scrollRef}>
      <div className="App" data-scroll-section data-scroll-speed={0.0001}>
        <ParticlesComponent id="Particles" height="400px" width="400px" />
        {/* <div className='particles'><ParticleBackground/></div> */}
        <div className="static">
          <Navbar />
        </div>
        <Home />
        <PDTs />
        {/* <Offer /> */}
        <Info />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default App;
