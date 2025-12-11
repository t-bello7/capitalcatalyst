import Image from "next/image";

import { SignUpForm } from "@/components/sign-up-form";
import Illustration from "@/assets/images/cryptocurrency.png";

export default function Page() {
  return (
    <div className="min-h-svh bg-[#eef2fb] text-[#1f2435]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 lg:flex-row lg:items-center lg:gap-14">
        <div className="flex flex-1 items-center justify-center rounded-[32px] bg-gradient-to-br from-[#f5f7ff] via-[#eef2fb] to-[#e6eafb] p-8 shadow-[0_40px_120px_-80px_rgba(41,86,227,0.45)]">
          <Image
            src={Illustration}
            alt="Secure signup illustration"
            className="h-auto w-full max-w-xl"
            priority
          />
        </div>
        <div className="flex-1">
          <SignUpForm className="max-w-xl mx-auto" />
        </div>
      </div>
    </div>
  );
}
