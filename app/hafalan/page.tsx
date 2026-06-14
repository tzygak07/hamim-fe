"use client";

import BackButton from "@/components/ui/BackButton";
import DaftarHafalan from "./components/DaftarHafalan";

export default function HafalanPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col bg-white font-sans text-dark overflow-x-hidden">
      <BackButton title="Hafalan Yuk" />
      <div className="w-full border-b border-third/10" />
      <DaftarHafalan />
    </main>
  );
}