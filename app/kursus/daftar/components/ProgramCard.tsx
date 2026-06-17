"use client";

import { ReactNode } from "react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ProgramCard({ title, description, icon }: ProgramCardProps) {
  return (
    <div className="flex flex-col rounded-[16px] border border-third/10 bg-white p-[16px] shadow-sm">
      <div className="flex items-center gap-[8px]">
        {/* Lingkaran Icon 24x24 */}
        <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#FFF4EB] text-primary">
          {icon}
        </div>
        
        {/* Nama Program */}
        <h3 className="text-[14px] font-bold text-dark">
          {title}
        </h3>
      </div>

      {/* Deskripsi Program */}
      <p className="mt-[8px] text-[14px] font-normal leading-relaxed text-third">
        {description}
      </p>
    </div>
  );
}