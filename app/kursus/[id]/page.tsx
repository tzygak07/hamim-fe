"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/ui/BackButton";
import CourseInfo from "./components/CourseInfo";
import CheckoutFooter from "./components/CheckOutFooter";

const kursusDetailData = [
  {
    id: 1,
    title: "Ihsan 1 : Belajar Huruf Tunggal dan Vokal",
    badgeText: "Diskon 10% Off",
    badgeColor: "orange",
    originalPrice: "Rp450.000",
    currentPrice: "Rp250.000",
    ustaz: "Ust. Abu Afifah",
    image: "/kursus-images/kelas1.png",
    description: "Lorem ipsum dolor sit amet consectetur. Congue pellentesque ligula purus pharetra ipsum penatibus. Arcu ac a faucibus in nunc eu aliquam. Molestie condimentum ac ut est. At platea in nunc feugiat auctor pulvinar pellentesque risus.",
  },
  {
    id: 2,
    title: "Belajar Irama Nahawand Dasar",
    badgeText: "Free Access",
    badgeColor: "green",
    originalPrice: "",
    currentPrice: "Gratis",
    ustaz: "Ust. Abu Afifah",
    image: "/kursus-images/kelas2.png",
    description: "Ini adalah deskripsi untuk kelas irama nahawand dasar. Silakan mendaftar untuk mendapatkan akses gratis selamanya.",
  },
];

export default function DetailKursusPage() {
  const params = useParams();
  const kursusId = Number(params.id); 
  
  const kursus = kursusDetailData.find((item) => item.id === kursusId) || kursusDetailData[0];

  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col overflow-x-hidden bg-white pb-[120px] font-sans text-dark">
      <div className="sticky top-0 z-50 w-full bg-white">
        <BackButton title="Detail Kursus" />
        <div className="w-full border-b border-third/10" />
      </div>

      <div className="w-full shrink-0 bg-third/20">
        <Image
          src={kursus.image}
          alt={kursus.title}
          width={412}
          height={200}
          priority
          className="h-[200px] w-full object-cover"
        />
      </div>

      <CourseInfo
        title={kursus.title}
        badgeText={kursus.badgeText}
        badgeColor={kursus.badgeColor}
        originalPrice={kursus.originalPrice}
        currentPrice={kursus.currentPrice}
        ustaz={kursus.ustaz}
        description={kursus.description}
      />

      <CheckoutFooter price={kursus.currentPrice} />
    </main>
  );
}