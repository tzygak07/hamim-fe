"use client";

import { useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import DonasiBottomSheet from "./DonasiBottomSheet"; 

export default function BottomActionBar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 flex w-full items-center gap-[12px] border-t border-third/10 bg-white px-[20px] py-[16px] shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
        
        <button className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-xl bg-[#FFF4EB] text-primary transition-transform active:scale-95">
          <IoIosShareAlt className="text-2xl" />
        </button>
        
        <button className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-xl bg-[#FFF4EB] text-primary transition-transform active:scale-95">
          <FaRegBookmark className="text-xl" />
        </button>
        
        <button 
          onClick={() => setIsSheetOpen(true)}
          className="flex h-[48px] w-[252px] flex-1 items-center justify-center rounded-full bg-primary px-[16px] py-[16px] text-[14px] font-bold text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
        >
          Donasi Sekarang
        </button>
      </div>

      <DonasiBottomSheet 
        isOpen={isSheetOpen} 
        onClose={() => setIsSheetOpen(false)} 
      />
    </>
  );
}