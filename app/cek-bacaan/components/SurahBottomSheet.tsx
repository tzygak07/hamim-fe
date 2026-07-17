"use client";

import { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

interface SurahBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  juzTitle: string; // Bisa digunakan untuk mengambil data surat dinamis nantinya
}

// Data dummy Surat sesuai dengan gambar referensi
const surahData = [
  { id: 58, name: "Al-Mujadalah", arabic: "المجادلة" },
  { id: 59, name: "Al-Hasyr", arabic: "الحشر" },
  { id: 60, name: "Al-Mumtahanah", arabic: "الممتحنة" },
  { id: 61, name: "As-Saff", arabic: "الصف" },
  { id: 62, name: "Al-Jumu'ah", arabic: "الجمعة" },
  { id: 63, name: "Al-Munafiqun", arabic: "المنافقون" },
  { id: 64, name: "At-Tagabun", arabic: "التغابن" },
  { id: 65, name: "At-Talaq", arabic: "الطلاق" },
  { id: 66, name: "At-Tahrim", arabic: "التحريم" },
];

export default function SurahBottomSheet({ isOpen, onClose, juzTitle }: SurahBottomSheetProps) {
  // Mencegah scroll pada body/halaman utama saat Bottom Sheet terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex justify-center transition-all duration-300 ${
        isOpen ? "visible bg-black/40 opacity-100" : "invisible bg-transparent opacity-0"
      }`}
    >
      {/* Area Overlay (Klik di luar sheet untuk menutup) */}
      <div 
        className="absolute inset-0 mx-auto w-full max-w-[412px] cursor-pointer" 
        onClick={onClose} 
      />

      {/* Kontainer Bottom Sheet */}
      <div
        className={`absolute bottom-0 flex w-full max-w-[412px] flex-col rounded-t-[24px] bg-white transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "90vh" }} // Maksimal tinggi 90% layar
      >
        {/* Handle / Drag Indicator (Bagian Atas yang bisa di klik untuk tutup) */}
        <div
          className="sticky top-0 z-10 flex w-full cursor-pointer items-center justify-center rounded-t-[24px] bg-white pb-4 pt-4"
          onClick={onClose}
        >
          <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-gray-200 text-gray-500">
            <FiChevronDown size={16} />
          </div>
        </div>

        {/* List Surat (Area yang bisa di scroll) */}
        <div className="flex-1 overflow-y-auto px-[24px] pb-[40px]">
          {surahData.map((surah) => (
            <div
              key={surah.id}
              className="flex cursor-pointer items-center justify-between border-b border-gray-100 py-[16px] transition-colors hover:bg-gray-50"
            >
              <span className="text-[14px] font-normal text-dark">
                {surah.id}. {surah.name}
              </span>
              
              {/* Teks Arab dengan warna primary */}
              <span className="text-[22px] text-primary">
                {surah.arabic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}