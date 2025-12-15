import Image from "next/image";
import { SignUpForm } from "@/components/sign-up-form";
import Illustration from "@/assets/images/cryptocurrency.png";

export default function Page() {
  return (
    <div className="min-h-svh bg-gradient-to-b from-[#f9fafb] via-[#f4f7fb] to-[#eef2f6] text-[#0c0c0c]">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0c0c0c] text-base font-semibold uppercase tracking-tight text-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.45)]">
              CC
            </span>
            <div>
              <p className="text-lg font-semibold">Capital Catalyst</p>
              <p className="text-sm text-[#4b4f5c]">Invest for the future</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#4b4f5c]">
            <span className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] shadow-[0_20px_50px_-34px_rgba(0,0,0,0.35)] sm:inline-flex">
              Trusted by <span className="text-[#0c0c0c]">100k+</span>
            </span>
          </div>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="hidden md:block relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#ecff60] via-[#dfff3f] to-[#c5f63b] p-8 text-[#0c0c0c] shadow-[0_60px_120px_-70px_rgba(132,146,12,0.6)]">
            <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.42),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.38),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.35),transparent_40%)]" />
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0c0c0c] shadow-sm">
                New wealth stack
              </div>
              <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl">
                Invest for the{" "}
                <span className="underline decoration-[#0c0c0c] decoration-[8px] underline-offset-[14px]">
                  Future
                </span>
              </h1>
              <p className="max-w-xl text-lg text-[#1f2a25]">
                Modern insights, instant execution, and all your accounts in one clear command center.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0c0c0c] px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-[#dfff3f]" />
                  Live market feed
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#0c0c0c]">
                  Secure onboarding
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0c0c0c]/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[#0c0c0c]">
                  Zero hidden fees
                </span>
              </div>
           
            </div>
            <div className="relative mt-12 flex justify-end">
              <div className="relative w-full max-w-[380px] rotate-[-4deg]">
                <div className="absolute -left-6 -top-10 h-32 w-32 rounded-full bg-white/50 blur-3xl" />
                <div className="absolute -right-10 bottom-16 h-28 w-28 rounded-full bg-[#0c0c0c]/10 blur-3xl" />
                <div className="overflow-hidden rounded-[32px] bg-white/90 shadow-[0_35px_80px_-50px_rgba(0,0,0,0.7)] backdrop-blur">
                  <div className="border-b border-black/5 bg-[#0c0c0c] px-6 py-4 text-sm font-semibold text-white">
                    Market pulse
                  </div>
                  <div className="p-5">
                    <Image
                      src={Illustration}
                      alt="Wealth dashboard preview"
                      className="h-auto w-full object-contain"
                      priority
                    />
                    <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#0c0c0c] px-4 py-3 text-white">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                          Balance
                        </p>
                        <p className="text-2xl font-semibold">$16,988.31</p>
                      </div>
                      <span className="rounded-full bg-[#dfff3f] px-3 py-1 text-xs font-semibold text-[#0c0c0c] shadow">
                        +3.24%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-stretch">
            <SignUpForm className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
