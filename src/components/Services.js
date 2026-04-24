import Image from "next/image";

export default function Services() {
  return (
    <section id="servicos" className="bg-brand-red page-section flex items-center">
      <div className="max-w-[1600px] mx-auto w-full relative h-full flex items-center justify-center">
        <Image
          src="/assets/logo watermark.png"
          alt=""
          width={680}
          height={786}
          className="absolute h-[786px] right-0 opacity-30 top-1/2 -translate-y-1/2 w-auto object-contain pointer-events-none z-0"
        />
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center w-[1116px] z-10 py-20">
          <div className="flex items-center justify-center relative shrink-0 w-full mb-[24px]">
            <p className="font-medium leading-[1.25] text-[#f5f5f5] text-[84px] text-center w-full text-balance">
              O <span className="text-[#222]">TEMPO</span> É O ATIVO MAIS CARO DA SUA OPERAÇÃO
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
            <p className="font-semibold leading-[1.5] w-full relative shrink-0 text-[#f5f5f5] text-[32px] text-center">
              Empresas ainda desperdiçam horas preciosas com processos manuais, decisões dispersas e presença digital sem direção.
            </p>
            <div className="bg-brand-gold flex items-center justify-center p-[16px] relative shrink-0 shadow-md">
              <p className="font-semibold leading-[1.5] text-[#f5f5f5] text-[32px] text-center">
                A Mugô existe para reorganizar essa lógica e devolver tempo.
              </p>
            </div>
            <div className="bg-brand-blue flex items-center justify-center px-[16px] py-[8px] relative shrink-0 shadow-md">
              <p className="font-semibold leading-[1.5] text-[#f5f5f5] text-[32px] text-center">
                Desbloqueando novas possibilidades de crescimento
              </p>
            </div>
          </div>
          <div className="bg-[#f5f5f5] flex items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0 cursor-pointer hover:bg-gray-200 transition-colors shadow-lg">
            <p className="font-semibold leading-[1.5] text-[#222] text-[24px] whitespace-nowrap">
              Agende uma reunião
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
