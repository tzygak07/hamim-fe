"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PromoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);

  const banners = [
    { id: 1, src: "/promo-images/banner1.png" },
    { id: 2, src: "/promo-images/banner2.png" },
    { id: 3, src: "/promo-images/banner3.png" },
  ];

  // 1. MENGEMBALIKAN FITUR AUTO-SLIDE (Ganti setiap 3 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [banners.length]);

  // 2. LOGIKA MENDETEKSI GESERAN (SWIPE) MOUSE & TOUCH
  const handleDragStart = (clientX: number) => {
    setStartX(clientX);
  };

  const handleDragEnd = (clientX: number) => {
    if (startX === null) return;
    const distance = startX - clientX;
    
    // Geser ke Kiri (Next)
    if (distance > 50) {
      setActiveIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    } 
    // Geser ke Kanan (Prev)
    else if (distance < -50) {
      setActiveIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    }
    setStartX(null);
  };

  return (
    <div className="mt-2 flex flex-col items-center w-full overflow-hidden">
      
      {/* AREA SLIDER (Dengan kursor yang bisa digenggam/grab) */}
      <div 
        className="relative flex items-center justify-center w-[327px] h-[130px] cursor-grab active:cursor-grabbing"
        // Sensor untuk HP (Touch)
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
        // Sensor untuk Laptop/PC (Mouse)
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseUp={(e) => handleDragEnd(e.clientX)}
        onMouseLeave={(e) => {
          if (startX !== null) handleDragEnd(e.clientX);
        }}
      >
        {banners.map((banner, index) => {
          // Logika untuk menentukan status kartu (Aktif, Berikutnya, atau Sebelumnya)
          const isActive = index === activeIndex;
          const isNext = index === (activeIndex === banners.length - 1 ? 0 : activeIndex + 1);
          const isPrev = index === (activeIndex === 0 ? banners.length - 1 : activeIndex - 1);
          
          return (
            <div
              key={banner.id}
              className={`absolute top-0 left-0 w-[327px] h-[130px] overflow-hidden rounded-[20px] transition-all duration-500 ease-out shadow-sm select-none
                ${isActive ? "z-20 translate-x-0 scale-100 opacity-100" : ""}
                ${isNext ? "z-10 translate-x-0 scale-[0.85] opacity-60" : ""}
                ${isPrev ? "z-30 -translate-x-full scale-100 opacity-0" : ""}
                ${!isActive && !isNext && !isPrev ? "opacity-0 scale-[0.85] z-0" : ""}
              `}
            >
              <Image 
                src={banner.src} 
                alt={`Promo ${banner.id}`} 
                fill 
                // pointer-events-none wajib agar gambar tidak tidak sengaja "ter-drag" oleh browser bawaan
                className="object-cover pointer-events-none" 
              />
            </div>
          );
        })}
      </div>

      {/* Indikator Titik (Dots) */}
      <div className="mt-4 flex justify-center gap-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-2 bg-primary" : "w-2 bg-third/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}