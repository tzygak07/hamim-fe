"use client";

import { useState } from "react";
import Image from "next/image";
import BackButton from "@/components/ui/BackButton";

export default function PesananSayaPage() {
  // Array untuk menu tab agar mudah di-render
  const tabs = ["Belum Bayar", "Selesai", "Batal"];
  
  // State untuk menyimpan tab mana yang sedang aktif (default: Belum Bayar)
  const [activeTab, setActiveTab] = useState("Belum Bayar");

  return (
    <main className="flex min-h-[100dvh] flex-col bg-white font-sans text-dark relative">
      
      {/* HEADER */}
      <BackButton title="Pesanan Saya" />

      {/* Garis pemisah tipis di bawah header (sesuai desain UI) */}
      <div className="w-full border-b border-third/10" />

      {/* --- TAB NAVIGATION --- */}
      <div className="flex px-6 pt-4 gap-[14px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-[6px] text-[14px] font-semibold rounded-[8px] transition-colors ${
              activeTab === tab
                ? "bg-primary text-white" // Warna oranye jika aktif
                : "bg-third/10 text-third hover:bg-third/20" // Warna abu-abu jika tidak aktif
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- KONTEN EMPTY STATE --- */}
      {/* PERUBAHAN: Jarak dari tab ke gambar 199px */}
      <div className="flex flex-col items-center px-6 mt-[199px] text-center">
        
        {/* Gambar Kaca Pembesar */}
        <div className="relative h-24 w-24">
          <Image 
            src="/order-images/notFound.png" 
            alt="Tidak ada pesanan" 
            fill
            className="object-contain"
          />
        </div>

        {/* PERUBAHAN: Jarak gambar ke teks judul 27px, ukuran font 16px */}
        <h3 className="mt-[27px] text-[16px] font-bold text-primary">
          Tidak Ada Pesanan {activeTab}
        </h3>

        {/* PERUBAHAN: Jarak judul ke teks deskripsi 8px, ukuran font 16px */}
        <p className="mt-[8px] text-[16px] leading-relaxed text-third">
          mmmmmmmmmmmmmmmm
          <br />
          mmmmmmmmmmmmmmmm
          <br />
          mmmmmmmmmmmmmmmm
          <br />
          mmmmmm
        </p>
        
      </div>
    </main>
  );
}