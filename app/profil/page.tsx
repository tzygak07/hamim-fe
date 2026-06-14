"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import BackButton from "@/components/ui/BackButton";

import { IoPersonSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdLogout, MdOutlineQuestionAnswer, MdKeyboardArrowRight } from "react-icons/md";

export default function ProfilPage() {
  const router = useRouter();

  const menuItems = [
    {
      title: "Informasi Akun",
      icon: <IoPersonSharp className="text-xl text-dark" />,
      href: "/profil/informasi-akun",
      isDanger: false,
    },
    {
      title: "Pesanan Saya",
      icon: <IoMdCart className="text-xl text-dark" />,
      href: "/profil/pesanan", 
      isDanger: false,
    },
    {
      title: "FAQ",
      icon: <MdOutlineQuestionAnswer className="text-xl text-dark" />,
      href: "/faq",
      isDanger: false,
    },
    {
      title: "Pusat Bantuan",
      icon: <RiCustomerService2Fill className="text-xl text-dark" />,
      href: "/bantuan",
      isDanger: false,
    },
    {
      title: "Keluar",
      icon: <MdLogout className="text-xl" />,
      href: "#", 
      isDanger: true, 
    },
  ];

  return (
    <main className="flex min-h-[100dvh] flex-col bg-white font-sans text-dark">
      <BackButton title="Profil Saya" onClick={() => router.push("/beranda")} />
      <div className="flex flex-col items-center pt-2">
        <div className="relative h-20 w-20 overflow-hidden rounded-full bg-third/20">
          <Image 
            src="/profil-images/avatar.png" 
            alt="Foto Profil"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="mt-2 text-base font-bold text-dark">Fauzan</h2>
        <p className="mt-2 text-xs text-third">Bergabung sejak 12 Juni 2024</p>
      </div>

      <div className="flex flex-col px-6 pt-[18px]">
        <div className="mb-[22px] flex items-center justify-between rounded-2xl border border-third/20 p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Image 
              src="/profil-images/koin.png" 
              alt="Koin" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-medium text-third">Poin Kamu</span>
              <span className="text-lg font-bold text-primary">3</span>
            </div>
          </div>
          <button className="flex items-center rounded-[8px] bg-primary px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-80">
            <span className="mr-1">+</span> Top Up Koin
          </button>
        </div>
        <div className="flex flex-col gap-4 pb-12">
          {menuItems.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className={`flex items-center justify-between rounded-full border border-third/40 px-6 py-4 transition-colors hover:bg-third/5 ${
                item.isDanger ? "border-red-500/40 text-red-500 hover:bg-red-50" : "text-dark"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`${item.isDanger ? "text-red-500" : "text-dark"}`}>
                  {item.icon}
                </div>
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
              <MdKeyboardArrowRight className={`text-2xl ${item.isDanger ? "text-red-500" : "text-third"}`} />
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}