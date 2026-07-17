"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FiChevronLeft } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";

// Komponen Card Opsi agar kodenya tidak berulang
function OptionItem({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex w-full items-center gap-[20px] border-b border-gray-200 bg-white px-[20px] py-[20px] transition-colors hover:bg-orange-50"
    >
      <FaBookOpen className="text-[32px] text-primary" />
      <span className="text-[16px] font-bold text-gray-600">{title}</span>
    </Link>
  );
}

export default function PilihanSambungBacaanPage() {
  // Mengambil parameter ID dari URL (misal: '30' jika url-nya /sambung-bacaan/30)
  const params = useParams();
  const juzId = params.id; 

  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col bg-gray-100 font-sans text-dark">
      
      {/* Bagian Header (Background Putih) */}
      <div className="bg-white">
        <div className="sticky top-0 z-50 flex items-center px-[19px] py-[16px]">
          <Link href="/sambung-bacaan" className="flex items-center gap-2 text-primary transition-opacity hover:opacity-80">
            <FiChevronLeft className="text-[24px]" />
            <span className="text-[18px] font-bold">Hafalan Yuk!</span>
          </Link>
        </div>

        {/* Bagian Judul Halaman */}
        <div className="relative flex items-center justify-between overflow-hidden border-b border-gray-100 px-[19px] py-[24px]">
          <h1 className="text-[18px] font-bold text-primary max-w-[60%] leading-snug">
            Pilihan Sambung Bacaan
          </h1>
          
          {/* Dekorasi SVG melayang */}
          <div className="absolute -right-4 -top-4 opacity-20">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="60" height="60" rx="8" stroke="#F2994A" strokeWidth="4" transform="rotate(15 50 50)"/>
              <polygon points="45,35 65,50 45,65" fill="#F2994A" transform="rotate(15 50 50)"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Bagian List Pilihan */}
      <div className="flex w-full flex-col">
        {/* Mengarahkan URL sesuai ID Juz yang dipilih sebelumnya */}
        <OptionItem 
          title="Gabungan Surat" 
          href={`/sambung-bacaan/${juzId}/gabungan`} 
        />
        <OptionItem 
          title="Per Surat" 
          href={`/sambung-bacaan/${juzId}/per-surat`} 
        />
      </div>

    </main>
  );
}