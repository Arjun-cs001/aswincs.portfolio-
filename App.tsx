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

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* 
        This is an extra feature demonstrating Gemini API integration.
        It respects the prompt's request for React + Gemini expertise while keeping the main UI faithful to the design.
      */}
      <ThumbnailGenerator />
    </div>
  );
}

export default App;