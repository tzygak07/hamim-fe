"use client";

import HeaderBeranda from "./components/HeaderBeranda";
import PromoSlider from "./components/PromoSlider";
import MenuHafalan from "./components/MenuHafalan";
import RekomendasiKelas from "./components/RekomendasiKelas";

import BottomNavigation from "@/components/ui/BottomNavigation";

export default function BerandaPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col overflow-x-hidden bg-white font-sans text-dark pb-24">
      <HeaderBeranda />
      <PromoSlider />
      <MenuHafalan />
      <RekomendasiKelas />

      <BottomNavigation />

    </main>
  );
}