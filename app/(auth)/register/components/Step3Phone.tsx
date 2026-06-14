import Input from "@/components/ui/Input";

export default function Step3Phone({ formData, setFormData }: any) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, phone: value });
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h1 className="mb-2 text-2xl font-bold text-primary">
        Berapa nomor whatsapp Anda?
      </h1>
      <p className="mb-4 text-sm text-third">
        Pastikan nomor whatsapp Anda benar
      </p>

      <Input
        label="Nomor WhatsApp"
        type="tel"
        inputMode="numeric"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Masukkan nomor whatsapp disini"
        autoFocus
      />
    </div>
  );
}