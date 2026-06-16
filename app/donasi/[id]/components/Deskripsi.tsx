"use client";

import { useState } from "react";

export default function Deskripsi() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-[24px] flex flex-col">
      <h2 className="text-[16px] font-bold text-dark">Deskripsi</h2>
      
      <div className="mt-[16px] flex flex-col gap-[6px] text-[14px] font-normal text-third">
        <p>
          Lorem ipsum dolor sit amet consectetur. Congue pellentesque ligula purus pharetra ipsum penatibus. Arcu ac a faucibus in nunc eu aliquam. Molestie condimentum ac ut est. At platea in nunc feugiat auctor pulvinar pellentesque risus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Congue pellentesque ligula purus pharetra ipsum penatibus. Arcu ac a faucibus in nunc eu aliquam. Molestie condimentum ac ut est. At platea in nunc feugiat auctor pulvinar pellentesque risus.
        </p>
        
        {isExpanded && (
          <p>
            Tambahan deskripsi yang muncul setelah tombol ditekan. Lorem ipsum dolor sit amet consectetur. Congue pellentesque ligula purus pharetra ipsum penatibus.
          </p>
        )}
      </div>

      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="mt-[6px] text-left text-[14px] font-bold text-primary transition-opacity hover:opacity-80"
        >
          Baca selengkapnya...
        </button>
      )}
    </div>
  );
}