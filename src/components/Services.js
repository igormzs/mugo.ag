"use client";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";

export default function Services() {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <section 
      ref={ref}
      id="servicos" 
      className="bg-brand-red page-section flex overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto w-full relative flex items-center justify-center px-6 md:px-[47.5px]">
        <Image
          src="/assets/logo watermark.png"
          alt=""
          width={680}
          height={786}
          className={`absolute h-[400px] md:h-[786px] right-0 opacity-20 md:opacity-30 bottom-0 w-auto object-contain pointer-events-none z-0 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-20 md:opacity-30' : 'translate-x-20 opacity-0'}`}
        />
        <div className="flex flex-col gap-8 md:gap-[48px] items-center justify-center w-full max-w-[1116px] z-10 py-16 md:py-20">
          <div className={`flex items-center justify-center relative shrink-0 w-full mb-4 md:mb-[24px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="font-medium leading-tight md:leading-[1.25] text-[#f5f5f5] text-4xl sm:text-5xl md:text-[84px] text-center w-full text-balance">
              O <span className="text-[#222]">TEMPO</span> É O ATIVO MAIS CARO DA SUA OPERAÇÃO
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-[24px] items-center relative shrink-0 w-full">
            <p className={`font-semibold leading-relaxed md:leading-[1.5] w-full relative shrink-0 text-[#f5f5f5] text-xl md:text-[32px] text-center max-w-[900px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Empresas ainda desperdiçam horas preciosas com processos manuais, decisões dispersas e presença digital sem direção.
            </p>
            <div className={`bg-brand-gold flex items-center justify-center p-4 md:p-[16px] relative shrink-0 shadow-md w-full md:w-auto transition-all duration-700 delay-400 group hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="font-semibold leading-tight md:leading-[1.5] text-[#f5f5f5] text-xl md:text-[32px] text-center">
                A Mugô existe para reorganizar essa lógica e devolver tempo.
              </p>
            </div>
            <div className={`bg-brand-blue flex items-center justify-center px-4 py-2 md:px-[16px] md:py-[8px] relative shrink-0 shadow-md w-full md:w-auto transition-all duration-700 delay-500 group hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="font-semibold leading-tight md:leading-[1.5] text-[#f5f5f5] text-xl md:text-[32px] text-center">
                Desbloqueando novas possibilidades de crescimento
              </p>
            </div>
          </div>
          <div className={`bg-[#f5f5f5] flex items-center justify-center px-6 py-3 md:px-[24px] md:py-[12px] relative rounded-[24px] shrink-0 cursor-pointer hover:bg-gray-200 transition-all duration-700 delay-700 shadow-lg mt-4 active:scale-95 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}>
            <p className="font-semibold leading-[1.5] text-[#222] text-xl md:text-[24px] whitespace-nowrap">
              Agende uma reunião
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
