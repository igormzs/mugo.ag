"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#E9E9E9] min-h-screen w-full overflow-hidden relative shrink-0 flex items-center justify-center">
      {/* Background Video centered */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="max-w-[1200px] max-h-[800px] w-auto h-auto object-contain pointer-events-none video-mask"
        >
          <source src="/videos/Mugo-3dlogo-1080p-new.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Constraint (1600px) */}
      <div className="max-w-[1600px] mx-auto relative min-h-screen w-full z-10 pointer-events-none">
        {/* CTA */}
        <div className="absolute bg-brand-gold content-stretch flex items-center justify-center right-[47.5px] px-[24px] py-[12px] rounded-[24px] bottom-[10%] cursor-pointer hover:bg-brand-red transition-colors z-20 shadow-lg pointer-events-auto group">
          <p className="font-semibold leading-[1.5] relative shrink-0 text-[#f5f5f5] text-[24px] whitespace-nowrap">
            Faça um diagnóstico
          </p>
        </div>
      </div>
    </section>
  );
}
