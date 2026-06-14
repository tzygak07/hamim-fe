"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const onboardingData = [
  {
    id: 1,
    image: "/boarding-images/on-boarding-image-1.png",
    title: "Menghafal Al Quran dengan Cara Termudah",
    description:
      "Hamim memudahkan kamu menghafal Al-Qur'an secara efektif dengan metode yang interaktif dan menyenangkan.",
  },
  {
    id: 2,
    image: "/boarding-images/on-boarding-image-2.png",
    title: "Menghafal Al Quran dengan Cara Termudah",
    description:
      "Hamim memudahkan kamu menghafal Al-Qur'an secara efektif dengan metode yang interaktif dan menyenangkan.",
  },
  {
    id: 3,
    image: "/boarding-images/on-boarding-image-3.png",
    title: "Menghafal Al Quran dengan Cara Termudah",
    description:
      "Hamim memudahkan kamu menghafal Al-Qur'an secara efektif dengan metode yang interaktif dan menyenangkan.",
  },
  {
    id: 4,
    image: "/boarding-images/on-boarding-image-4.png",
    title: "Menghafal Al Quran dengan Cara Termudah",
    description:
      "Hamim memudahkan kamu menghafal Al-Qur'an secara efektif dengan metode yang interaktif dan menyenangkan.",
  },
];

export default function OnboardingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    setCurrentIndex(onboardingData.length - 1);
  };

  const currentSlide = onboardingData[currentIndex];
  const isLastSlide = currentIndex === onboardingData.length - 1;

  return (
    <main className="flex min-h-full flex-col bg-white font-sans text-dark">
      <div className="flex w-full justify-center">
        <Image
          src={currentSlide.image}
          alt={currentSlide.title}
          width={412}
          height={429}
          className="object-contain transition-opacity duration-300"
          priority
        />
      </div>

      <div className="mt-[25px] flex w-full flex-col px-6 pb-12">
        <div className="text-left">
          <h1 className="mb-[8px] text-2xl font-bold leading-tight">
            {currentSlide.title}
          </h1>

          <p className="mb-[50px] text-sm leading-relaxed text-third">
            {currentSlide.description}
          </p>
        </div>

        <div className="mb-[50px] flex justify-center gap-2">
          {onboardingData.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-primary" : "bg-third/30"
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col">
          {!isLastSlide ? (
            <div className="flex flex-col items-center">
              <button
                onClick={handleSkip}
                className="mb-[50px] text-sm font-semibold text-third transition-colors hover:text-dark"
              >
                Lewati
              </button>
              <button
                onClick={handleNext}
                className="w-full rounded-full bg-primary py-4 font-semibold text-white shadow-md transition-transform active:scale-[0.98]"
              >
                Selanjutnya
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Link
                href="/register"
                className="flex w-full items-center justify-center rounded-full bg-primary py-4 font-semibold text-white shadow-md transition-transform active:scale-[0.98]"
              >
                Mulai Sekarang
              </Link>
              <button className="flex w-full items-center justify-center gap-2 rounded-full border border-third/30 bg-white py-4 font-semibold text-dark shadow-sm transition-transform active:scale-[0.98]">
                <Image
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Daftar dengan Google
              </button>
              <p className="mt-4 text-center text-sm text-third">
                Sudah punya akun?{" "}
                <Link href="/login" className="font-semibold text-primary">
                  Masuk disini
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
