"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import BackButton from "@/components/ui/BackButton";
import { IoPerson, IoVideocam } from "react-icons/io5";
import BelajarTabs from "./components/BelajarTabs";
import VideoCard from "./components/VideoCard";

export default function BelajarDetailPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("Video");

  // Dummy data list video
  const videoList = [
    { id: 1, title: "Apa Itu NaDaMiNa?", description: "Belajar tentang irama NaDaMiNa bersama Ust Abu Afifah", duration: "2:45" },
    { id: 2, title: "Apa Itu NaDaMiNa?", description: "Belajar tentang irama NaDaMiNa bersama Ust Abu Afifah", duration: "2:45" },
    { id: 3, title: "Apa Itu NaDaMiNa?", description: "Belajar tentang irama NaDaMiNa bersama Ust Abu Afifah", duration: "2:45" },
    { id: 4, title: "Apa Itu NaDaMiNa?", description: "Belajar tentang irama NaDaMiNa bersama Ust Abu Afifah", duration: "2:45" },
  ];

  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col overflow-x-hidden bg-white font-sans text-dark pb-10">
      <div className="sticky top-0 z-50 w-full bg-white">
        <BackButton title="Belajar Irama Bayati Hamim" />
        <div className="w-full border-b border-third/10" />
      </div>

      {/* Gambar Banner 412x200 */}
      <div className="w-full shrink-0 bg-third/20">
        <Image
          src="/kursus-images/kelas1.png"
          alt="Banner Kelas"
          width={412}
          height={200}
          priority
          className="h-[200px] w-full object-cover"
        />
      </div>

      <div className="flex flex-col px-6">
        {/* Header Info: Jarak mt-[22px] dari gambar */}
        <div className="mt-[22px] flex flex-col">
          <h1 className="text-[16px] font-bold text-dark">
            Belajar Irama Bayati Hamim
          </h1>
          
          <div className="mt-[8px] flex items-center gap-[16px] text-third">
            <div className="flex items-center gap-[6px]">
              <IoPerson className="text-[14px]" />
              <span className="text-[14px] font-normal leading-none">Ust. Abu Afifah</span>
            </div>
            <div className="flex items-center gap-[6px]">
              <IoVideocam className="text-[14px]" />
              <span className="text-[14px] font-normal leading-none">{videoList.length} Video</span>
            </div>
          </div>
        </div>

        {/* Tab Navigasi: Jarak mutlak mt-[24px] dari info header */}
        <div className="mt-[24px]">
          <BelajarTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Konten Area: Jarak mutlak mt-[28px] dari tab */}
        <div className="mt-[28px] flex flex-col">
          
          {activeTab === "Video" && (
            <div className="flex flex-col gap-[9px]">
              {videoList.map((video, index) => (
                <VideoCard 
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  duration={video.duration}
                  isActive={index === 0} // Simulasi video pertama sedang aktif
                />
              ))}
            </div>
          )}

          {activeTab === "Deskripsi" && (
            <div className="flex flex-col">
              <p className="text-[14px] font-normal leading-relaxed text-third">
                Lorem ipsum dolor sit amet consectetur. Odio a tempus nunc non iaculis justo vestibulum. Tincidunt gravida velit nunc a. Sit maecenas et ornare sed id sed. Semper ac lorem sed nec id adipiscing fusce fames.
              </p>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}