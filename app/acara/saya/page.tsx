"use client";

import { useState } from "react";
import BackButton from "@/components/ui/BackButton";
import EmptyState from "@/components/ui/EmptyState";
import AcaraTabs from "../components/AcaraTabs";
import AcaraListCard from "../components/AcaraListCard";

const myEventsData = [
  { id: 1, title: "TA-MAT Al-Quran...", datetime: "25 Oktober 2024 08:00 WIB", status: "Belum Dimulai", image: "/kursus-images/kelas1.png" },
  { id: 2, title: "TA-MAT Al-Quran...", datetime: "25 Oktober 2024 08:00 WIB", status: "Sedang Berlangsung", image: "/kursus-images/kelas1.png" },
  { id: 3, title: "TA-MAT Al-Quran...", datetime: "25 Oktober 2024 08:00 WIB", status: "Selesai", image: "/kursus-images/kelas1.png" },
];

export default function AcaraSayaPage() {
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredEvents = myEventsData.filter((event) => {
    if (activeTab === "Semua") return true;
    return event.status === activeTab;
  });

  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col bg-white pb-24">
      <div className="sticky top-0 z-50 bg-white">
        <BackButton title="Acara Saya" />
        <div className="w-full border-b border-third/10" />
      </div>

      <AcaraTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-[24px] flex w-full flex-col">
        {filteredEvents.length === 0 ? (
          <div className="mt-8 px-[19px]">
            <EmptyState title="Tidak Ada Acara" description="Anda belum memiliki acara untuk kategori ini." />
          </div>
        ) : (
          filteredEvents.map((event) => (
            <AcaraListCard
              key={event.id}
              id={event.id}
              title={event.title}
              datetime={event.datetime}
              status={event.status as "Sedang Berlangsung" | "Selesai" | "Belum Dimulai"}
              image={event.image}
            />
          ))
        )}
      </div>
    </main>
  );
}