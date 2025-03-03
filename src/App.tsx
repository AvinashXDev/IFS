import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkedWith from './components/WorkedWith';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <WorkedWith />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;