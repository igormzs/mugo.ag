import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-nos" className="bg-[#f5f5f5] page-section flex items-center justify-center overflow-hidden p-[40px]">
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between">
        
        {/* Title Container - Vertical Text on the Left */}
        <div className="w-[180px] shrink-0 flex items-center justify-start relative h-full">
          <p className="font-bold text-brand-red text-[128px] leading-none whitespace-nowrap -rotate-90 origin-center tracking-tighter uppercase ml-[64px]">
            QUEM SOMOS
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex-1 flex items-center justify-center gap-[40px]">
          
          {/* Card 1: Julia (Blue) */}
          <div className="bg-brand-blue flex flex-col gap-[24px] h-full items-start p-[24px] relative rounded-[40px] shrink-0 w-[360px] shadow-2xl hover:-translate-y-2 transition-transform cursor-default">
            <div className="w-full h-[312px] relative rounded-[24px] overflow-hidden">
              <Image
                src="/assets/foto julia.jpg"
                fill
                className="object-cover object-top"
                alt="Foto Julia Portela"
              />
            </div>
            <div className="flex flex-col gap-[8px] w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-semibold text-[#f5f5f5] text-[22px] leading-[1.5]">Julia Portela</p>
                <div className="flex gap-[12px]">
                  <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                    <i className="ph ph-linkedin-logo text-[28px]"></i>
                  </div>
                  <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                    <i className="ph ph-envelope-simple text-[28px]"></i>
                  </div>
                </div>
              </div>
              <p className="font-normal text-[#f5f5f5] text-[20px] leading-[1.5] opacity-80">Diretora Criativa</p>
            </div>
            <p className="font-normal text-[#f5f5f5] text-[16px] leading-[1.6]">
              Com 10 anos de experiência no mercado, Julia trabalhou com multinacionais como Accenture, onde atendeu Electrolux, Whirlpool, Itaú, Petrobrás. Atuou como líder de Marketing Digital na marca Ricardo Almeida e em agências atendendo marcas brasileiras nos Estados Unidos e América Latina.
            </p>
          </div>

          {/* Card 2: Danilo (Gold) */}
          <div className="bg-brand-gold flex flex-col gap-[24px] h-full items-start p-[24px] relative rounded-[40px] shrink-0 w-[360px] shadow-2xl hover:-translate-y-2 transition-transform cursor-default">
            <div className="w-full h-[312px] relative rounded-[24px] overflow-hidden">
              <Image
                src="/assets/foto danilo.jpg"
                fill
                className="object-cover object-top"
                alt="Foto Danilo Portela"
              />
            </div>
            <div className="flex flex-col gap-[8px] w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-semibold text-[#f5f5f5] text-[22px] leading-[1.5]">Danilo Portela</p>
                <div className="flex gap-[12px]">
                  <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                    <i className="ph ph-linkedin-logo text-[28px]"></i>
                  </div>
                  <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                    <i className="ph ph-envelope-simple text-[28px]"></i>
                  </div>
                </div>
              </div>
              <p className="font-normal text-[#f5f5f5] text-[20px] leading-[1.5] opacity-80">Especialista em I.A.</p>
            </div>
            <p className="font-normal text-[#f5f5f5] text-[16px] leading-[1.6]">
              Danilo começou em publicidade nos anos 2000, como redator. Foi sócio de uma agência em Pernambuco, que atua principalmente no Norte e Nordeste, atendendo clientes como Sonho de Valsa, M Dias Branco e Carnaval do Estado de Pernambuco. Nos últimos 11 anos se especializou em inteligência artificial.
            </p>
          </div>

          {/* Card 3: Kleber (Red) */}
          <div className="bg-brand-red flex flex-col gap-[24px] h-full items-start p-[24px] relative rounded-[40px] shrink-0 w-[360px] shadow-2xl hover:-translate-y-2 transition-transform cursor-default">
            <div className="w-full h-[312px] relative rounded-[24px] overflow-hidden">
              <Image
                src="/assets/foto kleber.jpg"
                fill
                className="object-cover object-top"
                alt="Foto Kleber Williams"
              />
            </div>
            <div className="flex flex-col gap-[8px] w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-semibold text-[#f5f5f5] text-[22px] leading-[1.5]">Kleber Williams</p>
                <div className="flex gap-[12px]">
                  <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                    <i className="ph ph-linkedin-logo text-[28px]"></i>
                  </div>
                  <div className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform">
                    <i className="ph ph-envelope-simple text-[28px]"></i>
                  </div>
                </div>
              </div>
              <p className="font-normal text-[#f5f5f5] text-[20px] leading-[1.5] opacity-80">Desenvolvedor de Sistemas</p>
            </div>
            <p className="font-normal text-[#f5f5f5] text-[16px] leading-[1.6]">
              Formado em Desenvolvimento de Sistemas pela FIAP, Kleber atua na criação de soluções digitais que unem tecnologia, automação e performance. Trabalha com automação de redes sociais, desenvolvimento de chatbots e criação de sites, e-commerce e landing pages.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
