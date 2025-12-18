"use client";

export default function Loading() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-gradient-to-b from-[#f9fafb] via-[#f4f7fb] to-[#eef2f6] text-[#0c0c0c]">
      <div className="relative flex items-center justify-center">
        <div className="h-20 w-20 rounded-full border-4 border-[#dfff3f] border-t-transparent animate-spin-slow" />
        <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-[#0c0c0c] text-lg font-semibold text-white shadow-[0_18px_40px_-26px_rgba(0,0,0,0.55)]">
          CC
        </div>
      </div>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 1.2s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
