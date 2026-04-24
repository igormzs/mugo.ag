"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contato" className="bg-brand-blue page-section flex items-center overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto w-full relative h-full flex flex-col justify-center px-[47.5px] py-20 min-h-screen">
        
        {/* Large Watermark Logo */}
        <Image
          src="/assets/logo watermark.png"
          alt=""
          width={680}
          height={786}
          className="absolute h-[786px] left-[-76px] opacity-10 bottom-0 w-auto object-contain pointer-events-none"
        />

        {/* Top Background Title */}
        <p className="absolute font-bold left-[47.5px] top-[10%] opacity-20 text-[#f5f5f5] text-[160px] leading-none whitespace-nowrap pointer-events-none uppercase tracking-tighter">
          FALE COM A GENTE
        </p>

        <div className="flex items-start justify-between w-full mt-[120px] z-10">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-[32px] items-start text-[#f5f5f5]">
            <div className="flex gap-[20px] items-center text-[32px] leading-[1.5] font-semibold cursor-pointer hover:opacity-80 transition-opacity">
              <span className="w-[56px] h-[56px] bg-[#f5f5f5] rounded-full flex items-center justify-center text-brand-blue">
                <i className="ph ph-instagram-logo text-[32px]"></i>
              </span>
              @mugo.ag
            </div>
            
            <div className="flex gap-[20px] items-center text-[32px] leading-[1.5] font-semibold cursor-pointer hover:opacity-80 transition-opacity">
              <span className="w-[56px] h-[56px] bg-[#f5f5f5] rounded-full flex items-center justify-center text-brand-blue">
                <i className="ph ph-linkedin-logo text-[32px]"></i>
              </span>
              Mugô Ag
            </div>
            
            <div className="flex gap-[20px] items-center text-[32px] leading-[1.5] font-semibold cursor-pointer hover:opacity-80 transition-opacity">
              <span className="w-[56px] h-[56px] bg-[#f5f5f5] rounded-full flex items-center justify-center text-brand-blue">
                <i className="ph ph-whatsapp-logo text-[32px]"></i>
              </span>
              (11) 9 7351-0549
            </div>
            
            <div className="flex gap-[20px] items-center text-[32px] leading-[1.5] font-semibold cursor-pointer hover:opacity-80 transition-opacity">
              <span className="w-[56px] h-[56px] bg-[#f5f5f5] rounded-full flex items-center justify-center text-brand-blue">
                <i className="ph ph-whatsapp-logo text-[32px]"></i>
              </span>
              (11) 9 8653-1008
            </div>
          </div>

          {/* Right: Newsletter Info */}
          <div className="flex flex-col gap-[24px] items-start text-[#f5f5f5] max-w-[500px]">
            <p className="font-semibold text-[42px] leading-[1.2]">
              Receba insights da Mugô
            </p>
            <p className="font-normal text-[20px] leading-[1.6] opacity-80">
              Estratégia, tecnologia e direção para marcas que querem crescer com mais clareza.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-gold text-[#f5f5f5] px-[24px] py-[12px] rounded-[24px] font-semibold text-[24px] leading-[1.5] hover:bg-brand-red transition-colors shadow-lg mt-[16px]"
            >
              Assinar newsletter
            </button>
          </div>

        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-[20px]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-brand-blue/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-white w-full max-w-[500px] rounded-[32px] p-[40px] relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-[24px] top-[24px] text-gray-400 hover:text-brand-red transition-colors"
            >
              <i className="ph ph-x text-[24px]"></i>
            </button>

            <div className="flex flex-col gap-[8px] mb-[32px]">
              <p className="font-bold text-brand-blue text-[28px] leading-tight">
                Receba insights da Mugô
              </p>
              <p className="text-gray-500 text-[16px] leading-[1.5]">
                Estratégia, tecnologia e direção para marcas que querem crescer com mais clareza.
              </p>
            </div>

            <form className="flex flex-col gap-[16px]">
              <input 
                type="text" 
                placeholder="Seu nome" 
                className="w-full h-[56px] border border-gray-200 rounded-[16px] px-[20px] outline-none focus:border-brand-gold transition-colors text-[16px]"
              />
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full h-[56px] border border-gray-200 rounded-[16px] px-[20px] outline-none focus:border-brand-gold transition-colors text-[16px]"
              />
              <input 
                type="text" 
                placeholder="@instagram da marca (opcional)" 
                className="w-full h-[56px] border border-gray-200 rounded-[16px] px-[20px] outline-none focus:border-brand-gold transition-colors text-[16px]"
              />
              <button 
                type="submit"
                className="bg-brand-gold text-white font-semibold text-[20px] h-[56px] rounded-[16px] mt-[16px] hover:bg-brand-red transition-colors shadow-lg"
              >
                Quero receber
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}
