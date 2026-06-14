import Image from "next/image";
import React from "react";

interface EmptyStateProps {
  imageSrc?: string;
  title: string;
  description?: React.ReactNode;
  className?: string;
}

export default function EmptyState({
  imageSrc = "/order-images/notFound.png",
  title,
  description,
  className = "mt-[199px]",
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center px-6 text-center ${className}`}>
      <div className="relative h-24 w-24">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="object-contain"
        />
      </div>

      <h3 className="mt-[27px] text-[16px] font-bold text-primary">
        {title}
      </h3>

      {description && (
        <p className="mt-[8px] text-[16px] leading-relaxed text-third">
          {description}
        </p>
      )}
    </div>
  );
}