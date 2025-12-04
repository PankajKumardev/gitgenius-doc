import React, { useState, useRef, useEffect } from 'react';

export const Changelog: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    const relativeX = clientX - containerRect.left;
    const percentage = Math.min(Math.max((relativeX / containerRect.width) * 100, 0), 100);
    
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="font-serif text-5xl text-ink mb-6">Release notes, <span className="italic text-indigo">automated</span>.</h2>
        <p className="text-pencil text-lg">Turn messy commit messages into beautiful, human-readable changelogs.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <div 
          ref={containerRef}
          className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-black/5 cursor-col-resize select-none bg-white"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* Layer 1: Messy Commits (Background) */}
          <div className="absolute inset-0 bg-[#1E1E1E] p-8 md:p-12 font-mono text-sm overflow-hidden">
             <h3 className="text-white/30 uppercase tracking-widest mb-6">Raw Git Log</h3>
             <div className="space-y-3 text-gray-400 opacity-60 blur-[1px]">
               <p><span className="text-[#F05033]">a0f104b</span> fix: bug in login</p>
               <p><span className="text-[#F05033]">b2c981a</span> wip styles</p>
               <p><span className="text-[#F05033]">c3d812f</span> update button</p>
               <p><span className="text-[#F05033]">d4e723g</span> merge branch 'dev'</p>
               <p><span className="text-[#F05033]">e5f634h</span> fix typo</p>
               <p><span className="text-[#F05033]">f6g545i</span> trying to fix render issue</p>
               <p><span className="text-[#F05033]">g7h456j</span> final fixes??</p>
               <p><span className="text-[#F05033]">h8i367k</span> Revert "update button"</p>
             </div>
             <div className="absolute bottom-8 right-8 text-white/20 font-serif italic text-4xl">Before</div>
          </div>

          {/* Layer 2: Clean Changelog (Foreground - Clipped) */}
          <div 
            className="absolute inset-0 bg-white p-8 md:p-12 overflow-hidden"
            style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
          >
             <h3 className="text-pencil uppercase tracking-widest mb-6">Generated Changelog</h3>
             <div className="prose prose-lg">
                <h1 className="font-serif text-3xl text-ink mb-4">v1.1.2 Release</h1>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="text-xl">✨</span>
                    <div>
                      <span className="font-bold text-ink">New Login Flow</span>
                      <p className="text-pencil text-base">Refactored authentication provider to support refresh tokens and prevent race conditions.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-xl">🐛</span>
                    <div>
                      <span className="font-bold text-ink">Rendering Fixes</span>
                      <p className="text-pencil text-base">Resolved hydration mismatches in the button component.</p>
                    </div>
                  </li>
                </ul>
             </div>
             <div className="absolute bottom-8 right-8 text-indigo/20 font-serif italic text-4xl">After</div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-indigo cursor-col-resize z-20 hover:w-1.5 transition-all"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-indigo rounded-full shadow-lg flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline><polyline points="9 18 3 12 9 6"></polyline><path d="M21 12h-6"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};