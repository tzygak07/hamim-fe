"use client";

import { useState } from "react";
import BackButton from "@/components/ui/BackButton";
import EmptyState from "@/components/ui/EmptyState";
import BottomNavigation from "@/components/ui/BottomNavigation";
import AcaraSummary from "./components/AcaraSummary";
import AcaraTabs from "./components/AcaraTabs";
import AcaraCard from "./components/AcaraCard";
import AcaraListCard from "./components/AcaraListCard";

const acaraData = [
  {
    id: 1,
    title: "TA-MAT Al-Quran (Tahsin Maqomat) Metode Maqdis",
    badgeText: "Terbatas",
    originalPrice: "Rp450.000",
    currentPrice: "Rp250.000",
    datetime: "25 Oktober 2024 08:00 WIB",
    image: "/kursus-images/kelas1.png",
    status: "Semua",
  },
  {
    id: 2,
    title: "TA-MAT Al-Quran (Tahsin Maqomat) Metode Maqdis",
    badgeText: "Terbatas",
    originalPrice: "Rp450.000",
    currentPrice: "Gratis",
    datetime: "25 Oktober 2024 08:00 WIB",
    image: "/kursus-images/kelas2.png",
    status: "Semua",
  },
  {
    id: 3,
    title: "TA-MAT Al-Quran (Tahsin Maqomat) Metode Maqdis",
    badgeText: "Terbatas",
    originalPrice: "Rp450.000",
    currentPrice: "Rp250.000",
    datetime: "25 Oktober 2024 08:00 WIB",
    image: "/kursus-images/kelas1.png",
    status: "Sedang Berlangsung",
  },
  {
    id: 4,
    title: "TA-MAT Al-Quran (Tahsin Maqomat) Metode Maqdis",
    badgeText: "Terbatas",
    originalPrice: "Rp450.000",
    currentPrice: "Rp250.000",
    datetime: "25 Oktober 2024 08:00 WIB",
    image: "/kursus-images/kelas2.png",
    status: "Sedang Berlangsung",
  },
  {
    id: 5,
    title: "TA-MAT Al-Quran (Tahsin Maqomat) Metode Maqdis",
    badgeText: "Terbatas",
    originalPrice: "Rp450.000",
    currentPrice: "Rp250.000",
    datetime: "25 Oktober 2024 08:00 WIB",
    image: "/kursus-images/kelas1.png",
    status: "Selesai",
  },
  {
    id: 6,
    title: "TA-MAT Al-Quran (Tahsin Maqomat) Metode Maqdis",
    badgeText: "Terbatas",
    originalPrice: "Rp450.000",
    currentPrice: "Rp250.000",
    datetime: "25 Oktober 2024 08:00 WIB",
    image: "/kursus-images/kelas2.png",
    status: "Selesai",
  },
];

export default function AcaraPage() {
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredAcara = acaraData.filter((acara) => {
    if (activeTab === "Semua") return acara.status === "Semua";
    return acara.status === activeTab;
  });

  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col overflow-x-hidden bg-white pb-24 font-sans text-dark">
      <div className="sticky top-0 z-50 w-full bg-white">
        <BackButton title="Acara" />
        <div className="w-full border-b border-third/10" />
      </div>

      <AcaraSummary myEventsCount={0} upcomingEventTitle="-" />

      <AcaraTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-[24px] flex w-full flex-col">
        {filteredAcara.length === 0 ? (
          <div className="mt-8 px-[19px]">
            <EmptyState
              title={`Tidak Ada Acara ${activeTab === "Sedang Berlangsung" ? "Sedang Berlangsung" : "Sudah Selesai"}`}
              description="Nantikan acara menarik bersama Hamim dan dapatkan informasi menarik lainnya"
              buttonText="Lihat Semua Acara"
              onClick={() => setActiveTab("Semua")}
            />
          </div>
        ) : activeTab === "Semua" ? (
          <div className="grid w-full grid-cols-1 gap-x-[8px] gap-y-[24px] px-[19px] min-[375px]:grid-cols-2">
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
        ) : (
          <div className="flex w-full flex-col">
            {filteredAcara.map((acara) => (
              <AcaraListCard
                key={acara.id}
                id={acara.id}
                title={acara.title}
                datetime={acara.datetime}
                status={acara.status as "Sedang Berlangsung" | "Selesai"}
                image={acara.image}
              />
            ))}
          </div>
        )}
      </div>
      <BottomNavigation />
    </main>
  );
}