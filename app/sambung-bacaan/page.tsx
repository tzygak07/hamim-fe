"use client";

import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import JuzCard from "./components/JuzCard";

const juzData = [
  { id: 30, title: "Juz 30", href: "/sambung-bacaan/30" },
  { id: 29, title: "Juz 29", href: "/sambung-bacaan/29" },
  { id: 28, title: "Juz 28", href: "/sambung-bacaan/28" },
  { id: 27, title: "Juz 27", href: "/sambung-bacaan/27" },
  { id: 26, title: "Juz 26", href: "/sambung-bacaan/26" },
];

export default function SambungBacaanPage() {
  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col bg-white pb-24 font-sans text-dark">
      <div className="sticky top-0 z-50 flex items-center bg-white px-[19px] py-[16px]">
        <Link href="/beranda" className="flex items-center gap-2 text-primary transition-opacity hover:opacity-80">
          <FiChevronLeft className="text-[24px]" />
          <span className="text-[18px] font-bold">Hafalan Yuk!</span>
        </Link>
      </div>

      <div className="relative mt-2 flex items-center justify-between overflow-hidden px-[19px] py-[24px]">
        <h1 className="text-[20px] font-bold text-primary">
          Sambung Bacaan
        </h1>
        
        <div className="absolute -right-4 -top-4 opacity-20">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="60" height="60" rx="8" stroke="#F2994A" strokeWidth="4" transform="rotate(15 50 50)"/>
            <polygon points="45,35 65,50 45,65" fill="#F2994A" transform="rotate(15 50 50)"/>
          </svg>
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col gap-[16px] px-[19px]">
        {juzData.map((juz) => (
          <JuzCard
            key={juz.id}
            title={juz.title}
            href={juz.href}
          />
        ))}
      </div>
    </main>
  );
}