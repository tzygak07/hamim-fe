import { useRouter } from "next/navigation";
import { IoMdCheckmark } from "react-icons/io";
import Button from "@/components/ui/Button";

export default function VerifikasiBerhasilModal() {
  const router = useRouter();

  const handleUbahSandi = () => {
    router.push("/buat-sandi-baru");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm">

      <div className="animate-in zoom-in-95 duration-300 w-full max-w-sm rounded-[32px] bg-white p-6 text-center shadow-2xl">

        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white">
          <IoMdCheckmark className="text-7xl" />
        </div>

        <h2 className="mb-2 text-2xl font-bold text-dark">Berhasil</h2>
        <p className="mb-6 text-sm leading-relaxed text-third">
          Silahkan ubah kata sandi Anda sekarang, pastikan kata sandi mudah diingat dan sesuai dengan ketentuan.
        </p>

        <Button onClick={handleUbahSandi}>
          Ubah Kata Sandi
        </Button>
      </div>
    </div>
  );
}