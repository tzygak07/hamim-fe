"use client";

import Image from "next/image";
import Link from "next/link";

interface AcaraCardProps {
  id: number;
  title: string;
  badgeText: string;
  originalPrice?: string;
  currentPrice: string;
  image: string;
}

export default function AcaraCard({
  id,
  title,
  badgeText,
  originalPrice,
  currentPrice,
  image,
}: AcaraCardProps) {
  return (
    <Link
      href={`/acara/${id}`}
      className="flex flex-col overflow-hidden rounded-[16px] border border-third/10 bg-white shadow-sm transition-transform hover:-translate-y-1"
    >
      <div className="relative h-[110px] w-full bg-third/10">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col p-[12px] gap-[6px]">
        <div className="flex">
          <div className="rounded-full bg-[#F2994A]/10 px-[8px] py-[4px]">
            <span className="text-[10px] font-semibold leading-none text-primary">
              {badgeText}
            </span>
          </div>
        </div>

        <h3 className="text-[12px] font-bold leading-snug text-dark line-clamp-2 h-[36px]">
          {title}
        </h3>

        <div className="flex flex-col mt-auto">
          {originalPrice && (
            <span className="text-[10px] font-normal text-primary line-through leading-none mb-[2px]">
              {originalPrice}
            </span>
          )}
          <span className="text-[14px] font-bold leading-none text-primary">
            {currentPrice}
          </span>
        </div>
      </div>
    </Link>
  );
}