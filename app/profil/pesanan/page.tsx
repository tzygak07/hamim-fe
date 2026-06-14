"use client";

import { useState } from "react";
import BackButton from "@/components/ui/BackButton";
import EmptyState from "@/components/ui/EmptyState"; 

export default function PesananSayaPage() {
  const tabs = ["Belum Bayar", "Selesai", "Batal"];
  const [activeTab, setActiveTab] = useState("Belum Bayar");

  return (
    <main className="flex min-h-[100dvh] flex-col bg-white font-sans text-dark relative">
      
      <BackButton title="Pesanan Saya" />
      <div className="w-full border-b border-third/10" />

      <div className="flex px-6 pt-4 gap-[14px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-[6px] text-[14px] font-semibold rounded-[8px] transition-colors ${
              activeTab === tab
                ? "bg-primary text-white"
                : "bg-third/10 text-third hover:bg-third/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <EmptyState 
        title={`Tidak Ada Pesanan ${activeTab}`}
        description={
          <>
            mmmmmmmmmmmmmmmm<br />
            mmmmmmmmmmmmmmmm<br />
            mmmmmmmmmmmmmmmm<br />
            mmmmmm
          </>
        }
      />
      
    </main>
  );
}