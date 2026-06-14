import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "", disabled, ...props }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`w-full rounded-full py-4 font-semibold shadow-md transition-all duration-300 ${
        !disabled
          ? "bg-primary text-white active:scale-[0.98]"
          : "cursor-not-allowed bg-third/30 text-white"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
