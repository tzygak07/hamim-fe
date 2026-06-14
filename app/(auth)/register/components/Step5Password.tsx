import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Step5Password({ formData, setFormData }: any) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h1 className="mb-2 text-2xl font-bold text-primary">
        Buat kata sandi
      </h1>
      <p className="mb-4 text-sm leading-relaxed text-third">
        Pastikan kata sandi terdiri dari minimal huruf besar, kecil, dan satu angka
      </p>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          placeholder="Masukkan kata sandi disini"
          className="w-full rounded-full border border-third/40 py-4 pl-6 pr-14 text-sm text-dark outline-none transition-all placeholder:text-third focus:border-primary focus:ring-1 focus:ring-primary"
          autoFocus
        />
        
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-third transition-colors hover:text-dark"
        >
          {showPassword ? (
            <FiEyeOff className="text-xl" />
          ) : (
            <FiEye className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
}