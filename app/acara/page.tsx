"use client";

import { useState } from "react";
import BackButton from "@/components/ui/BackButton";
import EmptyState from "@/components/ui/EmptyState";
import AcaraSummary from "./components/AcaraSummary";
import AcaraTabs from "./components/AcaraTabs";
import AcaraCard from "./components/AcaraCard";
import AcaraListCard from "./components/AcaraListCard";

// Data dummy sudah diisi lengkap untuk semua tab
const acaraData = [
  // Data Tab "Semua"
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
  
  // Data Tab "Sedang Berlangsung"
  {
    id: 3,
    title: "TA-MAT Al-Quran (Tahsin Maqomat) Metode Maqdis",
    badgeText: "Terbatas", // Tidak dipakai di list card, tapi dibiarkan untuk konsistensi data
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

  // Data Tab "Selesai"
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

      {/* RENDER KONTEN BERDASARKAN TAB */}
      <div className="mt-[24px] flex w-full flex-col">
        {filteredAcara.length === 0 ? (
          /* TAMPILAN EMPTY STATE */
          <div className="mt-8 px-[19px]">
            <EmptyState
              title={`Tidak Ada Acara ${activeTab === "Sedang Berlangsung" ? "Sedang Berlangsung" : "Sudah Selesai"}`}
              description="Nantikan acara menarik bersama Hamim dan dapatkan informasi menarik lainnya"
              buttonText="Lihat Semua Acara"
              onClick={() => setActiveTab("Semua")}
            />
          </div>
        ) : activeTab === "Semua" ? (
          /* TAMPILAN TAB "SEMUA" (GRID CARD) */
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
          /* TAMPILAN TAB "SEDANG BERLANGSUNG" & "SELESAI" (LIST CARD) */
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
    </main>
  );
}