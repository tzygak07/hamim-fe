"use client";

import Image from "next/image";
import BackButton from "@/components/ui/BackButton";

export default function DoaPage() {
  const doaData = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col overflow-x-hidden bg-white font-sans text-dark">
      <div className="fixed left-0 top-0 z-50 w-full bg-white">
        <BackButton title="Doa-doa" />
        <div className="w-full border-b border-third/10" />
      </div>

      <div className="mt-[60px] flex flex-col gap-[10px] px-[20px] pb-[40px] pt-[16px]">
        {doaData.map((item) => (
          <div
            key={item}
            className="flex flex-col rounded-xl border border-third/10 px-[12px] py-[12px]"
          >
            <div className="flex items-center">
              <div className="h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full bg-third/20">
                <Image
                  src="/hafalan-images/icon-quran.png"
                  alt="Donatur"
                  width={48}
                  height={48}
                  className="object-cover p-1"
                />
              </div>
              <div className="ml-[8px] flex flex-col">
                <span className="text-[14px] font-bold text-dark">Hamba Allah</span>
                <span className="mt-[2px] text-[12px] font-normal text-third">3 menit yang lalu</span>
              </div>
            </div>

            <p className="mt-[16px] text-[14px] font-normal text-third">
              Semoga donasi saya berkah dan bermanfaat bagi pembangunan masjid ini
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}