"use client";

import { FaQuran } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";

interface JuzCardProps {
  title: string;
  onClick: () => void;
}

export default function JuzCard({ title, onClick }: JuzCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-[80px] w-full items-center justify-between rounded-[12px] border border-primary bg-white px-[20px] transition-colors hover:bg-orange-50"
    >
      <div className="flex items-center justify-center">
        <FaQuran className="text-[32px] text-primary" />
      </div>

      <span className="text-[16px] font-bold text-dark">
        {title}
      </span>

      <div className="flex items-center justify-center">
        <FiPlay className="text-[32px] text-primary" />
      </div>
    </button>
  );
}