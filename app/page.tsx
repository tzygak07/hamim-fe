"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [animationClass, setAnimationClass] = useState("opacity-0 scale-90");

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setAnimationClass("opacity-100 scale-100");
    }, 100);

    const fadeOutTimer = setTimeout(() => {
      setAnimationClass("opacity-0 scale-105");
    }, 2000); 

    const redirectTimer = setTimeout(() => {
      router.push("/beranda");
    }, 2500); 

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <main className="relative flex min-h-[100dvh] flex-1 items-center justify-center bg-gradient-to-b from-[#FFE37E] to-primary overflow-hidden">
      <div 
        className={`flex h-56 w-56 items-center justify-center rounded-full bg-white/20 transition-all duration-700 ease-in-out ${animationClass}`}
      >
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-xl">
          <Image
            src="/page-images/logo-hamim.png"
            alt="Logo Hamim"
            width={179}
            height={179}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}