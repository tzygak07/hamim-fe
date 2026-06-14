"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";

import VerifikasiBerhasilModal from "./components/VerifikasiBerhasilModal";
import KonfirmasiKembaliModal from "./components/KonfirmasiKembaliModal";

export default function VerifikasiAkunPage() {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [showModal, setShowModal] = useState(false);

  const [showBackModal, setShowBackModal] = useState(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [timeLeft, setTimeLeft] = useState(59);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const isKonfirmasiDisabled = otp.some((digit) => digit === "");

  const handleKonfirmasi = () => {
    const kodeOTP = otp.join("");
    console.log("Kode OTP yang dimasukkan:", kodeOTP);
    setShowModal(true);
  };

  const handleBackClick = () => {
    setShowBackModal(true);
  };

  const executeBack = () => {
    router.back();
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <main className="flex min-h-[100dvh] flex-col bg-white font-sans text-dark relative">

      <BackButton onClick={handleBackClick} />

      <div className="flex flex-col px-6">
        <h1 className="mt-[10px] mb-2 text-2xl font-bold text-primary">
          Verifikasi Akun
        </h1>
        <p className="mb-[32px] text-sm leading-relaxed text-third">
          Kode telah dikirim ke whatsapp dengan nomor +62837289294. Cek whatsapp Anda sekarang.
        </p>

        <div className="mb-[24px]">
          <label className="mb-2 block text-sm font-medium text-dark">
            Kode Verifikasi
          </label>
          <div className="flex w-full items-center justify-around rounded-full border border-third/40 px-6 py-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                placeholder="•"
                className="w-10 text-center text-xl text-dark bg-transparent outline-none placeholder:text-third/40 focus:text-primary transition-all"
              />
            ))}
          </div>
        </div>

        <p className="text-center text-sm font-medium text-dark">
          Kirim ulang dalam <span className="font-bold text-primary">{formatTime(timeLeft)}</span> detik
        </p>
      </div>

      <div className="mt-auto px-6 pb-12 w-full">
        <Button disabled={isKonfirmasiDisabled} onClick={handleKonfirmasi}>
          Konfirmasi
        </Button>
      </div>

      {showModal && <VerifikasiBerhasilModal />}

      {showBackModal && (
        <KonfirmasiKembaliModal 
          onClose={() => setShowBackModal(false)} 
          onConfirm={executeBack} 
        />
      )}

    </main>
  );
}