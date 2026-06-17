"use client";

import Image from "next/image";
import BackButton from "@/components/ui/BackButton";
import { FiCheck, FiHeart } from "react-icons/fi";
import ProgramCard from "./components/ProgramCard";

export default function DaftarPrivatPage() {
  const programData = [
    {
      id: 1,
      title: "Kelas Ihsan",
      description: "Lorem ipsum dolor sit amet consectetur. Odio a tempus nunc non iaculis justo vestibulum. Tincidunt gravida velit nunc a. Sit maecenas et ornare sed id sed. Semper ac lorem sed nec id adipiscing fusce fames.",
      icon: <FiCheck className="text-[14px]" />,
    },
    {
      id: 2,
      title: "Kelas Ihsan",
      description: "Lorem ipsum dolor sit amet consectetur. Odio a tempus nunc non iaculis justo vestibulum. Tincidunt gravida velit nunc a. Sit maecenas et ornare sed id sed. Semper ac lorem sed nec id adipiscing fusce fames.",
      icon: <FiHeart className="text-[14px]" />,
    },
  ];

  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col overflow-x-hidden bg-white font-sans text-dark">
      <div className="sticky top-0 z-50 w-full bg-white">
        <BackButton title="Kursus Privat" />
        <div className="w-full border-b border-third/10" />
      </div>

      <div className="w-full shrink-0 bg-third/20">
        <Image
          src="/daftar-images/banner.png"
          alt="Banner Kursus Privat"
          width={412}
          height={200}
          priority
          className="h-[200px] w-full object-cover"
        />
      </div>

      {/* Padding top (pt) dihapus dari pembungkus agar tidak ada jarak ambigu */}
      <div className="flex flex-col px-6 pb-10">
        
        {/* 1. mt-[24px] langsung dipasang di button agar mutlak mendorong dari gambar */}
        <button className="mt-[24px] flex w-full items-center justify-center gap-[8px] rounded-[120px] bg-primary px-[16px] py-[12px] transition-opacity hover:opacity-90 active:scale-[0.98]">
          <span className="text-[16px] font-bold text-white">Chat Admin</span>
          <Image
            src="/daftar-images/logos_whatsapp-icon.svg"
            alt="Ikon WhatsApp"
            width={18}
            height={19}
            className="h-auto w-auto object-contain"
          />
        </button>

        {/* 2. mt-[24px] untuk mengatur jarak mutlak dari button ke Deskripsi */}
        <div className="mt-[24px] flex flex-col">
          <h2 className="text-[16px] font-bold text-dark">Deskripsi</h2>
          <p className="mt-[8px] text-[14px] font-normal leading-relaxed text-third">
            Lorem ipsum dolor sit amet consectetur. Odio a tempus nunc non iaculis justo vestibulum. Tincidunt gravida velit nunc a. Sit maecenas et ornare sed id sed. Semper ac lorem sed nec id adipiscing fusce fames.{" "}
            <button className="font-bold text-primary hover:underline">
              Lihat Selengkapnya
            </button>
          </p>
        </div>

        {/* 3. mt-[16px] untuk jarak dari paragraf deskripsi ke judul Program */}
        <div className="mt-[16px] flex flex-col">
          <h2 className="text-[16px] font-bold text-dark">Program</h2>
          <div className="mt-[11px] flex flex-col gap-[11px]">
            {programData.map((item) => (
              <ProgramCard 
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        
      </div>
    </main>
  );
}