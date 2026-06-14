import { BsExclamationLg } from "react-icons/bs";

interface KonfirmasiKembaliModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function KonfirmasiKembaliModal({ onClose, onConfirm }: KonfirmasiKembaliModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm">

      <div className="animate-in zoom-in-95 duration-300 w-full max-w-sm rounded-[32px] bg-white p-6 text-center shadow-2xl">

        <div className="mx-auto mb-6 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#FFCC00] text-white shadow-sm">
          <BsExclamationLg className="text-5xl" />
        </div>

        <h2 className="mb-3 text-xl font-bold text-dark">
          Apakah Anda Yakin Akan Kembali?
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-third">
          Proses ubah kata sandi Anda belum berhasil. Dengan kembali, Anda akan diminta ulang untuk verifikasi.
        </p>

        <div className="grid grid-cols-2 items-center gap-4">
          <button
            onClick={onClose}
            className="w-full py-3 font-bold text-primary transition-opacity hover:opacity-70"
          >
            Tidak
          </button>

          <button
            onClick={onConfirm}
            className="w-full rounded-full bg-[#FCD1B3] py-3 font-bold text-white transition-opacity hover:opacity-80"
          >
            Ya, Kembali
          </button>
        </div>

      </div>
    </div>
  );
}