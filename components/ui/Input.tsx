"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="mb-4 relative">
      <label className="mb-2 block text-sm font-medium text-dark">
        {label}
      </label>
      <input
        className="w-full rounded-full border border-third/40 px-6 py-4 text-sm text-dark outline-none transition-all placeholder:text-third focus:border-primary focus:ring-1 focus:ring-primary"
        {...props}
      />
    </div>
  );
}