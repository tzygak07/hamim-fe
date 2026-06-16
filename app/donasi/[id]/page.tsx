"use client";

import Image from "next/image";
import BackButton from "@/components/ui/BackButton";
import HeaderInfo from "./components/HeaderInfo";
import Deskripsi from "./components/Deskripsi";
import InfoDonatur from "./components/InfoDonatur";
import InfoDoa from "./components/InfoDoa";
import BottomActionBar from "./components/BottomActionBar";

export default function DetailDonasiPage() {
  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[412px] flex-col overflow-x-hidden bg-white font-sans text-dark">
      <div className="fixed left-0 top-0 z-50 w-full bg-white">
        <BackButton title="Detail Donasi" />
      </div>

      <div className="mt-[60px] flex w-full flex-col pb-[100px]">
        <div className="relative h-[222px] w-full shrink-0 bg-third/20">
          <Image
            src="/promo-images/banner1.png"
            alt="Donasi Banner"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col px-6">
          <HeaderInfo />
          <Deskripsi />
          <InfoDonatur />
          <InfoDoa />
        </div>
      </div>

      <BottomActionBar />
    </main>
  );
}