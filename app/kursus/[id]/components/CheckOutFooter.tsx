"use client";

interface CheckoutFooterProps {
  price: string;
}

export default function CheckoutFooter({ price }: CheckoutFooterProps) {
  return (
    <div className="fixed bottom-0 z-50 mx-auto flex w-full max-w-[412px] items-center justify-between border-t border-third/10 bg-white px-[20px] py-[16px] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col justify-center">
        <span className="text-[12px] font-normal text-dark">Harga</span>
        <span className="mt-[2px] text-[20px] font-bold leading-none text-[#F2994A]">
          {price}
        </span>
      </div>

      <button className="ml-[24px] flex flex-1 items-center justify-center rounded-[120px] bg-primary p-[16px] transition-opacity hover:opacity-90 active:scale-[0.98]">
        <span className="text-[16px] font-bold leading-none text-white">Beli Sekarang</span>
      </button>
    </div>
  );
}