"use client";

import Link from "next/link";
import { FaQuran } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

interface JuzCardProps {
  title: string;
  href: string;
}

export default function JuzCard({ title, href }: JuzCardProps) {
  return (
    <Link
      href={href}
      className="flex h-[80px] w-full items-center justify-between rounded-[12px] border border-primary bg-white px-[20px] transition-colors hover:bg-orange-50"
    >
      <div className="flex items-center justify-center">
        <FaQuran className="text-[32px] text-primary" />
      </div>

      <span className="text-[16px] font-bold text-dark">
        {title}
      </span>

      <div className="flex items-center justify-center">
        <CiPlay1 className="text-[32px] text-primary" />
      </div>
    </Link>
  );
}