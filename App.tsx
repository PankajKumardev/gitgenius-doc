import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Hero } from './components/Hero';
import { Installation } from './components/Installation';
import { Features } from './components/Features';
import { DeepDive } from './components/DeepDive';
import { Changelog } from './components/Changelog';
import { Integration } from './components/Integration';
import { Developer } from './components/Developer';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full min-h-screen overflow-hidden">
      <Hero />
      <Installation />
      <Features />
      <DeepDive />
      <Changelog />
      <Integration />
      <Developer />
      <Footer />
    </main>
  );
}