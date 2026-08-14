"use client";

import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function DaftarHafalan() {
  const [activeTab, setActiveTab] = useState("Juz");
  const router = useRouter();

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
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-bold text-dark">Pilih Paket</h2>
        <button className="flex items-center gap-[8px] text-[12px] font-medium text-third transition-opacity hover:opacity-70">
          <span>Ta'awudz</span>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
            <MdKeyboardArrowRight className="text-sm" />
          </div>
        </button>
      </div>

      <div className="mt-[19px] mb-[16px] flex gap-[14px]">
        {["Juz", "Challenge"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
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

      <div className="flex flex-col w-full pb-12">
        {currentData.map((item) => (
          <button 
            key={item.id}
            onClick={() => router.push(`/hafalan/${item.id}`)}
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
                <h3 className="text-[14px] font-bold text-dark">{item.title}</h3>
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