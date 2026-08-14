"use client";

import Image from "next/image";
import { 
  MdHeadset, 
  MdOutlineOndemandVideo, 
  MdCheckCircleOutline 
} from "react-icons/md";

// Dummy data untuk header informasi surat (nantinya dari API)
const dummyHeader = {
  nama: "Al-Fatihah (1-7)",
  arti: "Pembukaan",
  arabicImg: "/hafalan-images/arabic-fatihah.png",
};

// Dummy data untuk daftar potongan hafalan ayat (nantinya dari API)
const dummyAyatChunks = [
  { id: 1, title: "Al-Fatihah (1-5)", status: "Belum" },
  { id: 2, title: "Al-Fatihah (6-7)", status: "Belum" },
  { id: 3, title: "Al-Fatihah (1-7)", status: "Belum" },
];

export default function DaftarAyat({ idJuz, idSurat }: { idJuz: string; idSurat: string }) {
  return (
    <div className="flex w-full flex-col">
      
      {/* --- BAGIAN 1: Header Surat --- */}
      <div className="flex items-center gap-5 border-b border-third/20 px-6 py-6 shadow-sm">
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
          {/* Frame Bintang */}
          <Image 
            src="/hafalan-images/frame-bintang.svg" 
            alt="Frame" 
            fill 
            className="object-contain"
          />
          {/* Kaligrafi Arab di tengah frame */}
          <div className="relative z-10 h-12 w-14">
            <Image
              src={dummyHeader.arabicImg}
              alt="Kaligrafi"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[18px] font-bold text-dark">{dummyHeader.nama}</h2>
          <p className="mt-[4px] text-[14px] text-third">{dummyHeader.arti}</p>
        </div>
      </div>

      {/* --- BAGIAN 2: List Potongan Ayat --- */}
      <div className="flex w-full flex-col pb-12 pt-2">
        {dummyAyatChunks.map((chunk, index) => (
          <div
            key={chunk.id}
            className="flex w-full items-center justify-between border-b border-third/10 px-6 py-5"
          >
            {/* Kiri: Frame Bintang Angka & Judul Potongan */}
            <div className="flex items-center gap-4">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                <Image 
                  src="/hafalan-images/frame-bintang.svg" 
                  alt="Frame" 
                  fill 
                  className="object-contain opacity-80"
                />
                <span className="relative z-10 text-[13px] font-bold text-primary">
                  {index + 1}.
                </span>
              </div>
              <h3 className="text-[14px] font-bold text-dark">{chunk.title}</h3>
            </div>

            {/* Kanan: Action Buttons (Audio, Video, Status) */}
            <div className="flex items-center gap-4">
              
              {/* Tombol Audio */}
              <button className="flex flex-col items-center gap-1 text-primary transition-opacity hover:opacity-70">
                <MdHeadset className="text-[22px]" />
                <span className="text-[11px] font-medium">Audio</span>
              </button>

              {/* Tombol Video */}
              <button className="flex flex-col items-center gap-1 text-primary transition-opacity hover:opacity-70">
                <MdOutlineOndemandVideo className="text-[22px]" />
                <span className="text-[11px] font-medium">Video</span>
              </button>

              {/* Tombol Status */}
              <button className="flex flex-col items-center gap-1 transition-opacity hover:opacity-70">
                {/* Icon centang berwarna abu-abu, teks berwarna oranye sesuai desain */}
                <MdCheckCircleOutline className="text-[22px] text-third/40" />
                <span className="text-[11px] font-medium text-primary">{chunk.status}</span>
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}