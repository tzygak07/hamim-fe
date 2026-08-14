import BackButton from "@/components/ui/BackButton";
import DaftarAyat from "./components/DaftarAyat";

export default function DaftarAyatPage({
  params,
}: {
  params: { id_juz: string; id_surat: string };
}) {
  return (
    <main className="flex min-h-[100dvh] flex-col overflow-x-hidden bg-white font-sans text-dark">
      {/* Sesuai desain, title-nya adalah Hafalan Yuk! */}
      <BackButton title="Hafalan Yuk!" />
      <div className="w-full border-b border-third/10" />
      
      {/* Melempar parameter ke komponen DaftarAyat */}
      <DaftarAyat idJuz={params.id_juz} idSurat={params.id_surat} />
    </main>
  );
}