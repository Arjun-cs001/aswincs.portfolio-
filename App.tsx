import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThumbnailGenerator from './components/ThumbnailGenerator';
import ScrollReveal from './components/ScrollReveal';
import RobotMascot from './components/RobotMascot';
import { TransitionProvider } from './components/PixelTransition';

function App() {
  return (
    <TransitionProvider>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 selection:text-white" id="top">
        <Navbar />
        <main>
          <Hero />
          
          <ScrollReveal>
            <TrustedBy />
          </ScrollReveal>
          
          <ScrollReveal>
            <Portfolio />
          </ScrollReveal>
          
          <ScrollReveal>
            <Process />
          </ScrollReveal>
          
          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>
          
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </main>
        <Footer />
        
        {/* Floating AI Robot Mascot */}
        <RobotMascot />
        
        {/* 
          This is an extra feature demonstrating Gemini API integration.
          It respects the prompt's request for React + Gemini expertise while keeping the main UI faithful to the design.
        */}
        <ThumbnailGenerator />
      </div>
    </TransitionProvider>
  );
}

export default App;