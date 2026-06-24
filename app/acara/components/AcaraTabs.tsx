"use client";

interface AcaraTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function AcaraTabs({ activeTab, setActiveTab }: AcaraTabsProps) {
  const tabs = ["Semua", "Sedang Berlangsung", "Selesai"];

  return (
    <div className="flex w-full gap-[8px] px-6 mt-[24px] overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`rounded-full px-[16px] py-[8px] text-[14px] transition-all shrink-0 ${
            activeTab === tab
              ? "bg-primary font-bold text-white shadow-sm"
              : "bg-third/10 font-normal text-third hover:bg-third/20"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}