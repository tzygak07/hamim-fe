"use client";

import Image from "next/image";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";

interface MyClassCardProps {
  id: number;
  title: string;
  badgeText: string;
  ustaz: string;
  image: string;
}

export default function MyClassCard({
  id,
  title,
  badgeText,
  ustaz,
  image,
}: MyClassCardProps) {
  return (
    <Link
      href={`/belajar/${id}`}
      className="flex w-full flex-col overflow-hidden rounded-[16px] border border-third/20 bg-white shadow-sm transition-transform hover:-translate-y-1"
    >
      {/* Gambar: Tinggi 117px */}
      <div className="relative h-[117px] w-full bg-third/20">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Deskripsi: Tinggi 93px, Padding 12px, Gap 8px */}
      <div className="flex h-[93px] w-full flex-col gap-[8px] p-[12px]">
        
        {/* Badge: Padding 8px x & y */}
        <div className="flex w-max items-center justify-center rounded-[20px] bg-[#27AE60] px-[8px] py-[8px]">
          <span className="text-[10px] font-semibold leading-none text-white">
            {badgeText}
          </span>
        </div>

        <h3 className="text-[14px] font-semibold leading-none text-dark line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center gap-[6px] text-third">
          <IoPerson className="text-[11px]" />
          <span className="text-[11px] font-normal leading-none">{ustaz}</span>
        </div>
        
      </div>
    </Link>
  );
}