import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-nos" className="bg-[#f5f5f5] page-section flex items-center">
      <div className="max-w-[1600px] mx-auto w-full relative h-full flex items-center px-[47.5px] py-20">
        <div className="flex flex-col gap-[24px] items-end w-full z-10">
          <div className="flex gap-[48px] h-[656px] items-center relative w-full overflow-hidden">
            {/* Card 1 */}
            <div className="bg-brand-blue flex flex-col gap-[24px] h-full items-start p-[24px] relative rounded-[32px] shrink-0 w-[348px] shadow-lg hover:-translate-y-2 transition-transform cursor-default">
              <Image
                src="/assets/foto julia.png"
                width={300}
                height={300}
                className="rounded-[24px] shrink-0 w-[300px] h-[300px] object-cover"
                alt="Foto Julia Portela"
              />
              <div className="flex flex-col gap-[8px] w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="font-semibold text-[#f5f5f5] text-[20px] leading-[1.5]">Julia Portela</p>
                  <div className="flex gap-[12px]">
                    <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                      <i className="ph-fill ph-linkedin-logo text-[28px]"></i>
                    </div>
                    <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                      <i className="ph-fill ph-envelope-simple text-[28px]"></i>
                    </div>
                  </div>
                </div>
                <p className="font-normal text-[#f5f5f5] text-[20px] leading-[1.5] opacity-80">Diretora Criativa</p>
              </div>
              <p className="font-normal text-[#f5f5f5] text-[16px] leading-[1.5]">
                Com 10 ano de experiência no mercado, Julia trabalhou com multinacionais como Accenture, onde atendeu Electrolux, Whirpool, Itaú, Petrobrás. Atuou como líder de Marketing Digital na marca Ricardo Almeida e em agências atendendo marcas brasileiras nos Estados Unidos e América Latina.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-brand-red flex flex-col gap-[24px] h-full items-center p-[24px] relative rounded-[32px] shrink-0 w-[348px] shadow-lg hover:-translate-y-2 transition-transform cursor-default">
              <Image
                src="/assets/image.png"
                width={300}
                height={300}
                className="rounded-[24px] shrink-0 w-[300px] h-[300px] object-cover"
                alt="Foto Danilo Portela"
              />
              <div className="flex flex-col gap-[8px] w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="font-semibold text-[#f5f5f5] text-[20px] leading-[1.5]">Danilo Portela</p>
                  <div className="flex gap-[12px]">
                    <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                      <i className="ph-fill ph-linkedin-logo text-[28px]"></i>
                    </div>
                    <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                      <i className="ph-fill ph-envelope-simple text-[28px]"></i>
                    </div>
                  </div>
                </div>
                <p className="font-normal text-[#f5f5f5] text-[20px] leading-[1.5] opacity-80">Especialista em I.A.</p>
              </div>
              <p className="font-normal text-[#f5f5f5] text-[16px] leading-[1.5] text-left w-full">
                Danilo começou em publicidade nos anos 2000, como redator. Foi sócio de uma agência em Pernambuco, que atua principalmente no Norte e Nordeste, atendendo clientes como Sonho de Valsa, M Dias Branco e Carnaval do Estado de Pernambuco. Nos últimos 11 anos se especializou em inteligência artificial.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-brand-gold flex flex-col gap-[24px] h-full items-center p-[24px] relative rounded-[32px] shrink-0 w-[348px] shadow-lg hover:-translate-y-2 transition-transform cursor-default">
              <Image
                src="/assets/foto kleber.png"
                width={300}
                height={300}
                className="rounded-[24px] shrink-0 w-[300px] h-[300px] object-cover"
                alt="Foto Kleber Williams"
              />
              <div className="flex flex-col gap-[8px] w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="font-semibold text-[#f5f5f5] text-[20px] leading-[1.5]">Kleber Williams</p>
                  <div className="flex gap-[12px]">
                    <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                      <i className="ph-fill ph-linkedin-logo text-[28px]"></i>
                    </div>
                    <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                      <i className="ph-fill ph-envelope-simple text-[28px]"></i>
                    </div>
                  </div>
                </div>
                <p className="font-normal text-[#f5f5f5] text-[20px] leading-[1.5] opacity-80">Desenvolvedor de Sistemas</p>
              </div>
              <p className="font-normal text-[#f5f5f5] text-[16px] leading-[1.5] text-left w-full">
                Formado em Desenvolvimento de Sistemas pela FIAP, Kleber atua na criação de soluções digitais que unem tecnologia, automação e performance. Trabalha com automação de redes sociais, desenvolvimento de chatbots e criação de sites, e-commerce e landing pages.
              </p>
            </div>
          </div>
          <div className="flex gap-[16px] items-center justify-end">
            <div className="w-[48px] h-[48px] rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center cursor-pointer transition-colors text-[#222]">
              <i className="ph-bold ph-arrow-left text-[24px]"></i>
            </div>
            <div className="w-[48px] h-[48px] rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center cursor-pointer transition-colors text-[#222]">
              <i className="ph-bold ph-arrow-right text-[24px]"></i>
            </div>
          </div>
        </div>
        {/* Title Watermark inside content */}
        <div className="absolute flex h-[858px] items-center justify-center left-[15px] top-1/2 -translate-y-1/2 w-[192px]">
          <div className="-rotate-90 flex-none">
            <p className="font-normal text-brand-red text-[128px] leading-[1.25] whitespace-nowrap opacity-80 pointer-events-none">
              QUEM SOMOS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
