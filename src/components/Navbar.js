"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed border-b-[0.5px] border-solid h-[80px] md:h-[96px] left-0 top-0 w-full z-40 transition-all duration-700 ease-out flex justify-center
          ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          ${hasScrolled ? 'bg-[#E9E9E9]/90 backdrop-blur-md border-[#5b6770]/20 shadow-sm' : 'bg-[#E9E9E9]/80 backdrop-blur-sm border-[#5b6770]'}`}
      >
        <div className="max-w-[1600px] w-full h-full relative flex items-center justify-between px-6 md:px-[47.5px]">
          <div className="h-[40px] md:h-[52px] flex items-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/header logo.png"
              alt="Mugô Logo"
              width={150}
              height={52}
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex gap-[20px] md:gap-[43px] items-center justify-end">
            <Link
              href="#sobre-nos"
              className="hidden md:block font-normal leading-[1.5] relative shrink-0 text-[#5b6770] text-[18px] md:text-[20px] whitespace-nowrap hover:text-brand-red transition-all group"
            >
              Sobre nós
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#servicos"
              className="hidden md:block font-normal leading-[1.5] relative shrink-0 text-[#5b6770] text-[18px] md:text-[20px] whitespace-nowrap hover:text-brand-red transition-all group"
            >
              Serviços
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#clientes"
              className="hidden md:block font-normal leading-[1.5] relative shrink-0 text-[#5b6770] text-[18px] md:text-[20px] whitespace-nowrap hover:text-brand-red transition-all group"
            >
              Clientes
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="flex gap-[8px] items-center leading-[1.5] relative shrink-0 text-[16px] md:text-[20px] whitespace-nowrap">
              <span className="font-semibold relative shrink-0 text-brand-red cursor-pointer hover:scale-110 transition-transform">
                PT
              </span>
              <span className="font-normal relative shrink-0 text-[#5b6770]">
                |
              </span>
              <span className="font-normal relative shrink-0 text-[#5b6770] cursor-pointer hover:text-brand-red hover:scale-110 transition-all">
                EN
              </span>
            </div>
            <div
              onClick={() => setSidebarOpen(true)}
              className="flex items-center justify-center relative shrink-0 cursor-pointer ml-[10px] group hover:scale-110 transition-transform"
            >
              <i className="ph ph-list text-[30px] md:text-[35px] text-[#5b6770] group-hover:text-brand-red transition-colors"></i>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
