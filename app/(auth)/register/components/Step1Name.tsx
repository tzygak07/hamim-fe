import Input from "@/components/ui/Input";

export default function Step1Name({ formData, setFormData }: any) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h1 className="mb-2 text-2xl font-bold text-primary">
        Siapa nama Anda?
      </h1>
      <p className="mb-4 text-sm text-third">
        Pastikan nama lengkap sesuai dengan KTP Anda
      </p>

      <Input
        label="Nama Lengkap"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Masukkan nama lengkap kamu disini"
        autoFocus
      />
    </div>
  );
}