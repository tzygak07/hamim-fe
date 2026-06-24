"use client";

import { IoPlay } from "react-icons/io5";

interface VideoCardProps {
  title: string;
  description: string;
  duration: string;
  isActive?: boolean;
}

export default function VideoCard({ title, description, duration, isActive = false }: VideoCardProps) {
  return (
    <div 
      className={`flex h-[91px] w-full items-center justify-between rounded-[16px] p-[16px] transition-colors cursor-pointer active:scale-[0.98] ${
        isActive ? "bg-[#FFF4EB]" : "bg-white border border-third/10 shadow-sm"
      }`}
    >
      <div className="flex items-center gap-[12px] overflow-hidden pr-2">
        {/* Lingkaran Play Icon */}
        <div 
          className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full ${
            isActive ? "bg-primary text-white" : "bg-[#FFF4EB] text-primary"
          }`}
        >
          <IoPlay className="text-[24px] ml-1" /> {/* ml-1 agar segitiga play pas di tengah */}
        </div>
        
        {/* Teks Video */}
        <div className="flex flex-col gap-[2px] overflow-hidden">
          <h3 className="text-[14px] font-bold text-dark truncate">
            {title}
          </h3>
          <p className="text-[12px] font-normal text-third truncate">
            {description}
          </p>
        </div>
      </div>

      {/* Durasi */}
      <span className="shrink-0 text-[12px] font-normal text-third">
        {duration}
      </span>
    </div>
  );
}