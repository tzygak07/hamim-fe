import BackButton from "@/components/ui/BackButton";
import DaftarSurat from "./components/DaftarSurat";

export default function DaftarSuratPage({ params }: { params: { id_juz: string } }) {
  return (
    <main className="flex min-h-[100dvh] flex-col overflow-x-hidden bg-white font-sans text-dark">
      <BackButton title="Daftar Surat" />
      
      {/* 
        Kita melempar id_juz ke komponen DaftarSurat agar nantinya 
        bisa digunakan untuk fetch API spesifik per Juz 
      */}
      <DaftarSurat idJuz={params.id_juz} />
    </main>
  );
}