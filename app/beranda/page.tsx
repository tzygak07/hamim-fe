"use client";

import HeaderBeranda from "./components/HeaderBeranda";
import PromoSlider from "./components/PromoSlider";
import MenuHafalan from "./components/MenuHafalan";
import RekomendasiKelas from "./components/RekomendasiKelas";

// 1. Import Bottom Navigation
import BottomNavigation from "@/components/ui/BottomNavigation";

export default function BerandaPage() {
  return (
    // min-h-[100dvh] dan pb-24 sudah kita siapkan sebelumnya untuk mengakomodasi tinggi BottomNav!
    <main className="flex min-h-[100dvh] flex-col overflow-x-hidden bg-white font-sans text-dark pb-24">
      
      {/* KONTEN UTAMA */}
      <HeaderBeranda />
      <PromoSlider />
      <MenuHafalan />
      <RekomendasiKelas />

      {/* NAVIGASI BAWAH */}
      <BottomNavigation />

    </main>
  );
}