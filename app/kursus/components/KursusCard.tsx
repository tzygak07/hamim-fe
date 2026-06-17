"use client";

import Image from "next/image";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";

interface KursusCardProps {
  id: number;
  title: string;
  badgeText: string;
  badgeColor: "green" | "orange";
  price: string;
  ustaz: string;
  image: string;
}

export default function KursusCard({
  id,
  title,
  badgeText,
  badgeColor,
  price,
  ustaz,
  image,
}: KursusCardProps) {
  const isGreen = badgeColor === "green";
  const badgeBg = isGreen ? "bg-[#27AE60]" : "bg-[#F2994A]";
  
  return (
    <Link
      href={`/kursus/${id}`}
      className="flex h-[237px] w-[212px] shrink-0 snap-center flex-col overflow-hidden rounded-[16px] border border-third/20 bg-white shadow-sm transition-transform hover:-translate-y-1"
    >
      <div className="relative h-[117px] w-full bg-third/20">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex h-[120px] w-full flex-col p-[12px] gap-[8px]">
        <div 
          className={`flex h-[23px] w-max items-center justify-center rounded-[20px] px-[10px] ${badgeBg}`}
        >
          <span className="text-[10px] font-semibold text-white leading-none">
            {badgeText}
          </span>
        </div>

        <h3 className="text-[14px] font-semibold leading-tight text-dark line-clamp-1">
          {title}
        </h3>

        <p className="text-[16px] font-bold leading-none text-[#F2994A]">
          {price}
        </p>

        <div className="flex items-center gap-[6px] text-third">
          <IoPerson className="text-[11px]" />
          <span className="text-[11px] font-normal leading-none">{ustaz}</span>
        </div>
      </div>
    </Link>
  );
}