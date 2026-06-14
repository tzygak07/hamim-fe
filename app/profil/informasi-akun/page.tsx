"use client";

import { useState } from "react";
import Image from "next/image";
import { MdEdit } from "react-icons/md";

import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function InformasiAkunPage() {
  const initialData = {
    name: "Fauzan",
    email: "fauzananana@gmail.com",
    phone: "082537292992",
  };

  const [formData, setFormData] = useState(initialData);

  const hasChanges = JSON.stringify(formData) !== JSON.stringify(initialData);
  const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim();
  const isButtonDisabled = !hasChanges || !isFormValid;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSimpan = () => {
    console.log("Menyimpan data profil baru:", formData);
  };

  return (
    <main className="flex min-h-[100dvh] flex-col bg-white font-sans text-dark relative">
      
      <BackButton title="Informasi Akun" />

      <div className="flex flex-col items-center pt-2">
        <div className="relative h-20 w-20">
          <div className="h-full w-full overflow-hidden rounded-full bg-third/20">
            <Image 
              src="/profil-images/avatar.png" 
              alt="Foto Profil"
              fill
              className="object-cover"
            />
          </div>
          <button className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-[2.5px] border-white bg-primary text-white shadow-sm transition-transform hover:scale-105 active:scale-95">
            <MdEdit className="text-sm" />
          </button>
        </div>
        
        <h2 className="mt-2 text-[16px] font-bold text-dark">{initialData.name}</h2>
        <p className="mt-2 text-xs text-third">Bergabung sejak 12 Juni 2024</p>
      </div>

      <div className="flex flex-col px-6 pt-[22px] pb-12 w-full">
        
        <Input 
          label="Nama Lengkap"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Input 
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input 
          label="Nomor Telepon"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <Button disabled={isButtonDisabled} onClick={handleSimpan}>
          Simpan Profil
        </Button>

      </div>

    </main>
  );
}