"use client";

import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function DaftarHafalan() {
  const [activeTab, setActiveTab] = useState("Juz");

  const dataJuz = [
    { id: 1, title: "Juz 30", status: "Tersedia" },
    { id: 2, title: "Juz 29", status: "Tersedia" },
    { id: 3, title: "Juz 28", status: "Tersedia" },
    { id: 4, title: "Juz 27", status: "Tersedia" },
  ];

  const dataTantangan = [
    { id: 1, title: "10 Hari Hafal An-Naba", status: "Tersedia" },
    { id: 2, title: "10 Hari Hafal Al-Muzzammil", status: "Tersedia" },
  ];

  const currentData = activeTab === "Juz" ? dataJuz : dataTantangan;

  return (
    <div className="flex flex-col px-6 pt-6 w-full">
      
      {/* HEADER: Pilih Paket & Ta'awudz */}
      <div className="flex items-center justify-between">
        {/* REVISI 5: Ukuran font pilih paket 16 */}
        <h2 className="text-[16px] font-bold text-dark">Pilih Paket</h2>
        
        {/* REVISI 1: Jarak antara taawudz dengan panah 8px (gap-[8px]) */}
        <button className="flex items-center gap-[8px] text-[12px] font-medium text-third transition-opacity hover:opacity-70">
          {/* REVISI 5: Ukuran font taawudz 12 */}
          <span>Ta'awudz</span>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
            <MdKeyboardArrowRight className="text-sm" />
          </div>
        </button>
      </div>

      {/* TABS: Juz & Tantangan */}
      {/* REVISI 2: Jarak dengan konten di atasnya 19px (mt-[19px]) */}
      {/* REVISI 3: Jarak antar button 14px (gap-[14px]) */}
      {/* REVISI 4: Jarak dengan konten di bawahnya 16px (mb-[16px]) */}
      <div className="mt-[19px] mb-[16px] flex gap-[14px]">
        {["Juz", "Tantangan"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            // REVISI 5: Ukuran font button 14
            className={`px-4 py-2 text-[14px] font-semibold rounded-lg transition-colors ${
              activeTab === tab
                ? "bg-primary text-white"
                : "bg-third/10 text-third hover:bg-third/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* DAFTAR ITEM (List) */}
      <div className="flex flex-col w-full pb-12">
        {currentData.map((item) => (
          <button 
            key={item.id}
            className="flex items-center justify-between border-b border-third/10 py-4 transition-colors hover:bg-third/5 text-left"
          >
            <div className="flex items-center gap-4">
              
              <div className="relative h-12 w-12 shrink-0 rounded-full bg-[#FFF4EB] p-2">
                <Image 
                  src="/hafalan-images/icon-quran.png" 
                  alt="Icon" 
                  fill 
                  className="object-contain p-2"
                />
              </div>

              <div className="flex flex-col">
                {/* REVISI 5: Ukuran font nama juz 14 */}
                <h3 className="text-[14px] font-bold text-dark">{item.title}</h3>
                {/* REVISI 5: Ukuran font ketersediaan 12 */}
                <p className="mt-[2px] text-[12px] text-third">{item.status}</p>
              </div>
              
            </div>

            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-sm">
              <MdKeyboardArrowRight className="text-lg" />
            </div>
          </button>
        ))}
      </div>

    </div>
  );
}