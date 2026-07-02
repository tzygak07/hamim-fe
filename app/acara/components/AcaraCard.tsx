"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={`/acara/${id}`}
      className="flex h-full w-full flex-col overflow-hidden rounded-[16px] border border-third/10 bg-white shadow-sm transition-transform hover:-translate-y-1"
    >
      <div className="relative h-[131px] w-full shrink-0 bg-third/10">
        {!imgError ? (
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover" 
            onError={() => setImgError(true)} 
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-third/10 text-[10px] text-third">
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-[4px] p-[12px]">
        <div className="flex w-max items-center justify-center rounded-[20px] bg-primary p-[8px]">
          <span className="text-[10px] font-semibold leading-none text-white">
            {badgeText}
          </span>
        </div>

        <h3 className="line-clamp-3 text-[14px] font-normal leading-snug text-dark">
          {title}
        </h3>

        <div className="mt-auto flex flex-col">
          {originalPrice && (
            <div className="relative mb-[2px] w-max">
              <span className="text-[8px] font-normal text-primary">
                {originalPrice}
              </span>
              <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-primary"></div>
            </div>
          )}
          
          <span className="text-[16px] font-bold leading-none text-primary">
            {currentPrice}
          </span>
        </div>
      </div>
    </Link>
  );
}