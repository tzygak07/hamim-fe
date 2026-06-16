"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

interface DonasiBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonasiBottomSheet({ isOpen, onClose }: DonasiBottomSheetProps) {
  const [customAmount, setCustomAmount] = useState("");
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(isOpen);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartYRef = useRef(0);
  const dragLastYRef = useRef(0);
  const dragStartTimeRef = useRef(0);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setDragOffset(0);
      const timeoutId = window.setTimeout(() => setIsVisible(true), 50);
      return () => window.clearTimeout(timeoutId);
    }

    setIsVisible(false);
    setIsDragging(false);
    setDragOffset(0);

    const timeoutId = window.setTimeout(() => {
      setIsMounted(false);
    }, 700);

    return () => window.clearTimeout(timeoutId);
  }, [isOpen]);

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    setIsDragging(true);
    dragStartYRef.current = event.clientY;
    dragLastYRef.current = event.clientY;
    dragStartTimeRef.current = Date.now();
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!isDragging) return;

    const nextOffset = Math.max(0, event.clientY - dragStartYRef.current);
    dragLastYRef.current = event.clientY;
    setDragOffset(nextOffset);
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (!isDragging) return;

    event.currentTarget.releasePointerCapture(event.pointerId);
    setIsDragging(false);

    const elapsed = Math.max(Date.now() - dragStartTimeRef.current, 1);
    const distance = dragLastYRef.current - dragStartYRef.current;
    const velocity = distance / elapsed;
    const shouldClose = dragOffset > 120 || velocity > 0.7;

    if (shouldClose) {
      onClose();
      return;
    }

    setDragOffset(0);
  };

  if (!isMounted) return null;

  const presets = [
    { id: 1, emoji: "😊", amount: "Rp15.000" },
    { id: 2, emoji: "😀", amount: "Rp15.000" },
    { id: 3, emoji: "😍", amount: "Rp25.000" },
    { id: 4, emoji: "😎", amount: "Rp50.000" },
  ];

  return (
    <div
      className={`fixed inset-0 z-60 flex flex-col justify-end bg-black/40 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className={`relative mx-auto flex w-full max-w-103 flex-col rounded-t-3xl bg-white px-5 pb-6 pt-3 shadow-[0_-20px_40px_-24px_rgba(0,0,0,0.25)] will-change-transform ${
          isDragging ? "transition-none" : "transition-[transform] duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
        }`}
        style={{
          transform: isVisible
            ? `translateY(${dragOffset}px)`
            : "translateY(100%)",
        }}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <button
          type="button"
          aria-label="Geser untuk menutup"
          className="mx-auto mb-5 h-1 w-10 rounded-full bg-[#E0E0E0]"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        />

        <div className="flex flex-col gap-2">
          {presets.map((item) => (
            <button
              type="button"
              key={item.id}
              className="flex items-center gap-3 rounded-lg border border-third/10 px-4 py-3 text-left transition-colors hover:border-primary hover:bg-primary/5 active:scale-[0.98]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE8D6] text-[18px]">
                {item.emoji}
              </div>
              <span className="text-[14px] font-bold text-dark">{item.amount}</span>
            </button>
          ))}
        </div>

        <div className="mt-2 flex flex-col rounded-lg border border-third/10 p-4">
          <span className="text-[14px] font-medium text-dark">
            Nominal Donasi Lainnya
          </span>
          
          <div className="mt-3 flex items-center justify-between rounded-lg bg-[#EBEBEB] px-4 py-3">
            <span className="text-[16px] font-bold text-dark">Rp</span>
            <input
              type="number"
              placeholder="0"
              className="w-full bg-transparent text-right text-[16px] font-bold text-dark outline-none"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          </div>
          
          <span className="mt-2 text-[12px] font-normal text-third">
            Minimal donasi sebesar Rp10.000
          </span>
        </div>

        <button
          type="button"
          className="mt-6 flex h-10 w-full items-center justify-center rounded-full bg-[#BDBDBD] px-4 py-3 text-[14px] font-bold text-white transition-opacity active:scale-[0.98]"
        >
          Lanjut Pembayaran
        </button>
      </div>
    </div>
  );
}