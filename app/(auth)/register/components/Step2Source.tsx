const sourceOptions = ["Sosial Media", "Iklan", "Teman", "Keluarga", "Google"];

export default function Step2Source({ formData, setFormData }: any) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h1 className="mb-4 text-2xl font-bold leading-snug text-primary">
        Darimana Anda mengetahui Aplikasi Hamim?
      </h1>
      <p className="mb-4 text-sm text-third">
        Pilih salah satu dari opsi berikut
      </p>

      <div className="flex flex-col gap-4">
        {sourceOptions.map((option) => (
          <button
            key={option}
            onClick={() => setFormData({ ...formData, source: option })}
            className={`w-full rounded-xl border px-6 py-4 text-left text-sm font-medium transition-all duration-200 ${
              formData.source === option
                ? "border-primary bg-primary text-white shadow-md"
                : "border-third/30 bg-white text-dark hover:border-primary/50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}