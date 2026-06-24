"use client";

import { useState } from "react";
import BackButton from "@/components/ui/BackButton";
import EmptyState from "@/components/ui/EmptyState";
import KursusBanner from "./components/KursusBanner";
import KursusCard from "./components/KursusCard";
import KursusTabs from "./components/KursusTabs";
import MyClassCard from "./components/MyClassCard";

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

  // Kosongkan array ini untuk melihat tampilan Empty State
 const dataKelasSaya = [
    {
      id: 1,
      title: "Belajar Irama Bayati Hamim",
      badgeText: "Akses Terbuka",
      ustaz: "Ust. Abu Afifah",
      image: "/kursus-images/kelas1.png",
    }
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

      <div className="mt-[24px] px-6">
        <KursusTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {activeTab === "Semua" && (
        <div className="mt-[20px] flex flex-col gap-[24px]">
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
        <div className="mt-[20px] flex flex-col px-6">
          {dataKelasSaya.length > 0 ? (
            <div className="flex flex-col gap-[16px]">
              {dataKelasSaya.map((item) => (
                <MyClassCard 
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  badgeText={item.badgeText}
                  ustaz={item.ustaz}
                  image={item.image}
                />
              ))}
            </div>
          ) : (
            /* Menyesuaikan dengan EmptyState global milikmu */
            <div className="flex flex-col items-center">
              <EmptyState 
                imageSrc="/order-images/notFound.png"
                title="Yahh.. Anda Tidak Memiliki Kursus"
                description="Dapatkan kelas sekarang juga dan jangan sampai kelewatan."
                className="mt-[40px]" 
              />
              
              {/* Tombol aksi diletakkan di luar EmptyState */}
              <button
                onClick={() => setActiveTab("Semua")}
                className="mt-[24px] rounded-[120px] bg-primary px-[24px] py-[12px] text-[14px] font-bold text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
              >
                Lihat Daftar Kursus
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}