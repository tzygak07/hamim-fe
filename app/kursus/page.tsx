"use client";

import { useState } from "react";
import BackButton from "@/components/ui/BackButton";
import KursusBanner from "./components/KursusBanner";
import KursusCard from "./components/KursusCard";

export default function KursusPage() {
  const [activeTab, setActiveTab] = useState("Semua");

  const dataHanyaUntukmu = [
    {
      id: 1,
      title: "Belajar Irama Bayati Hamim",
      badgeText: "Free Access",
      badgeColor: "green" as const,
      price: "Gratis",
      ustaz: "Ust. Abu Afifah",
      image: "/kursus-images/kelas1.png",
    },
    {
      id: 2,
      title: "Belajar Irama Nahawand",
      badgeText: "Free Access",
      badgeColor: "green" as const,
      price: "Gratis",
      ustaz: "Ust. Abu Afifah",
      image: "/kursus-images/kelas2.png",
    },
  ];

  const dataIhsan = [
    {
      id: 3,
      title: "Belajar Irama Bayati Hamim",
      badgeText: "Paling Favorit",
      badgeColor: "orange" as const,
      price: "Rp150.000",
      ustaz: "Ust. Abu Afifah",
      image: "/kursus-images/kelas1.png",
    },
    {
      id: 4,
      title: "Belajar Irama Bayati Hamim",
      badgeText: "Diskon 10% Off",
      badgeColor: "orange" as const,
      price: "Rp120.000",
      ustaz: "Ust. Abu Afifah",
      image: "/kursus-images/kelas2.png",
    },
  ];

  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col overflow-x-hidden bg-white font-sans text-dark pb-10">
      <div className="sticky top-0 z-50 w-full bg-white">
        <BackButton title="Daftar Kursus" />
        <div className="w-full border-b border-third/10" />
      </div>

      <div className="px-6 pt-6">
        <KursusBanner />
      </div>

      <div className="mt-[24px] flex px-6 gap-[14px] mb-[19px]">
        {["Semua", "Kelas Saya"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-[16px] py-[12px] transition-colors ${
              activeTab === tab
                ? "bg-primary text-[14px] font-bold text-white"
                : "bg-third/10 text-[14px] font-normal text-third hover:bg-third/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Semua" && (
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col w-full">
            <h2 className="px-6 text-[16px] font-bold text-dark mb-[16px]">
              Hanya Untukmu
            </h2>
            <div 
              className="flex w-full overflow-x-auto px-6 gap-[16px] pb-4 snap-x"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {dataHanyaUntukmu.map((item) => (
                <KursusCard key={item.id} {...item} />
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <h2 className="px-6 text-[16px] font-bold text-dark mb-[16px]">
              Ihsan: Belajar Baca Quran dari Nol
            </h2>
            <div 
              className="flex w-full overflow-x-auto px-6 gap-[16px] pb-4 snap-x"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {dataIhsan.map((item) => (
                <KursusCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "Kelas Saya" && (
        <div className="flex px-6 items-center justify-center py-10">
          <span className="text-sm text-third">Anda belum memiliki kelas.</span>
        </div>
      )}
    </main>
  );
}