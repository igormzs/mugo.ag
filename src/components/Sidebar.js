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
        <div className="max-w-[1600px] h-full w-full relative px-[47.5px]">
          {/* Close Button & Logo */}
          <div className="h-[96px] w-full flex items-center justify-between border-b-[0.5px] border-[#5b6770]">
            <div className="h-[52px] flex items-center">
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
              className="flex items-center justify-center cursor-pointer w-[35px] h-[35px] hover:scale-110 transition-transform group"
            >
              <i className="ph ph-x text-[35px] text-[#5b6770]"></i>
            </div>
          </div>

          {/* Menu Sidebar Cards - Layout within 1600px */}
          <div className="relative mt-[80px] h-[calc(100vh-200px)] w-full">
            <Link
              href="#plataforma"
              onClick={onClose}
              className="absolute bg-brand-gold flex flex-col justify-between left-0 p-[32px] rounded-[24px] top-0 w-[48%] h-[42%] hover:scale-[1.02] transition-transform shadow-xl"
            >
              <div className="w-full flex justify-end">
                <i className="ph-bold ph-plus text-[40px] text-white"></i>
              </div>
              <div className="w-full h-full flex items-end justify-start">
                <p className="font-bold text-[32px] leading-[1.5] text-white">
                  I.A. Generativa
                </p>
              </div>
            </Link>

            <Link
              href="#servicos"
              onClick={onClose}
              className="absolute bg-brand-red flex flex-col justify-between left-0 p-[32px] rounded-[24px] bottom-0 w-[48%] h-[53%] hover:scale-[1.02] transition-transform shadow-xl"
            >
              <div className="w-full flex justify-end">
                <i className="ph-bold ph-plus text-[40px] text-white"></i>
              </div>
              <div className="w-full h-full flex flex-col items-start justify-end leading-tight">
                <p className="font-bold text-[32px] leading-[1.5] text-white text-left">
                  Landing page
                </p>
                <p className="font-bold text-[32px] leading-[1.5] text-white text-left">
                  E-commerce
                </p>
                <p className="font-bold text-[32px] leading-[1.5] text-white text-left">
                  Site institucional
                </p>
              </div>
            </Link>

            <div className="absolute right-0 top-0 w-[49%] h-full flex flex-col justify-between">
              <div className="flex gap-[2%] h-[42%]">
                <Link
                  href="#plataforma"
                  onClick={onClose}
                  className="bg-brand-red flex flex-col justify-between p-[32px] rounded-[24px] w-[49%] h-full hover:scale-[1.02] transition-transform shadow-xl"
                >
                  <div className="w-full flex justify-end">
                    <i className="ph-bold ph-plus text-[40px] text-white"></i>
                  </div>
                  <div className="w-full h-full flex items-end justify-start">
                    <p className="font-bold text-[32px] leading-[1.5] text-white">
                      Automação
                    </p>
                  </div>
                </Link>

                <Link
                  href="#servicos"
                  onClick={onClose}
                  className="bg-brand-gold flex flex-col justify-between p-[32px] rounded-[24px] w-[49%] h-full hover:scale-[1.02] transition-transform shadow-xl"
                >
                  <div className="w-full flex justify-end">
                    <i className="ph-bold ph-plus text-[40px] text-white"></i>
                  </div>
                  <div className="w-full h-full flex items-end justify-start">
                    <p className="font-bold text-[32px] leading-[1.5] text-white text-left">
                      Criação de<br />avatar
                    </p>
                  </div>
                </Link>
              </div>

              <Link
                href="#clientes"
                onClick={onClose}
                className="bg-brand-blue flex flex-col justify-between p-[32px] rounded-[24px] w-full h-[53%] hover:scale-[1.02] transition-transform shadow-xl"
              >
                <div className="w-full flex justify-end">
                  <i className="ph-bold ph-plus text-[40px] text-white"></i>
                </div>
                <div className="w-full h-full flex items-end justify-start">
                  <p className="font-bold text-[32px] leading-[1.5] text-white">
                    Consultorias
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
