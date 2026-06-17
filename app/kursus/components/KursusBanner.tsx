"use client";

import Image from "next/image";
import Link from "next/link";

export default function KursusBanner() {
  return (
    <div className="relative flex h-[130px] w-full items-center overflow-hidden rounded-[16px] text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/kursus-images/kursusss.png"
          alt="Banner Kursus"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 412px"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 flex h-[97px] w-[277px] flex-col justify-center px-[16px] py-[16px]">
        <h2 className="text-[16px] font-bold leading-snug">
          Mau Lebih Serius Belajar Ngaji?
        </h2>
        <p className="mt-[3px] text-[11px] font-normal leading-tight text-white/95">
          Daftar kelas privat hamim untuk belajar ngaji lebih serius lagi. Kuota terbatas!!!
        </p>
        <Link 
          href="/kursus/daftar"
          className="mt-[8px] flex w-max items-center justify-center rounded-[120px] bg-[#FFFFFF]/30 px-[12px] py-[8px] text-[11px] font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/40 active:scale-95"
        >
          Daftar Sekarang
        </Link>
      </div>
    </div>
  );
}