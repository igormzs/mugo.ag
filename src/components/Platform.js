export default function Platform() {
  return (
    <section id="plataforma" className="bg-brand-gold page-section flex items-center justify-center p-8 md:p-[80px]">
      <div className="max-w-[1600px] mx-auto w-full relative h-full flex items-center px-6 md:px-[47.5px]">
        {/* Main Content Area */}
        <div className="w-full relative min-h-[600px] md:h-[700px] flex flex-col md:flex-row items-center justify-center">
          
          {/* Top-Left Text */}
          <p className="md:absolute font-semibold leading-[1.5] md:left-0 text-[#f5f5f5] text-[20px] md:text-[24px] md:top-[15%] whitespace-nowrap mb-8 md:mb-0">
            Estamos aqui :)
          </p>

          {/* Venn Diagram Container */}
          <div className="relative w-full max-w-[700px] aspect-square md:h-[650px] flex items-center justify-center scale-[0.65] sm:scale-75 md:scale-100">
            
            {/* Circle 1: Top (Automação) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[460px] h-[460px] border-[2px] border-[#f5f5f5] rounded-full opacity-60"></div>
            <p className="absolute top-[120px] left-1/2 -translate-x-1/2 font-semibold text-[24px] text-white whitespace-nowrap z-10">
              Automação
            </p>

            {/* Circle 2: Bottom-Left (IA) */}
            <div className="absolute bottom-0 left-0 w-[460px] h-[460px] border-[2px] border-[#f5f5f5] rounded-full opacity-60"></div>
            <div className="absolute bottom-[160px] left-[50px] font-semibold text-[24px] text-white whitespace-nowrap z-10 text-center">
              <p>Inteligência</p>
              <p>Artificial</p>
            </div>

            {/* Circle 3: Bottom-Right (Rede Social) */}
            <div className="absolute bottom-0 right-0 w-[460px] h-[460px] border-[2px] border-[#f5f5f5] rounded-full opacity-60"></div>
            <p className="absolute bottom-[200px] right-[60px] font-semibold text-[24px] text-white whitespace-nowrap z-10">
              Rede social
            </p>

            {/* Center Label: Mugô */}
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-brand-red text-[42px] z-20">
              Mugô
            </p>
          </div>

          {/* Bottom-Right Text */}
          <div className="md:absolute font-semibold leading-[1.5] md:right-0 text-brand-blue text-[20px] md:text-[24px] md:bottom-[15%] whitespace-nowrap text-center md:text-right mt-8 md:mt-0">
            <p className="mb-0">E você,</p>
            <p>onde está?</p>
          </div>

        </div>
      </div>
    </section>
  );
}
