"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";

export default function BuatSandiBaruPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isButtonDisabled = !password.trim() || !confirmPassword.trim();

  const handleKonfirmasi = () => {
    if (password !== confirmPassword) {
      alert("Kata sandi tidak cocok. Silakan periksa kembali.");
      return;
    }

    console.log("Kata sandi berhasil diubah menjadi:", password);

    router.push("/login");
  };

  return (
    <main className="flex min-h-[100dvh] flex-col bg-white font-sans text-dark relative">

      <BackButton />

      <div className="flex flex-col px-6">

        <h1 className="mt-[10px] mb-2 text-2xl font-bold text-primary">
          Ubah Kata Sandi Anda
        </h1>
        <p className="mb-[32px] text-sm leading-relaxed text-third">
          Pastikan kata sandi terdiri dari minimal 1 huruf besar, 1 huruf kecil dan 1 angka.
        </p>

        <div className="mb-[16px] relative">
          <label className="mb-2 block text-sm font-medium text-dark">
            Kata Sandi Baru Anda
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi baru Anda disini"
              className="w-full rounded-full border border-third/40 py-4 pl-6 pr-14 text-sm text-dark outline-none transition-all placeholder:text-third focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-third transition-colors hover:text-dark"
            >
              {showPassword ? <FiEyeOff className="text-xl" /> : <FiEye className="text-xl" />}
            </button>
          </div>
        </div>

        <div className="mb-[24px] relative">
          <label className="mb-2 block text-sm font-medium text-dark">
            Ulangi Kata Sandi Baru Anda
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Masukkan ulang kata sandi baru Anda disini"
              className="w-full rounded-full border border-third/40 py-4 pl-6 pr-14 text-sm text-dark outline-none transition-all placeholder:text-third focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-third transition-colors hover:text-dark"
            >
              {showConfirmPassword ? <FiEyeOff className="text-xl" /> : <FiEye className="text-xl" />}
            </button>
          </div>
        </div>

      </div>

      <div className="mt-auto px-6 pb-12 w-full">
        <Button disabled={isButtonDisabled} onClick={handleKonfirmasi}>
          Konfirmasi
        </Button>
      </div>

    </main>
  );
}