"use client";

import Image from "next/image";

interface DonasiSayaProps {
  image: string;
  title: string;
  date: string;
  amount: number;
}

export default function DonasiSayaCard({ image, title, date, amount }: DonasiSayaProps) {
  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="flex w-full items-center px-[20px] py-4 border-b border-third/10 bg-white transition-colors hover:bg-third/5">
      <div className="relative h-[80px] w-[80px] shrink-0 overflow-hidden rounded-xl bg-third/20">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="ml-[16px] flex flex-col justify-center">
        <h3 className="text-[14px] font-bold text-dark line-clamp-2">
          {title}
        </h3>

        <div className="mt-1 flex items-center gap-[16px] text-[12px] font-normal text-third">
          <span>{date}</span>
          <span>{formatRupiah(amount)}</span>
        </div>

        <div className="mt-2 w-max rounded-[100px] border border-[#27AE60] px-[8px] py-[4px]">
          <span className="text-[10px] font-normal text-[#27AE60]">
            Berhasil
          </span>
        </div>
      </div>
    </div>
  );
}