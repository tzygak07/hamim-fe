"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

interface DonasiCardProps {
  id: number;
  image: string;
  sisaHari: string;
  title: string;
  target: number;
  terkumpul: number;
  isSaved?: boolean;
}

export default function DonasiCard({
  id,
  image,
  sisaHari,
  title,
  target,
  terkumpul,
  isSaved = false,
}: DonasiCardProps) {
  const router = useRouter();

  const progress = Math.min((terkumpul / target) * 100, 100);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div
      onClick={() => router.push(`/donasi/${id}`)}
      className="flex w-full max-w-[378px] cursor-pointer flex-col overflow-hidden rounded-xl border border-third/10 bg-white shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className="relative h-[117px] w-full bg-third/20">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col p-[12px]">
        <div className="w-max rounded-[100px] bg-[#FEF3EB] px-[12px] py-[8px]">
          <span className="text-[10px] font-normal text-primary">
            {sisaHari}
          </span>
        </div>

        <h3 className="mt-[12px] text-[16px] font-semibold text-dark line-clamp-2">
          {title}
        </h3>

        <div className="my-[12px] h-[6px] w-full overflow-hidden rounded-full bg-third/20">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] font-normal text-third">Target</span>
            <span className="mt-[4px] text-[14px] font-bold text-primary">
              {formatRupiah(target)}
            </span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[11px] font-normal text-third">Terkumpul</span>
            <span className="mt-[4px] text-[14px] font-bold text-primary">
              {formatRupiah(terkumpul)}
            </span>
          </div>
        </div>

        <div className="mt-[12px] flex items-center gap-[12px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/donasi/${id}`);
            }}
            className="flex-1 rounded-full bg-primary py-3 text-[14px] font-bold text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
          >
            Donasi Sekarang
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log(`Bookmark diklik untuk ID: ${id}`);
            }}
            className="flex items-center justify-center text-third transition-colors hover:text-primary"
          >
            {isSaved ? (
              <BsBookmarkFill className="h-[24px] w-[24px] text-primary" />
            ) : (
              <BsBookmark className="h-[24px] w-[24px]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}