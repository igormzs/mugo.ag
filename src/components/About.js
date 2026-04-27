"use client";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";

export default function About() {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <section 
      ref={ref}
      id="sobre-nos" 
      className="bg-[#f5f5f5] page-section flex items-center justify-center overflow-hidden relative py-16 md:py-0"
    >
      <div className="max-w-[1600px] mx-auto w-full h-full flex flex-col md:flex-row items-center relative px-6 md:px-[47.5px]">
        
        {/* Desktop Vertical Title - Exactly the size of the section */}
        <div className={`hidden md:flex absolute left-[-120px] lg:left-[-60px] top-0 h-full w-[300px] items-center justify-center pointer-events-none transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <p className="font-semibold text-brand-red text-[128px] leading-none whitespace-nowrap -rotate-90 tracking-tighter uppercase">
            QUEM SOMOS
          </p>
        </div>

        {/* Mobile Title - Horizontal */}
        <div className={`md:hidden w-full flex justify-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-semibold text-brand-red text-6xl sm:text-7xl tracking-tighter uppercase text-center">
            QUEM SOMOS
          </p>
        </div>
        
        {/* Cards Container - Shifted right on desktop to make room for vertical title */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[40px] w-full md:ml-[180px] lg:ml-[220px]">
          
          {/* Card 1: Julia (Blue) */}
          <div className={`bg-brand-blue flex flex-col gap-6 p-6 md:p-[24px] relative rounded-[40px] w-full max-w-[360px] shadow-2xl hover:-translate-y-2 transition-all duration-700 delay-200 cursor-default
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="w-full h-[280px] md:h-[312px] relative rounded-[24px] overflow-hidden group">
              <Image
                src="/assets/foto julia.jpg"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                alt="Foto Julia Portela"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-semibold text-[#f5f5f5] text-[22px] leading-[1.5]">Julia Portela</p>
                <div className="flex gap-[12px]">
                  <a 
                    href="https://www.linkedin.com/in/juliaportela/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform"
                  >
                    <i className="ph ph-linkedin-logo text-[28px]"></i>
                  </a>
                  <a 
                    href="mailto:mugo.agencia@gmail.com"
                    className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform"
                  >
                    <i className="ph ph-envelope-simple text-[28px]"></i>
                  </a>
                </div>
              </div>
              <p className="font-normal text-[#f5f5f5] text-[20px] leading-[1.5] opacity-80">Diretora Criativa</p>
            </div>
            <p className="font-normal text-[#f5f5f5] text-[16px] leading-[1.6]">
              Com 10 anos de experiência no mercado, Julia trabalhou com multinacionais como Accenture, onde atendeu Electrolux, Whirlpool, Itaú, Petrobrás. Atuou como líder de Marketing Digital na marca Ricardo Almeida e em agências atendendo marcas brasileiras nos Estados Unidos e América Latina.
            </p>
          </div>

          {/* Card 2: Danilo (Gold) */}
          <div className={`bg-brand-gold flex flex-col gap-6 p-6 md:p-[24px] relative rounded-[40px] w-full max-w-[360px] shadow-2xl hover:-translate-y-2 transition-all duration-700 delay-400 cursor-default
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="w-full h-[280px] md:h-[312px] relative rounded-[24px] overflow-hidden group">
              <Image
                src="/assets/foto danilo.jpg"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                alt="Foto Danilo Portela"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-semibold text-[#f5f5f5] text-[22px] leading-[1.5]">Danilo Portela</p>
                <div className="flex gap-[12px]">
                  <a 
                    href="https://www.linkedin.com/in/danilo-portela-52693b34/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform"
                  >
                    <i className="ph ph-linkedin-logo text-[28px]"></i>
                  </a>
                  <a 
                    href="mailto:mugo.agencia@gmail.com"
                    className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform"
                  >
                    <i className="ph ph-envelope-simple text-[28px]"></i>
                  </a>
                </div>
              </div>
              <p className="font-normal text-[#f5f5f5] text-[20px] leading-[1.5] opacity-80">Especialista em I.A.</p>
            </div>
            <p className="font-normal text-[#f5f5f5] text-[16px] leading-[1.6]">
              Danilo começou em publicidade nos anos 2000, como redator. Foi sócio de uma agência em Pernambuco, que atua principalmente no Norte e Nordeste, atendendo clientes como Sonho de Valsa, M Dias Branco e Carnaval do Estado de Pernambuco. Nos últimos 11 anos se especializou em inteligência artificial.
            </p>
          </div>

          {/* Card 3: Kleber (Red) */}
          <div className={`bg-brand-red flex flex-col gap-6 p-6 md:p-[24px] relative rounded-[40px] w-full max-w-[360px] shadow-2xl hover:-translate-y-2 transition-all duration-700 delay-500 cursor-default
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="w-full h-[280px] md:h-[312px] relative rounded-[24px] overflow-hidden group">
              <Image
                src="/assets/foto kleber.jpg"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                alt="Foto Kleber Williams"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-semibold text-[#f5f5f5] text-[22px] leading-[1.5]">Kleber Williams</p>
                <div className="flex gap-[12px]">
                  <a 
                    href="https://www.linkedin.com/in/kleber-willians-29b9915b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform"
                  >
                    <i className="ph ph-linkedin-logo text-[28px]"></i>
                  </a>
                  <a 
                    href="mailto:mugo.agencia@gmail.com"
                    className="flex items-center justify-center cursor-pointer text-[#f5f5f5] hover:scale-110 transition-transform"
                  >
                    <i className="ph ph-envelope-simple text-[28px]"></i>
                  </a>
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
