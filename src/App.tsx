import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Learning from './components/Learning';
import Contact from './components/Contact';
import ParticleField from './components/ParticleField';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    const hoverQuery = window.matchMedia('(hover: hover)');
    setIsDesktop(hoverQuery.matches);

    const handleHoverChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };
    hoverQuery.addEventListener('change', handleHoverChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      hoverQuery.removeEventListener('change', handleHoverChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop, prefersReducedMotion]);

  return (
    <div className="relative min-h-screen bg-gojo-dark text-white overflow-x-hidden">
      {/* Cursor aura - desktop only, respects reduced motion */}
      {isDesktop && !prefersReducedMotion && (
        <div
          className="cursor-aura"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
        />
      )}

      {/* Floating particle background */}
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Learning />
        <Contact />
      </main>
    </div>
  );
}

export default App;
