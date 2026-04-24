export default function Platform() {
  return (
    <section id="plataforma" className="bg-brand-gold page-section flex items-center">
      <div className="max-w-[1600px] mx-auto w-full relative h-full flex items-center px-[47.5px]">
        <div className="w-full relative h-[600px]">
          <div className="absolute font-semibold leading-[1.5] right-0 text-brand-blue text-[24px] bottom-0 whitespace-nowrap">
            <p className="mb-0">E você,</p>
            <p>onde está?</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[600px] h-[600px]">
              <div className="absolute left-0 w-[458px] h-[458px] bottom-0 border-[2px] border-[#f5f5f5] rounded-full opacity-50"></div>
              <div className="absolute right-0 w-[458px] h-[458px] bottom-0 border-[2px] border-[#f5f5f5] rounded-full opacity-50"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-[458px] h-[458px] top-0 border-[2px] border-[#f5f5f5] rounded-full opacity-50"></div>

              <div className="absolute font-semibold leading-[1.5] left-[60px] text-[24px] text-white top-[320px] whitespace-nowrap">
                <p className="mb-0">Inteligência</p>
                <p>Artificial</p>
              </div>
              <p className="absolute font-semibold leading-[1.5] right-[60px] text-[24px] text-white top-[320px] whitespace-nowrap">
                Rede social
              </p>
              <p className="absolute font-semibold leading-[1.5] left-1/2 -translate-x-1/2 text-[24px] text-white top-[100px] whitespace-nowrap">
                Automação
              </p>
              <p className="absolute font-semibold leading-[1.5] left-1/2 -translate-x-1/2 text-brand-red text-[32px] top-[240px] whitespace-nowrap z-10">
                Mugô
              </p>
            </div>
          </div>
          <p className="absolute font-semibold leading-[1.5] left-0 text-[#f5f5f5] text-[24px] top-0 whitespace-nowrap">
            Estamos aqui :)
          </p>
        </div>
      </div>
    </section>
  );
}
