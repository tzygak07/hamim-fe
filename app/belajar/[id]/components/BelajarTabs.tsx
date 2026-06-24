"use client";

interface BelajarTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BelajarTabs({ activeTab, setActiveTab }: BelajarTabsProps) {
  const tabs = ["Video", "Deskripsi"];

  return (
    <div className="flex w-full gap-[14px]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex flex-1 items-center justify-center rounded-lg px-[16px] py-[12px] transition-colors ${
            activeTab === tab
              ? "bg-primary text-[14px] font-bold text-white"
              : "bg-third/10 text-[14px] font-normal text-third hover:bg-third/20"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}