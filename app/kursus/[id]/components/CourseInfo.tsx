"use client";

import { IoPerson } from "react-icons/io5";

interface CourseInfoProps {
  title: string;
  badgeText: string;
  badgeColor: string;
  originalPrice?: string;
  currentPrice: string;
  ustaz: string;
  description: string;
}

export default function CourseInfo({
  title,
  badgeText,
  badgeColor,
  originalPrice,
  currentPrice,
  ustaz,
  description,
}: CourseInfoProps) {
  const isGreen = badgeColor === "green";
  const badgeBg = isGreen ? "bg-[#27AE60]" : "bg-[#F2994A]";

  return (
    <div className="flex flex-col px-6">
      <div className="mt-[12px] flex">
        <div className={`w-max rounded-full p-[8px] ${badgeBg}`}>
          <span className="text-[10px] font-semibold leading-none text-white">
            {badgeText}
          </span>
        </div>
      </div>

      <h1 className="mt-[12px] text-[16px] font-bold leading-snug text-dark">
        {title}
      </h1>

      <div className="mt-[12px] flex items-center gap-[8px] text-third">
        <IoPerson className="text-[14px]" />
        <span className="text-[14px] font-normal leading-none">{ustaz}</span>
      </div>

      <div className="mt-[12px] flex flex-col gap-[2px]">
        {originalPrice && (
          <span className="text-[11px] font-normal text-[#F2994A] line-through">
            {originalPrice}
          </span>
        )}
        <span className="text-[20px] font-bold leading-none text-[#F2994A]">
          {currentPrice}
        </span>
      </div>

      <div className="mt-[24px] flex flex-col gap-[6px]">
        <h2 className="text-[16px] font-bold text-dark">Deskripsi</h2>
        <p className="text-[14px] font-normal leading-relaxed text-third">
          {description}
        </p>
        <button className="w-max text-[14px] font-bold text-[#F2994A] hover:underline">
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  );
}