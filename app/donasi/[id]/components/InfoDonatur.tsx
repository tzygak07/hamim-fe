"use client";

import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function InfoDonatur() {
  const donaturData = [1, 2, 3];

  return (
    <div className="mt-[24px] flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-bold text-dark">Donasi</h2>
        <Link
          href="/donasi/1/donatur"
          className="flex items-center gap-[4px] rounded-full bg-[#FEF3EB] px-[12px] py-[6px] transition-transform active:scale-95"
        >
          <span className="text-[11px] font-normal text-primary">2400 donatur</span>
          <MdKeyboardArrowRight className="text-[14px] text-primary" />
        </Link>
      </div>

      <div className="mt-[16px] flex flex-col gap-[10px]">
        {donaturData.map((item) => (
          <div
            key={item}
            className="flex items-center rounded-xl border border-third/10 px-[12px] py-[12px]"
          >
            <div className="h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full bg-third/20">
              <Image
                src="/hafalan-images/icon-quran.png"
                alt="Donatur"
                width={48}
                height={48}
                className="object-cover p-1"
              />
            </div>
            
            <div className="ml-[8px] flex flex-1 flex-col">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-dark">Hamba Allah</span>
                <span className="text-[12px] font-normal text-third">3 menit yang lalu</span>
              </div>
              <span className="mt-[2px] text-[14px] font-normal text-third">
                Berdonasi sebesar Rp25.000
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}