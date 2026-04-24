import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-blue page-section flex items-center">
      <div className="max-w-[1600px] mx-auto w-full relative h-full flex items-center px-[47.5px] py-20">
        <Image
          src="/assets/logo watermark.png"
          alt=""
          width={680}
          height={786}
          className="absolute h-[786px] left-[-76px] opacity-10 top-1/2 -translate-y-1/2 w-auto object-contain pointer-events-none"
        />

        <div className="absolute bg-[#f5f5f5] flex flex-col gap-[32px] items-start right-[47.5px] p-[48px] rounded-[32px] w-[685px] shadow-2xl z-10">
          <div className="flex flex-col gap-[8px] items-start text-brand-blue w-full">
            <p className="font-bold text-[32px] leading-[1.5]">
              Assine a nossa newsletter
            </p>
            <p className="font-normal text-[24px] leading-[1.5]">
              Deixe seu e-mail abaixo e receba atualizações
            </p>
          </div>
          <div className="w-full flex">
            <input
              type="email"
              placeholder="Seu e-mail aqui..."
              className="bg-[#f5f5f5] border border-brand-blue h-[50px] rounded-l-[24px] w-full px-6 outline-none focus:ring-0 text-[16px] leading-[1.5] border-r-0 placeholder-gray-400"
            />
            <button className="bg-brand-blue text-white h-[50px] px-8 rounded-r-[24px] font-semibold hover:bg-brand-red transition-colors -ml-4">
              Assinar
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[40px] items-start text-[#f5f5f5] z-10">
          <div className="flex gap-[20px] items-center text-[32px] leading-[1.5] font-semibold cursor-pointer hover:opacity-80 transition-opacity">
            <span className="w-[48px] h-[48px] bg-[#f5f5f5] rounded-full flex items-center justify-center text-brand-blue">
              <i className="ph-fill ph-instagram-logo text-[28px]"></i>
            </span>{" "}
            @mugo.ag
          </div>
          <div className="flex gap-[20px] items-center text-[32px] leading-[1.5] font-semibold cursor-pointer hover:opacity-80 transition-opacity">
            <span className="w-[48px] h-[48px] bg-[#f5f5f5] rounded-full flex items-center justify-center text-brand-blue">
              <i className="ph-fill ph-linkedin-logo text-[28px]"></i>
            </span>{" "}
            mugô-ag
          </div>
          <div className="flex gap-[20px] items-center text-[32px] leading-[1.5] font-semibold">
            <span className="w-[48px] h-[48px] bg-[#f5f5f5] rounded-full flex items-center justify-center text-brand-blue">
              <i className="ph-fill ph-whatsapp-logo text-[28px]"></i>
            </span>{" "}
            (11) 9 7351-0549
          </div>
          <div className="flex gap-[20px] items-center text-[32px] leading-[1.5] font-semibold">
            <span className="w-[48px] h-[48px] bg-[#f5f5f5] rounded-full flex items-center justify-center text-brand-blue">
              <i className="ph-fill ph-envelope-simple text-[28px]"></i>
            </span>{" "}
            mugo.agencia@gmail.com
          </div>
        </div>

        <p className="absolute font-bold right-[48px] opacity-20 text-[#f5f5f5] text-[128px] leading-[1.25] top-[80px] whitespace-nowrap pointer-events-none">
          FALE COM A GENTE
        </p>
      </div>
    </footer>
  );
}
