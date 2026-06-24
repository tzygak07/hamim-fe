"use client";

interface KursusTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function KursusTabs({ activeTab, setActiveTab }: KursusTabsProps) {
  const tabs = ["Semua", "Kelas Saya"];

  return (
    <div className="flex w-full gap-[14px]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`rounded-lg px-[16px] py-[12px] transition-colors ${
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