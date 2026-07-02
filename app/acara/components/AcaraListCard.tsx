"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface AcaraListCardProps {
  id: number;
  title: string;
  datetime: string;
  status: "Sedang Berlangsung" | "Selesai" | "Belum Dimulai";
  image: string;
}

export default function AcaraListCard({
  id,
  title,
  datetime,
  status,
  image,
}: AcaraListCardProps) {
  const [imgError, setImgError] = useState(false);

  // Styling Badge Logic
  // Sedang Berlangsung: 114x20, BG #FFFCDE, Border/Text #FFCC00
  // Selesai: 50x20, BG #F4FFF7, Border/Text #34C759
  // Belum Dimulai: 90x20 (Estimasi), BG #F2F2F2, Border/Text #828282
  
  const getBadgeSize = () => {
    switch (status) {
      case "Sedang Berlangsung": return "w-[114px] h-[20px]";
      case "Selesai": return "w-[50px] h-[20px]";
      case "Belum Dimulai": return "w-[90px] h-[20px]";
      default: return "w-[50px] h-[20px]";
    }
  };

  const getBadgeStyle = () => {
    switch (status) {
      case "Sedang Berlangsung":
        return "bg-[#FFFCDE] border-[#FFCC00] text-[#FFCC00]";
      case "Selesai":
        return "bg-[#F4FFF7] border-[#34C759] text-[#34C759]";
      case "Belum Dimulai":
        return "bg-[#F2F2F2] border-[#828282] text-[#828282]";
      default:
        return "bg-gray-100 border-gray-300 text-gray-500";
    }
  };

  return (
    <Link
      href={`/acara/${id}`}
      className="flex w-full items-start border-b border-third/10 bg-white px-[19px] py-[20px] transition-colors hover:bg-gray-50"
    >
      {/* Gambar: 92x92, Rounded 8px */}
      <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[8px] bg-third/10">
        {!imgError ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[10px] text-third">
            Dummy
          </div>
        )}
      </div>

      {/* Konten Kanan */}
      <div className="ml-[16px] flex flex-1 flex-col justify-between h-[92px]">
        <div className="flex flex-col gap-[4px]">
          {/* Judul: Bold 14 */}
          <h3 className="line-clamp-2 text-[14px] font-bold leading-snug text-dark">
            {title}
          </h3>
          {/* Tanggal & Waktu: Regular 12 */}
          <span className="text-[12px] font-normal text-third">
            {datetime}
          </span>
        </div>

        {/* Badge Status: Fixed size & Custom Colors */}
        <div
          className={`flex items-center justify-center rounded-[100px] border ${getBadgeSize()} ${getBadgeStyle()}`}
        >
          <span className="text-[10px] font-normal leading-none">{status}</span>
        </div>
      </div>
    </Link>
  );
}