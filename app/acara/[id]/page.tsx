"use client";

import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { useState } from "react";

export default function DetailAcaraPage({ params }: { params: { id: string } }) {
  const [imgError, setImgError] = useState(false);

  // Data dummy (nantinya akan di-fetch berdasarkan params.id)
  const eventDetail = {
    title: "TA-MAT Al-Quran (Tahsin Maqomat) Metode Maqdis",
    originalPrice: "Rp450.000",
    currentPrice: "Rp250.000",
    image: "/kursus-images/kelas1.png",
    date: "12 Maret 2022 08:00 WIB",
    speaker: "Ustadz Abu Bakar",
    location: "Zoom Meeting",
    type: "Online",
    description:
      "Lorem ipsum dolor sit amet consectetur. Congue pellentesque ligula purus pharetra ipsum penatibus. Arcu ac a faucibus in nunc eu aliquam. Molestie condimentum ac ut est. At platea in nunc feugiat auctor pulvinar pellentesque risus.",
  };

  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col overflow-x-hidden bg-white pb-[100px] font-sans text-dark">
      
      {/* Header/Navigasi */}
      <div className="sticky top-0 z-50 flex w-full items-center bg-white px-[19px] py-[16px]">
        <Link href="/acara" className="flex items-center gap-2 text-primary transition-opacity hover:opacity-80">
          <FiChevronLeft className="text-[24px]" />
          <span className="text-[16px] font-bold">Detail Acara</span>
        </Link>
      </div>

      {/* Gambar Acara (412x200) */}
      <div className="relative h-[200px] w-full bg-third/10">
        {!imgError ? (
          <Image
            src={eventDetail.image}
            alt={eventDetail.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-third/10 text-[12px] text-third">
          </div>
        )}
      </div>

      {/* Konten Utama */}
      <div className="flex flex-col px-[19px] mt-[19px]">
        
        {/* DIV 1: Header Info */}
        <div className="flex flex-col border-b border-third/10 pb-[24px]">
          {/* Badge Online & Terbatas */}
          <div className="mb-[8px] flex gap-[4px]">
            <div className="flex h-[23px] w-[59px] items-center justify-center rounded-full bg-[#27AE60] p-[8px]">
              <span className="text-[10px] font-semibold text-white">Online</span>
            </div>
            <div className="flex h-[23px] w-[59px] items-center justify-center rounded-full bg-primary p-[8px]">
              <span className="text-[10px] font-semibold text-white">Terbatas</span>
            </div>
          </div>

          {/* Judul Acara */}
          <h1 className="mb-[8px] text-[16px] font-bold leading-snug text-dark">
            {eventDetail.title}
          </h1>

          {/* Harga */}
          <div className="flex flex-col">
            <div className="relative mb-[2px] w-max">
              <span className="text-[11px] font-normal text-primary">
                {eventDetail.originalPrice}
              </span>
              <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-primary"></div>
            </div>
            <span className="text-[20px] font-bold leading-none text-primary">
              {eventDetail.currentPrice}
            </span>
          </div>
        </div>

        {/* DIV 2: Informasi & Detail Acara */}
        <div className="mt-[24px] flex flex-col gap-[24px]">
          
          {/* Section: Informasi Acara */}
          <div className="flex flex-col">
            <h2 className="mb-[12px] text-[16px] font-bold text-dark">
              Informasi Acara
            </h2>
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-normal text-third">Tanggal & Waktu</span>
                <span className="text-[14px] font-normal text-dark">{eventDetail.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-normal text-third">Pembicara</span>
                <span className="text-[14px] font-normal text-dark">{eventDetail.speaker}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-normal text-third">Lokasi</span>
                <span className="text-[14px] font-normal text-dark">{eventDetail.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-normal text-third">Jenis</span>
                <span className="text-[14px] font-normal text-dark">{eventDetail.type}</span>
              </div>
            </div>
          </div>

          {/* Section: Detail Acara */}
          <div className="flex flex-col">
            <h2 className="mb-[12px] text-[16px] font-bold text-dark">
              Detail Acara
            </h2>
            <p className="text-[14px] font-normal leading-relaxed text-third">
              {eventDetail.description}
            </p>
          </div>
        </div>

      </div>

      {/* DIV 3: Bottom Action Bar */}
      <div className="fixed bottom-0 z-50 flex w-full max-w-[412px] items-center border-t border-third/10 bg-white px-[20px] py-[16px] gap-[24px]">
        
        {/* Keterangan Harga */}
        <div className="flex flex-col justify-center shrink-0">
          <span className="text-[10px] font-normal leading-none text-third mb-[4px]">
            Harga
          </span>
          <span className="text-[20px] font-bold leading-none text-primary">
            {eventDetail.currentPrice}
          </span>
        </div>

        {/* Button Beli Sekarang */}
        <button className="flex flex-1 items-center justify-center rounded-[20px] bg-primary p-[16px] text-[16px] font-bold text-white transition-colors hover:bg-primary/90">
          Beli Sekarang
        </button>
      </div>

    </main>
  );
}