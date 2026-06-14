"use client";

import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import { MdKeyboardArrowRight, MdPause, MdMessage } from "react-icons/md";

export default function MenuHafalan() {
  return (
    <div className="mt-6 flex flex-col px-6">
      <Link 
        href="/hafalan" 
        className="flex items-center justify-between rounded-2xl border border-third/20 bg-white p-[16px] shadow-sm transition-all hover:border-primary/50"
      >
        <div className="flex items-center gap-[36px]">
          <div className="flex items-center gap-[16px]">
            <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-xl bg-[#FFF4EB] text-primary">
              <FaBookOpen className="text-lg" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[14px] font-bold text-dark">Mulai Hafalan</h3>
              <p className="mt-[2px] text-[12px] leading-snug text-third">
                Mulai perjalanan hafalan Quranmu bersama Hamim
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm">
          <MdKeyboardArrowRight className="text-xl" />
        </div>
      </Link>

      <div className="mt-[11px] grid grid-cols-2 gap-[8px]">
        <Link 
          href="/sambung-bacaan" 
          className="flex flex-col items-center justify-center gap-[8px] rounded-2xl bg-[#FFF4EB] p-[16px] transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-xl bg-primary text-white shadow-sm">
            <MdPause className="text-lg" />
          </div>
          <span className="text-[13px] font-semibold text-dark">Sambung Bacaan</span>
        </Link>

        <Link 
          href="/cek-bacaan" 
          className="flex flex-col items-center justify-center gap-[8px] rounded-2xl bg-[#FFF4EB] p-[16px] transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-xl bg-primary text-white shadow-sm">
            <MdMessage className="text-lg" />
          </div>
          <span className="text-[13px] font-semibold text-dark">Cek Bacaan</span>
        </Link>
        
      </div>

    </div>
  );
}