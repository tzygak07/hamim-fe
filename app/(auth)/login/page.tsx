"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "@/components/ui/Button";
import BackButton from "@/components/ui/BackButton";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isLoginDisabled = !email.trim() || !password.trim();

  const handleLogin = () => {
    console.log("Login dengan:", { email, password });
    router.push("/beranda");
  };

  return (
    <main className="flex min-h-[100dvh] flex-col bg-white font-sans text-dark">

      <BackButton />

      <div className="flex flex-col px-6">

        <div className="mt-[10px] mb-[24px] flex justify-center">
          <Image 
            src="/login-images/login-icon.png"
            alt="Logo Hamim" 
            width={120} 
            height={60} 
            className="object-contain"
            priority
          />
        </div>

        <h1 className="mb-2 text-2xl font-bold text-primary">
          Selamat Datang Kembali
        </h1>

        <p className="mb-[24px] text-sm leading-relaxed text-third">
          Masukkan email dan kata sandi Anda yang terdaftar untuk memulai.
        </p>

        <div className="mb-[16px]">
          <label className="mb-2 block text-sm font-medium text-dark">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email disini"
            className="w-full rounded-full border border-third/40 px-6 py-4 text-sm text-dark outline-none transition-all placeholder:text-third focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="mb-[8px] relative">
          <label className="mb-2 block text-sm font-medium text-dark">
            Kata Sandi
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi disini"
              className="w-full rounded-full border border-third/40 py-4 pl-6 pr-14 text-sm text-dark outline-none transition-all placeholder:text-third focus:border-primary focus:ring-1 focus:ring-primary"
            />
            
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-third transition-colors hover:text-dark"
            >
              {showPassword ? (
                <FiEyeOff className="text-xl" />
              ) : (
                <FiEye className="text-xl" />
              )}
            </button>
          </div>
        </div>

        <div className="mb-[16px] flex justify-end">
          <Link
            href="/lupa-sandi"
            className="text-xs font-semibold text-primary/80 transition-opacity hover:opacity-70"
          >
            Lupa kata sandi?
          </Link>
        </div>

        <Button
          disabled={isLoginDisabled}
          onClick={handleLogin}
          className="mb-[24px]"
        >
          Masuk
        </Button>

        <p className="text-center text-sm text-dark">
          Belum punya akun?{" "}
          <Link href="/register" className="font-bold text-primary transition-opacity hover:opacity-70">
            Daftar disini
          </Link>
        </p>
      </div>

      <div className="mt-[240px] px-6 pb-8 text-center">
        <p className="text-xs leading-relaxed text-third">
          Dengan masuk, Anda menyetujui kebijakan dan privasi dari aplikasi Hamim.
        </p>
      </div>

    </main>
  );
}