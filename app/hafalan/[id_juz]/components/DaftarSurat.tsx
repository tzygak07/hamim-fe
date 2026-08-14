"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdSearch } from "react-icons/md";

// Dummy data sementara sebelum integrasi API
const dummySurat = [
  {
    id: 1,
    nomor: 1,
    nama: "Al-Fatihah",
    arti: "Pembukaan",
    ayatCount: 7,
    arabicImg: "/hafalan-images/arabic-fatihah.png", // Ganti dengan path asset aslimu
  },
  {
    id: 2,
    nomor: 255,
    nama: "Ayat Kursi",
    arti: "Ayat Kursi",
    ayatCount: 255, // Mengikuti teks di gambar
    arabicImg: "/hafalan-images/arabic-kursi.png", // Ganti dengan path asset aslimu
  },
];

export default function DaftarSurat({ idJuz }: { idJuz: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Logika untuk fitur pencarian
  const filteredSurat = dummySurat.filter((surat) =>
    surat.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex w-full flex-col pt-4">
      
      {/* Search Bar */}
      <div className="px-6 pb-4">
        <div className="relative flex items-center w-full">
          <MdSearch className="absolute left-4 text-2xl text-third/50" />
          <input
            type="text"
            placeholder="Pencarian surat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-third/30 bg-white py-3 pl-12 pr-4 text-sm text-dark placeholder:text-third/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      <div className="w-full border-b border-third/10" />

      {/* List Surat */}
      <div className="flex w-full flex-col pb-12">
        {filteredSurat.length > 0 ? (
          filteredSurat.map((surat) => (
            <button
              key={surat.id}
              onClick={() => router.push(`/hafalan/${idJuz}/${surat.id}`)}
              className="flex w-full items-center justify-between border-b border-third/10 px-6 py-4 text-left transition-colors hover:bg-third/5"
            >
              <div className="flex items-center gap-4 w-full">
                
                {/* Bintang Segi Delapan & Nomor Surat */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                  {/* Gunakan asset frame bintangmu di sini. Saya pakai styling fallback border jika image belum ada */}
                  <Image 
                    src="/hafalan-images/frame-bintang.svg" 
                    alt="Frame" 
                    fill 
                    className="object-contain opacity-80"
                  />
                  <span className="relative z-10 text-[13px] font-bold text-primary">
                    {surat.nomor}.
                  </span>
                </div>

                {/* Detail Surat */}
                <div className="flex flex-1 flex-col pr-4">
                  <h3 className="text-[15px] font-bold text-dark">{surat.nama}</h3>
                  <p className="mt-[2px] text-[13px] text-third">
                    {surat.arti} ({surat.ayatCount})
                  </p>
                  {/* Garis bawah pada deskripsi (sesuai gambar) */}
                  <div className="mt-1.5 h-[2px] w-full bg-third/20 rounded-full" />
                </div>
              </div>

              {/* Kaligrafi Arab */}
              <div className="relative h-10 w-16 shrink-0">
                <Image
                  src={surat.arabicImg}
                  alt={`Kaligrafi ${surat.nama}`}
                  fill
                  className="object-contain object-right"
                />
              </div>
            </button>
          ))
        ) : (
          <div className="py-10 text-center text-sm text-third">
            Surat tidak ditemukan.
          </div>
        )}
      </div>
    </div>
  );
}