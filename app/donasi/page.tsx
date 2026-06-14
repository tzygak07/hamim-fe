"use client";

import { useState } from "react";
import BottomNavigation from "@/components/ui/BottomNavigation";
import EmptyState from "@/components/ui/EmptyState";
import DonasiCard from "./components/DonasiCard";
import DonasiSayaCard from "./components/DonasiSayaCard";

export default function DonasiPage() {
  const tabs = ["Semua", "Donasi Saya", "Tersimpan"];
  const [activeTab, setActiveTab] = useState("Semua");

  const dataSemua = [
    { id: 1, image: "/promo-images/banner1.png", sisaHari: "25 hari lagi", title: "Donasi Renovasi Masjid Al Jabbar", target: 250000000, terkumpul: 175000000, isSaved: false },
    { id: 2, image: "/promo-images/banner2.png", sisaHari: "25 hari lagi", title: "Donasi Renovasi Masjid Al Jabbar", target: 250000000, terkumpul: 175000000, isSaved: true },
  ];

  const dataDonasiSaya = [
    { id: 1, image: "/promo-images/banner1.png", title: "Donasi Pembangunan Masjid Al Jabbar", date: "25 Oktober 2024", amount: 50000 },
    { id: 2, image: "/promo-images/banner2.png", title: "Donasi Pembangunan Masjid Al Jabbar", date: "25 Oktober 2024", amount: 50000 },
  ];

  const dataTersimpan: any[] = []; 

  return (
    <main className="flex min-h-[100dvh] flex-col overflow-x-hidden bg-white font-sans text-dark pb-24">
      <div className="flex items-center justify-center pt-[48px] pb-4">
        <h1 className="text-[16px] font-bold text-primary">Donasi</h1>
      </div>
      <div className="w-full border-b border-third/10" />

      <div className="flex px-6 pt-6 gap-[14px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-[14px] font-bold rounded-lg transition-colors ${
              activeTab === tab
                ? "bg-primary text-white"
                : "bg-third/10 text-third hover:bg-third/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-col pb-6">
        {activeTab === "Semua" && (
          <div className="flex flex-col items-center px-6 gap-[19px]">
            {dataSemua.map((item) => (
              <DonasiCard key={item.id} {...item} />
            ))}
          </div>
        )}

        {activeTab === "Donasi Saya" && (
          <div className="flex flex-col w-full">
            {dataDonasiSaya.map((item) => (
              <DonasiSayaCard key={item.id} {...item} />
            ))}
          </div>
        )}

        {activeTab === "Tersimpan" && (
          <>
            {dataTersimpan.length > 0 ? (
              <div className="flex flex-col items-center px-6 gap-[19px]">
                {dataTersimpan.map((item) => (
                  <DonasiCard key={item.id} {...item} isSaved={true} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center w-full">
                <EmptyState 
                  title="Hmm.. Anda Belum Pernah Donasi"
                  description="Donasi sekarang juga untuk dapat berbagi kebaikan dan raih keberkahan"
                  className="mt-[100px]"
                />
                <button 
                  onClick={() => setActiveTab("Semua")}
                  className="mt-[24px] rounded-full bg-primary px-6 py-3 text-[14px] font-bold text-white transition-transform active:scale-95 hover:opacity-90"
                >
                  Lihat Donasi Tersedia
                </button>
              </div>
            )}
          </>
        )}

      </div>

      <BottomNavigation />

    </main>
  );
}