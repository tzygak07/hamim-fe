import Input from "@/components/ui/Input";

export default function Step4Email({ formData, setFormData }: any) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h1 className="mb-2 text-2xl font-bold text-primary">
        Apa alamat email Anda?
      </h1>
      <p className="mb-4 text-sm text-third">
        Pastikan email telah terdaftar
      </p>

      <Input
        label="Alamat Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Masukkan alamat email disini"
        autoFocus
      />
    </div>
  );
}