"use client";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center pointer-events-none transition-opacity duration-500 ${
        isOpen ? "pointer-events-auto opacity-100" : "opacity-0"
      } overflow-hidden`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Sidebar Content */}
      <div
        className={`relative w-[1440px] h-full bg-[#f5f5f5] transition-transform duration-500 ease-in-out pointer-events-auto border-l border-gray-200 shadow-[-20px_0_60px_rgba(0,0,0,0.3)] ${
          isOpen ? "translate-x-0" : "translate-x-[110%]"
        }`}
      >
        {/* Close Button & Logo */}
        <div className="absolute h-[96px] left-0 top-0 w-full z-10 flex items-center border-[0.5px] border-[#5b6770] bg-[#f5f5f5]">
          <div
            onClick={onClose}
            className="absolute flex items-center justify-center right-[47.5px] top-1/2 -translate-y-1/2 cursor-pointer w-[35px] h-[35px] hover:scale-110 transition-transform"
          >
            <i className="ph ph-x text-[35px] text-[#5b6770]"></i>
          </div>
          <div className="absolute left-[47.5px] top-1/2 -translate-y-1/2 h-[52px] flex items-center">
            <Image
              src="/assets/header logo.png"
              width={150}
              height={52}
              className="h-full w-auto object-contain"
              alt="Logo"
            />
          </div>
        </div>

        {/* Menu Sidebar Cards */}
        <Link
          href="#plataforma"
          onClick={onClose}
          className="absolute bg-brand-gold flex flex-col justify-between left-[48px] p-[32px] rounded-[24px] top-[176px] w-[659px] h-[343px] hover:scale-[1.03] transition-transform shadow-xl"
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
          className="absolute bg-brand-red flex flex-col justify-between left-[48px] p-[32px] rounded-[24px] top-[551px] w-[659px] h-[343px] hover:scale-[1.03] transition-transform shadow-xl"
        >
          <div className="w-full flex justify-end">
            <i class="ph-bold ph-plus text-[40px] text-white"></i>
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

        <Link
          href="#plataforma"
          onClick={onClose}
          className="absolute bg-brand-red flex flex-col justify-between left-[739px] p-[32px] rounded-[24px] top-[176px] w-[320px] h-[343px] hover:scale-[1.03] transition-transform shadow-xl"
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
          className="absolute bg-brand-gold flex flex-col justify-between left-[739px] p-[32px] rounded-[24px] top-[551px] w-[320px] h-[343px] hover:scale-[1.03] transition-transform shadow-xl"
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

        <Link
          href="#clientes"
          onClick={onClose}
          className="absolute bg-brand-blue flex flex-col justify-between left-[1091px] p-[32px] rounded-[24px] top-[176px] w-[318px] h-[718px] hover:scale-[1.03] transition-transform shadow-xl"
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
  );
}
