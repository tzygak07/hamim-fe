"use client";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface BackButtonProps {
  onClick?: () => void;
  title?: string; 
}

export default function BackButton({ onClick, title = "Kembali" }: BackButtonProps) {
  const router = useRouter();

  return (
    // PERUBAHAN: pt-12 diubah menjadi pt-6 (atau bisa pt-4 jika masih kurang nempel ke atas)
    <div className="flex px-6 pb-4 pt-6">
      <button
        onClick={onClick ? onClick : () => router.back()}
        className="flex items-center text-sm font-semibold text-primary transition-opacity hover:opacity-70"
      >
        <MdKeyboardArrowLeft className="mr-1 text-2xl" />
        {title}
      </button>
    </div>
  );
}