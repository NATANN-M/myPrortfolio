import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SunrayBackground from './components/SunrayBackground';

function App() {
  useEffect(() => {
    // Remove the forced dark mode from moonlight aesthetic
    document.documentElement.classList.remove('dark');
    
    // Update page title
    document.title = "Natanim Masresha | Web & Backend Developer";
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-zinc-900 dark:text-slate-100 selection:bg-emerald-500/30 transition-colors duration-500">
      <SunrayBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;