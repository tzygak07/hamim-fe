import { useRouter } from "next/navigation";
import { IoMdCheckmark } from "react-icons/io";

export default function SuccessModal() {
  const router = useRouter();

  const handleBeranda = () => {
    router.push("/beranda"); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm">
      <div className="animate-in zoom-in-95 duration-300 w-full max-w-sm rounded-[32px] bg-white px-6 py-6 text-center shadow-2xl">
        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white">
          <IoMdCheckmark className="text-7xl" />
        </div>

        <h2 className="mb-2 text-2xl font-bold text-[#333333]">Selamat!</h2>
        <p className="mb-6 text-sm leading-relaxed text-[#757575]">
          Anda berhasil melakukan pendaftaran aplikasi Hamim. Kini Anda dapat menikmati semua fitur yang Ada di Hamim.
        </p>

        <button
          onClick={handleBeranda}
          className="w-full rounded-full bg-primary py-4 font-semibold text-white shadow-md transition-transform active:scale-[0.98]"
        >
          Lihat Beranda
        </button>
      </div>
    </div>
  );
}