"use client";

interface AcaraTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function AcaraTabs({ activeTab, setActiveTab }: AcaraTabsProps) {
  const tabs = ["Semua", "Sedang Berlangsung", "Selesai"];

  return (
    <div className="no-scrollbar mx-auto mt-[24px] flex w-full max-w-[412px] overflow-x-auto px-[19px]">
      <div className="flex w-max gap-[14px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`shrink-0 whitespace-nowrap rounded-[8px] px-[16px] py-[12px] transition-all ${
              activeTab === tab
                ? "bg-primary text-[14px] font-bold text-white shadow-sm"
                : "bg-third/10 text-[14px] font-normal text-third hover:bg-third/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}