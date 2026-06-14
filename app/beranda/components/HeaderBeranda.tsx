"use client";

import Link from "next/link";
import { IoLocationOutline, IoPerson } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs";

export default function HeaderBeranda() {
  return (
    // PERUBAHAN: pt-0 diubah menjadi pt-8 (padding-top 32px) sebagai jarak optimal
    <header className="flex items-center justify-between px-6 pt-8 pb-4 bg-white">
      
      {/* KIRI: Info Waktu dan Lokasi (Gap 1px) */}
      <div className="flex flex-col gap-[1px]">
        <div className="flex items-center gap-1 text-third">
          <IoLocationOutline className="text-sm" />
          <span className="text-[10px] font-medium">Bandung, Jawa Barat</span>
        </div>
        <h1 className="text-xl font-bold text-primary">Dzuhur</h1>
        <p className="text-[10px] font-medium text-third">
          12:04 | <span className="font-normal">1 Jam 5 Menit lagi</span>
        </p>
      </div>

      {/* KANAN: Tombol Aksi (Gap 6px) */}
      <div className="flex items-center gap-[6px]">
        <button className="text-[24px] text-primary transition-transform hover:scale-105 active:scale-95">
          <BsQrCode />
        </button>
        <Link 
          href="/profil" 
          className="flex h-10 w-10 items-center justify-center rounded-full border border-third/20 text-dark transition-colors hover:bg-third/5"
        >
          <IoPerson className="text-lg text-third" />
        </Link>
      </div>

    </header>
  );
}