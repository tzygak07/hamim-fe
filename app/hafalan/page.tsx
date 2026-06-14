"use client";

import BackButton from "@/components/ui/BackButton";
// PERUBAHAN: Import disesuaikan dengan nama file baru
import DaftarHafalan from "./components/DaftarHafalan";

export default function HafalanPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col bg-white font-sans text-dark overflow-x-hidden">
      
      {/* Header Global */}
      <BackButton title="Hafalan Yuk" />

      {/* Garis batas tipis di bawah header */}
      <div className="w-full border-b border-third/10" />

      {/* PERUBAHAN: Memanggil komponen dengan nama baru */}
      <DaftarHafalan />

    </main>
  );
}