"use client";

export default function HeaderInfo() {
  const progress = 70;

  return (
    <div className="flex flex-col pt-[16px]">
      <div className="w-max rounded-full bg-[#FEF3EB] px-[12px] py-[8px]">
        <span className="text-[10px] font-normal text-primary">25 hari lagi</span>
      </div>
      
      <h1 className="mt-[16px] text-[20px] font-bold leading-snug text-dark">
        Donasi Renovasi Masjid Al Jabbar
      </h1>
      
      <div className="mt-[16px] h-[6px] w-full overflow-hidden rounded-full bg-third/20">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-[16px] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[12px] font-normal text-third">Target</span>
          <span className="mt-[4px] text-[14px] font-bold text-primary">
            Rp250.000.000
          </span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-[12px] font-normal text-third">Terkumpul</span>
          <span className="mt-[4px] text-[14px] font-bold text-primary">
            Rp175.000.000
          </span>
        </div>
      </div>
    </div>
  );
}