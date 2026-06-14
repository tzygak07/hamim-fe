import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center bg-gradient-to-b from-[#FFE37E] to-primary overflow-hidden">
      <div className="flex h-56 w-56 items-center justify-center rounded-full bg-white/20">
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-xl">
          <Image
            src="/page-images/logo-hamim.png"
            alt="Logo Hamim"
            width={179}
            height={179}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}