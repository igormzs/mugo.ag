'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Platform() {
  const [step, setStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Restart animation whenever it comes into view for better "WOW" factor
          setStep(0);
          setTimeout(() => {
            setStep(1);
            setTimeout(() => setStep(2), 800);
            setTimeout(() => setStep(3), 1600);
            setTimeout(() => setStep(4), 2400);
            setTimeout(() => setStep(5), 3200);
          }, 100);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="plataforma" 
      className="bg-brand-gold page-section flex items-center justify-center p-6 md:p-20 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full relative h-full flex items-center justify-center">
        
        {/* Responsive Diagram Container */}
        <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center scale-90 sm:scale-100 transition-all duration-1000 ease-out">
          
          {/* 1. "Estamos aqui" Label */}
          <div 
            className={`absolute left-[5%] top-[10%] md:top-[15%] z-50 transition-all duration-1000 ease-out 
              ${step >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <p className="font-semibold text-white text-[16px] md:text-[24px] whitespace-nowrap drop-shadow-md">
              Estamos aqui :)
            </p>
          </div>

          {/* 2. Sequential Arrow (SVG) */}
          <svg 
            viewBox="0 0 100 100" 
            className="absolute inset-0 w-full h-full pointer-events-none z-40 overflow-visible"
            preserveAspectRatio="none"
          >
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="white" />
              </marker>
            </defs>
            <line 
              x1="18" y1="22" 
              x2="41" y2="43" 
              stroke="white" 
              strokeWidth="0.25" 
              markerEnd="url(#arrowhead)" 
              className={`transition-all duration-1000 ease-out`}
              style={{
                opacity: step >= 5 ? 1 : 0
              }}
            />
          </svg>

          {/* 3. The Venn Diagram Circles */}
          <div className="relative w-[75%] h-[75%] flex items-center justify-center">
            
            {/* Circle 1: Automação (Top) */}
            <div 
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-[65%] aspect-square border-[2px] border-white rounded-full transition-all duration-1000 ease-out
                ${step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            >
              <div className={`absolute top-[15%] left-1/2 -translate-x-1/2 transition-all duration-700 delay-500
                ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="font-semibold text-white text-[14px] md:text-[22px] whitespace-nowrap">Automação</p>
              </div>
            </div>

            {/* Circle 2: Inteligência Artificial (Bottom Left) */}
            <div 
              className={`absolute bottom-0 left-0 w-[65%] aspect-square border-[2px] border-white rounded-full transition-all duration-1000 ease-out
                ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            >
              <div className={`absolute bottom-[22%] left-[12%] text-center transition-all duration-700 delay-500
                ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="font-semibold text-white text-[12px] md:text-[22px] leading-tight">
                  Inteligência<br/>Artificial
                </p>
              </div>
            </div>

            {/* Circle 3: Rede social (Bottom Right) */}
            <div 
              className={`absolute bottom-0 right-0 w-[65%] aspect-square border-[2px] border-white rounded-full transition-all duration-1000 ease-out
                ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            >
              <div className={`absolute bottom-[24%] right-[12%] transition-all duration-700 delay-500
                ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="font-semibold text-white text-[12px] md:text-[22px] whitespace-nowrap">Rede social</p>
              </div>
            </div>

            {/* 4. Center Label: Mugô */}
            <div className={`z-50 transition-all duration-1000 ease-out 
              ${step >= 4 ? 'opacity-100 scale-110' : 'opacity-0 scale-0'}`}>
              <Image 
                src="/assets/mugo-logo.png" 
                alt="Mugô" 
                width={240} 
                height={80} 
                className="w-[120px] md:w-[240px] h-auto object-contain drop-shadow-[0_0_15px_rgba(235,51,73,0.2)]"
              />
            </div>

          </div>

          {/* 5. "E você" Text */}
          <div 
            className={`absolute right-[5%] bottom-[5%] md:bottom-[10%] z-50 transition-all duration-1000 ease-out
              ${step >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="font-semibold text-brand-blue text-[16px] md:text-[24px] text-right leading-tight drop-shadow-md">
              <p className="mb-0">E você,</p>
              <p>onde está?</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
