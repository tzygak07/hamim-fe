"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Button from "@/components/ui/Button";
import BackButton from "@/components/ui/BackButton";

import Step1Name from "./components/Step1Name";
import Step2Source from "./components/Step2Source";
import Step3Phone from "./components/Step3Phone";
import Step4Email from "./components/Step4Email";
import Step5Password from "./components/Step5Password";
import SuccessModal from "./components/SuccessModal";

export default function RegisterPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    source: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.push("/onboarding");
    }
  };

  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return !formData.name.trim();
      case 2:
        return !formData.source;
      case 3:
        return !formData.phone.trim();
      case 4:
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(formData.email);
      case 5:
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return !passwordRegex.test(formData.password);
      default:
        return true;
    }
  };

  return (
    <main className="flex min-h-[100dvh] flex-col bg-white font-sans text-dark relative">

      <BackButton onClick={handleBack} />

      <div className="flex flex-1 flex-col px-6 pt-6">
        {step === 1 && <Step1Name formData={formData} setFormData={setFormData} />}
        {step === 2 && <Step2Source formData={formData} setFormData={setFormData} />}
        {step === 3 && <Step3Phone formData={formData} setFormData={setFormData} />}
        {step === 4 && <Step4Email formData={formData} setFormData={setFormData} />}
        {step === 5 && <Step5Password formData={formData} setFormData={setFormData} />}
      </div>

      <div className="mt-auto flex w-full p-6 pb-12">
        <Button
          disabled={isNextDisabled()}
          onClick={handleNext}
          className="flex items-center justify-center gap-1"
        >
          {step === 5 ? "Daftar Sekarang" : "Selanjutnya"}

          {step !== 5 && (
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          )}
        </Button>
      </div>

      {showModal && <SuccessModal />}

    </main>
  );
}