"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ isOpen, onClose }) {
  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[100] w-screen h-screen flex justify-center pointer-events-none transition-opacity duration-700 ${
        isOpen ? "pointer-events-auto opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Sidebar Content - Full Viewport */}
      <div
        className={`relative w-full h-full bg-[#f5f5f5] transition-transform duration-700 ease-in-out pointer-events-auto shadow-2xl flex justify-center ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Content Constraint (1600px Rule) */}
        <div className="max-w-[1600px] h-full w-full relative px-6 md:px-[47.5px] overflow-y-auto">
          {/* Close Button & Logo */}
          <div className="h-[80px] md:h-[96px] w-full flex items-center justify-between border-b-[0.5px] border-[#5b6770] sticky top-0 bg-[#f5f5f5] z-20">
            <div className="h-[40px] md:h-[52px] flex items-center">
              <Image
                src="/assets/header logo.png"
                width={150}
                height={52}
                className="h-full w-auto object-contain"
                alt="Logo"
              />
            </div>
            <div
              onClick={onClose}
              className="flex items-center justify-center cursor-pointer w-[40px] h-[40px] md:w-[48px] md:h-[48px] hover:scale-110 transition-transform group bg-gray-100 rounded-full"
            >
              <i className="ph ph-x text-[28px] md:text-[35px] text-[#5b6770]"></i>
            </div>
          </div>

          {/* Menu Sidebar Cards - Responsive Grid Layout */}
          <div className="relative mt-10 md:mt-20 pb-20 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* I.A. Generativa */}
            <Link
              href="#plataforma"
              onClick={onClose}
              className="bg-brand-gold flex flex-col justify-between p-6 md:p-8 rounded-[24px] aspect-[1.5/1] md:aspect-auto md:h-[300px] hover:scale-[1.02] transition-transform shadow-xl"
            >
              <div className="w-full flex justify-end">
                <i className="ph-bold ph-plus text-[32px] md:text-[40px] text-white"></i>
              </div>
              <div className="w-full h-full flex items-end justify-start">
                <p className="font-bold text-2xl md:text-[32px] leading-tight text-white">
                  I.A. Generativa
                </p>
              </div>
            </Link>

            {/* Landing pages group */}
            <Link
              href="#servicos"
              onClick={onClose}
              className="bg-brand-red flex flex-col justify-between p-6 md:p-8 rounded-[24px] aspect-[1.2/1] md:aspect-auto md:h-full md:row-span-2 hover:scale-[1.02] transition-transform shadow-xl order-3 md:order-none"
            >
              <div className="w-full flex justify-end">
                <i className="ph-bold ph-plus text-[32px] md:text-[40px] text-white"></i>
              </div>
              <div className="w-full h-full flex flex-col items-start justify-end leading-tight gap-1">
                <p className="font-bold text-2xl md:text-[32px] text-white">Landing page</p>
                <p className="font-bold text-2xl md:text-[32px] text-white">E-commerce</p>
                <p className="font-bold text-2xl md:text-[32px] text-white">Site institucional</p>
              </div>
            </Link>

            {/* Nested Grid for small cards on desktop, stacked on mobile */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 md:h-[300px]">
              <Link
                href="#plataforma"
                onClick={onClose}
                className="bg-brand-red flex flex-col justify-between p-6 rounded-[24px] hover:scale-[1.02] transition-transform shadow-xl aspect-square md:aspect-auto"
              >
                <div className="w-full flex justify-end">
                  <i className="ph-bold ph-plus text-[24px] md:text-[32px] text-white"></i>
                </div>
                <div className="w-full h-full flex items-end justify-start">
                  <p className="font-bold text-xl md:text-2xl leading-tight text-white">
                    Automação
                  </p>
                </div>
              </Link>

              <Link
                href="#servicos"
                onClick={onClose}
                className="bg-brand-gold flex flex-col justify-between p-6 rounded-[24px] hover:scale-[1.02] transition-transform shadow-xl aspect-square md:aspect-auto"
              >
                <div className="w-full flex justify-end">
                  <i className="ph-bold ph-plus text-[24px] md:text-[32px] text-white"></i>
                </div>
                <div className="w-full h-full flex items-end justify-start">
                  <p className="font-bold text-xl md:text-2xl leading-tight text-white">
                    Criação de<br />avatar
                  </p>
                </div>
              </Link>
            </div>

            {/* Consultorias */}
            <Link
              href="#clientes"
              onClick={onClose}
              className="bg-brand-blue flex flex-col justify-between p-6 md:p-8 rounded-[24px] aspect-[1.5/1] md:aspect-auto md:h-[300px] hover:scale-[1.02] transition-transform shadow-xl"
            >
              <div className="w-full flex justify-end">
                <i className="ph-bold ph-plus text-[32px] md:text-[40px] text-white"></i>
              </div>
              <div className="w-full h-full flex items-end justify-start">
                <p className="font-bold text-2xl md:text-[32px] leading-tight text-white">
                  Consultorias
                </p>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
