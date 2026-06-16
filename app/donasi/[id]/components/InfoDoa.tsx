"use client";

import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function InfoDoa() {
  const doaData = [1, 2, 3];

  return (
    <div className="mt-[24px] flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-bold text-dark">Doa-doa</h2>
        <Link
          href="/donasi/1/doa"
          className="flex items-center gap-[4px] rounded-full bg-[#FEF3EB] px-[12px] py-[6px] transition-transform active:scale-95"
        >
          <span className="text-[11px] font-normal text-primary">2400 doa</span>
          <MdKeyboardArrowRight className="text-[14px] text-primary" />
        </Link>
      </div>

      <div className="mt-[16px] flex flex-col gap-[16px]">
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
    </div>
  );
}