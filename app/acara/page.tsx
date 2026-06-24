"use client";

import { useState } from "react";
import BackButton from "@/components/ui/BackButton";
import AcaraSummary from "./components/AcaraSummary";
import AcaraTabs from "./components/AcaraTabs";
import AcaraCard from "./components/AcaraCard";

const acaraData = [
  {
    id: 1,
    title: "TA-MAT Al-Quran (Tahsin Maqomat) Metode Maqdis",
    badgeText: "Terbatas",
    originalPrice: "Rp450.000",
    currentPrice: "Rp250.000",
    image: "/kursus-images/kelas1.png",
    status: "Sedang Berlangsung",
  },
  {
    id: 2,
    title: "TA-MAT Al-Quran (Tahsin Maqomat) Metode Maqdis",
    badgeText: "Terbatas",
    currentPrice: "Gratis",
    image: "/kursus-images/kelas2.png",
    status: "Sedang Berlangsung",
  },
  {
    id: 3,
    title: "Murottal Camp Weekend Tingkat Dasar",
    badgeText: "Terbatas",
    originalPrice: "Rp300.000",
    currentPrice: "Rp150.000",
    image: "/kursus-images/kelas1.png",
    status: "Selesai",
  },
  {
    id: 4,
    title: "Pelatihan Pemimpin Imam Masjid Muda",
    badgeText: "Terbatas",
    currentPrice: "Gratis",
    image: "/kursus-images/kelas2.png",
    status: "Selesai",
  },
];

export default function AcaraPage() {
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredAcara = acaraData.filter((acara) => {
    if (activeTab === "Semua") return true;
    return acara.status === activeTab;
  });

  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col overflow-x-hidden bg-white font-sans text-dark pb-24">
      <div className="sticky top-0 z-50 w-full bg-white">
        <BackButton title="Acara" />
        <div className="w-full border-b border-third/10" />
      </div>

      <AcaraSummary myEventsCount={6} upcomingEventTitle="TA-MAT Al-Quran" />

      <AcaraTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="grid grid-cols-2 gap-[16px] px-6 mt-[20px]">
        {filteredAcara.map((acara) => (
          <AcaraCard
            key={acara.id}
            id={acara.id}
            title={acara.title}
            badgeText={acara.badgeText}
            originalPrice={acara.originalPrice}
            currentPrice={acara.currentPrice}
            image={acara.image}
          />
        ))}
      </div>
    </main>
  );
}