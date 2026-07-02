"use client";

import { FiChevronRight } from "react-icons/fi";

interface AcaraSummaryProps {
  myEventsCount: number | string;
  upcomingEventTitle: string;
}

export default function AcaraSummary({ myEventsCount, upcomingEventTitle }: AcaraSummaryProps) {
  return (
    // Default flex-col (numpuk), berubah jadi flex-row di layar 375px ke atas
    <div className="mx-auto mt-6 flex w-full max-w-[412px] flex-col gap-[8px] px-[19px] min-[375px]:flex-row">
      
      {/* Acara Saya: Lebar penuh di layar kecil, fix 133px di layar besar */}
      <div className="flex h-[71px] w-full shrink-0 cursor-pointer items-center justify-between rounded-[12px] border border-third/10 bg-white p-[12px] shadow-sm transition-colors hover:bg-gray-50 min-[375px]:w-[133px]">
        <div className="flex flex-col justify-center">
          <span className="text-[12px] font-normal leading-none text-third">Acara Saya</span>
          <span className="mt-[6px] text-[24px] font-bold leading-none text-primary">
            {myEventsCount}
          </span>
        </div>
        <FiChevronRight className="h-[24px] w-[24px] shrink-0 text-primary" />
      </div>

      {/* Acara Akan Datang: Lebar penuh di layar kecil, flex-1 di layar besar */}
      <div className="flex h-[71px] w-full shrink-0 cursor-pointer items-center justify-between rounded-[12px] border border-third/10 bg-white p-[12px] shadow-sm transition-colors hover:bg-gray-50 min-[375px]:flex-1">
        <div className="flex w-full flex-col justify-center overflow-hidden pr-2">
          <span className="text-[12px] font-normal leading-none text-third">Acara Akan Datang</span>
          <span className="mt-[6px] truncate text-[16px] font-bold leading-none text-primary">
            {upcomingEventTitle}
          </span>
        </div>
        <FiChevronRight className="h-[24px] w-[24px] shrink-0 text-primary" />
      </div>
    </div>
  );
}