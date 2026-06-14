"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import BackButton from "@/components/ui/BackButton";
import Input from "@/components/ui/Input";

export default function LupaSandiPage() {
  const [inputValue, setInputValue] = useState("");

  const isButtonDisabled = !inputValue.trim();

  const handleKirimKode = () => {
    console.log("Kirim kode verifikasi ke:", inputValue);
  };

  return (
    <main className="flex min-h-[100dvh] flex-col bg-white font-sans text-dark">

      <BackButton />

      <div className="flex flex-1 flex-col px-6 pt-6">

        <h1 className="mb-2 text-2xl font-bold text-primary">
          Verifikasi Akun
        </h1>

        <p className="mb-8 text-sm leading-relaxed text-third">
          Masukkan nomor WhatsApp Anda untuk dapat mengirimkan kode.
        </p>

        <Input
          label="Nomor WhatsApp"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Masukkan email disini"
          autoFocus
        />

      </div>

      <div className="mt-auto flex w-full px-6 pb-12">
        <Button
          disabled={isButtonDisabled}
          onClick={handleKirimKode}
        >
          Kirim Kode Verifikasi
        </Button>
      </div>

    </main>
  );
}