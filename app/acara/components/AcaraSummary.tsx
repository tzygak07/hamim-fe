"use client";

import { FiChevronRight } from "react-icons/fi";

interface AcaraSummaryProps {
  myEventsCount: number;
  upcomingEventTitle: string;
}

export default function AcaraSummary({ myEventsCount, upcomingEventTitle }: AcaraSummaryProps) {
  return (
    <div className="flex w-full gap-[12px] px-6 mt-6">
      <div className="flex flex-1 items-center justify-between rounded-[12px] border border-third/10 bg-white p-[16px] shadow-sm cursor-pointer transition-colors hover:bg-gray-50">
        <div className="flex flex-col">
          <span className="text-[12px] font-normal text-third">Acara Saya</span>
          <span className="mt-[4px] text-[20px] font-bold text-primary">
            {myEventsCount}
          </span>
        </div>
        <FiChevronRight className="text-[18px] text-third" />
      </div>

      <div className="flex flex-1 items-center justify-between rounded-[12px] border border-third/10 bg-white p-[16px] shadow-sm cursor-pointer transition-colors hover:bg-gray-50">
        <div className="flex flex-col overflow-hidden pr-2">
          <span className="text-[12px] font-normal text-third">Acara Akan Datang</span>
          <span className="mt-[4px] text-[14px] font-bold text-primary truncate">
            {upcomingEventTitle}
          </span>
        </div>
        <FiChevronRight className="text-[18px] text-third shrink-0" />
      </div>
    </div>
  );
}