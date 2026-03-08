'use client';

import { useEffect, useRef } from 'react';

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] rounded-full bg-[#00d4ff] opacity-[0.06] blur-[100px]" />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-[#8b5cf6] opacity-[0.08] blur-[80px] translate-x-10 -translate-y-10" />
      </div>

      {/* Core assembly */}
      <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]">
        {/* Orbit ring 3 — outer */}
        <div className="absolute inset-[-20px] animate-spin-slow">
          <div className="w-full h-full rounded-full border border-dashed border-[rgba(0,212,255,0.12)]" />
        </div>

        {/* Orbit ring 2 */}
        <div className="absolute inset-[20px] animate-spin-reverse">
          <div className="w-full h-full rounded-full border border-[rgba(139,92,246,0.15)]" />
        </div>

        {/* Orbit ring 1 — inner */}
        <div className="absolute inset-[60px] animate-spin-slow" style={{ animationDuration: '20s' }}>
          <div className="w-full h-full rounded-full border border-[rgba(6,182,212,0.2)]" />
        </div>

        {/* Orbiting particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin-slow" style={{ animationDuration: '15s' }}>
            <div className="w-3 h-3 rounded-full bg-[#00d4ff] shadow-[0_0_12px_rgba(0,212,255,0.6)] absolute" style={{ transform: 'translateX(150px)' }} />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin-reverse" style={{ animationDuration: '20s' }}>
            <div className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6] shadow-[0_0_10px_rgba(139,92,246,0.6)] absolute" style={{ transform: 'translateX(120px)' }} />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin-slow" style={{ animationDuration: '25s' }}>
            <div className="w-2 h-2 rounded-full bg-[#06b6d4] shadow-[0_0_8px_rgba(6,182,212,0.5)] absolute" style={{ transform: 'translateX(90px)' }} />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin-reverse" style={{ animationDuration: '12s' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#ec4899] shadow-[0_0_6px_rgba(236,72,153,0.5)] absolute" style={{ transform: 'translateX(170px)' }} />
          </div>
        </div>

        {/* Central core orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] opacity-[0.15] blur-xl animate-pulse-glow" />
            {/* Mid ring */}
            <div className="absolute -inset-4 rounded-full border border-[rgba(0,212,255,0.2)]" />
            {/* Core */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#00d4ff] via-[#7c3aed] to-[#8b5cf6] shadow-[0_0_40px_rgba(0,212,255,0.3),0_0_80px_rgba(139,92,246,0.15)] flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#050508]/60 backdrop-blur-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#00d4ff]" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="absolute top-2 right-0 sm:top-4 sm:-right-4 animate-float">
          <div className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[rgba(255,255,255,0.04)] backdrop-blur-md border border-[rgba(0,212,255,0.15)] shadow-[0_0_20px_rgba(0,212,255,0.05)]">
            <div className="text-[10px] text-[#94a3b8] uppercase tracking-wider">AI Agents</div>
            <div className="text-lg sm:text-xl font-bold text-[#00d4ff] font-[family-name:var(--font-outfit)]">8</div>
          </div>
        </div>

        <div className="absolute bottom-8 -left-2 sm:bottom-10 sm:-left-8 animate-float-delayed">
          <div className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[rgba(255,255,255,0.04)] backdrop-blur-md border border-[rgba(139,92,246,0.15)] shadow-[0_0_20px_rgba(139,92,246,0.05)]">
            <div className="text-[10px] text-[#94a3b8] uppercase tracking-wider">Capabilities</div>
            <div className="text-lg sm:text-xl font-bold text-[#8b5cf6] font-[family-name:var(--font-outfit)]">398</div>
          </div>
        </div>

        <div className="absolute bottom-0 right-4 sm:-bottom-2 sm:right-8 animate-float" style={{ animationDelay: '1s' }}>
          <div className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[rgba(255,255,255,0.04)] backdrop-blur-md border border-[rgba(6,182,212,0.15)] shadow-[0_0_20px_rgba(6,182,212,0.05)]">
            <div className="text-[10px] text-[#94a3b8] uppercase tracking-wider">Sectors</div>
            <div className="text-lg sm:text-xl font-bold text-[#06b6d4] font-[family-name:var(--font-outfit)]">17</div>
          </div>
        </div>
      </div>
    </div>
  );
}
