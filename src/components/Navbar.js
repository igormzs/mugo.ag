"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="absolute border-[#5b6770] border-b-[0.5px] border-solid h-[80px] md:h-[96px] left-0 top-0 w-full z-40 bg-[#E9E9E9]/80 backdrop-blur-sm flex justify-center">
        <div className="max-w-[1600px] w-full h-full relative flex items-center justify-between px-6 md:px-[47.5px]">
          <div className="h-[40px] md:h-[52px] flex items-center">
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
              className="hidden md:block font-normal leading-[1.5] relative shrink-0 text-[#5b6770] text-[18px] md:text-[20px] whitespace-nowrap hover:text-[#b22234] transition-colors"
            >
              Sobre nós
            </Link>
            <Link
              href="#servicos"
              className="hidden md:block font-normal leading-[1.5] relative shrink-0 text-[#5b6770] text-[18px] md:text-[20px] whitespace-nowrap hover:text-[#b22234] transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#clientes"
              className="hidden md:block font-normal leading-[1.5] relative shrink-0 text-[#5b6770] text-[18px] md:text-[20px] whitespace-nowrap hover:text-[#b22234] transition-colors"
            >
              Clientes
            </Link>
            <div className="flex gap-[8px] items-center leading-[1.5] relative shrink-0 text-[16px] md:text-[20px] whitespace-nowrap">
              <span className="font-semibold relative shrink-0 text-brand-red cursor-pointer">
                PT
              </span>
              <span className="font-normal relative shrink-0 text-[#5b6770]">
                |
              </span>
              <span className="font-normal relative shrink-0 text-[#5b6770] cursor-pointer hover:text-brand-red">
                EN
              </span>
            </div>
            <div
              onClick={() => setSidebarOpen(true)}
              className="flex items-center justify-center relative shrink-0 cursor-pointer ml-[10px] group"
            >
              <i className="ph ph-list text-[30px] md:text-[35px] text-[#5b6770]"></i>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
