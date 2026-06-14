"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome, IoHomeOutline, IoBookOutline, IoCalendarOutline, IoGridOutline } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";

export default function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    { title: "Beranda", href: "/beranda", iconActive: <IoHome className="w-[24px] h-[24px]" />, iconInactive: <IoHomeOutline className="w-[24px] h-[24px]" /> },
    { title: "Donasi", href: "/donasi", iconActive: <BiDonateHeart className="w-[24px] h-[24px]" />, iconInactive: <BiDonateHeart className="w-[24px] h-[24px]" /> },
    { title: "Ebook", href: "/ebook", iconActive: <IoBookOutline className="w-[24px] h-[24px]" />, iconInactive: <IoBookOutline className="w-[24px] h-[24px]" /> },
    { title: "Acara", href: "/acara", iconActive: <IoCalendarOutline className="w-[24px] h-[24px]" />, iconInactive: <IoCalendarOutline className="w-[24px] h-[24px]" /> },
    { title: "Lainnya", href: "/lainnya", iconActive: <IoGridOutline className="w-[24px] h-[24px]" />, iconInactive: <IoGridOutline className="w-[24px] h-[24px]" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full rounded-t-3xl border-t border-third/10 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between px-[16px] py-[8px] gap-[16px]">
        
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className="flex flex-1 flex-col items-center justify-center gap-1 transition-transform hover:scale-105 active:scale-95"
            >
              <div className={isActive ? "text-primary" : "text-third/60"}>
                {isActive ? item.iconActive : item.iconInactive}
              </div>
              <span 
                className={`text-[14px] font-bold ${
                  isActive ? "text-primary" : "text-third/60"
                }`}
              >
                {item.title}
              </span>
            </Link>
          );
        })}

      </div>
    </nav>
  );
}