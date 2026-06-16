"use client";

import Image from "next/image";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";

export default function KursusKelas() {
  const kursusData = [
    {
      id: 1,
      title: "Belajar Irama Bayati Hamim",
      badge: "Free Access",
      price: "Gratis",
      ustaz: "Ust. Abu Afifah",
      image: "/kursus-images/kelas1.png",
    },
    {
      id: 2,
      title: "Belajar Irama Nahawand Dasar",
      badge: "Free Access",
      price: "Gratis",
      ustaz: "Ust. Abu Afifah",
      image: "/kursus-images/kelas2.png",
    },
  ];

  return (
    <div className="mt-8 flex flex-col">
      <div className="mb-[16px] flex items-center justify-between px-6">
        <h2 className="text-[16px] font-bold text-dark">Hanya Untukmu</h2>
        <Link 
          href="/kursus" 
          className="rounded-md bg-[#FFF4EB] px-3 py-1 text-[12px] font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Selengkapnya
        </Link>
      </div>

      <div 
        className="flex w-full overflow-x-auto px-6 gap-[16px] pb-4 snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {kursusData.map((item) => (
          <Link
            key={item.id}
            href={`/kelas/${item.id}`}
            className="flex w-[212px] h-[237px] shrink-0 snap-center flex-col overflow-hidden rounded-[16px] border border-third/20 bg-white shadow-sm transition-transform hover:-translate-y-1"
          >
            <div className="relative h-[117px] w-[212px] bg-third/20">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>

            <div className="flex h-[120px] w-[212px] flex-col p-3 gap-[8px]">
              <div className="w-max rounded-[20px] bg-primary p-[8px] text-[10px] font-bold text-white leading-none">
                {item.badge}
              </div>

              <h3 className="text-[14px] font-bold leading-tight text-dark line-clamp-1">
                {item.title}
              </h3>

              <p className="text-[16px] font-bold text-primary leading-none">
                {item.price}
              </p>

              <div className="flex items-center gap-[6px] text-third">
                <IoPerson className="text-[12px]" />
                <span className="text-[11px] font-medium leading-none">{item.ustaz}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}