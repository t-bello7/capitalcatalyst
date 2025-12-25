"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Shield,
  Clock3,
  Wallet,
  ArrowRight,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const methods = [
  { label: "Bank transfer", desc: "2-3 business days" },
  { label: "USDT (Tether)", desc: "Instant processing" },
  { label: "XRP (Ripple)", desc: "Instant processing" },
  { label: "Bitcoin", desc: "Network dependent" },
];

const highlights = [
  { title: "Secure processing", icon: Shield, copy: "Enterprise-grade protection keeps every withdrawal encrypted and protected." },
  { title: "Fast withdrawals", icon: Clock3, copy: "Priority routing ensures your funds land fast, regardless of network load." },
];

const WithdrawPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(methods[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
  });
  const [cryptoAddress, setCryptoAddress] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const withdrawableBalance = "$12,450.00";
  const isBankTransfer = useMemo(
    () => selectedMethod.label === "Bank transfer",
    [selectedMethod.label],
  );

  return (
    <div className="space-y-8 text-[#0c0c0c]">
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.8)]">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#7d838d]">
            Withdraw your funds
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Move capital securely</h1>
          <p className="mt-2 text-sm text-[#7d838d]">
            Select your preferred withdrawal method to continue.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <div className="relative">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-[24px] border border-black/5 bg-[#f7f8fa] px-5 py-4 text-left text-sm font-semibold shadow-inner shadow-black/5"
            >
              <div>
                <p className="text-base font-semibold">{selectedMethod.label}</p>
                <p className="text-xs text-[#7d838d]">{selectedMethod.desc}</p>
              </div>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-[#7d838d] transition-transform",
                  open && "rotate-180",
                )}
              />
            </button>
            {open && (
              <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-10 rounded-[24px] border border-black/5 bg-white p-3 shadow-[0_25px_80px_-50px_rgba(0,0,0,0.7)]">
                {methods.map((method) => (
                  <button
                    key={method.label}
                    onClick={() => {
                      setSelectedMethod(method);
                      setOpen(false);
                    }}
                    className="w-full rounded-2xl px-3 py-3 text-left text-sm font-semibold text-[#0c0c0c] hover:bg-[#f7f8fa]"
                  >
                    <p>{method.label}</p>
                    <p className="text-xs text-[#7d838d]">{method.desc}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-[32px] border border-black/5 bg-[#0c0c0c] p-6 text-white shadow-[0_35px_90px_-70px_rgba(0,0,0,0.9)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <Wallet className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-center text-2xl font-semibold">
              Safe and secure withdrawals
            </h2>
            <p className="mt-3 text-center text-sm text-white/75">
              Choose your preferred withdrawal method. We support multiple
              cryptocurrencies and payout options so your capital is always in
              motion.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <p className="mt-3 font-semibold">{item.title}</p>
                  <p className="mt-2 text-xs text-white/70">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button
          className="mt-8 w-full rounded-2xl bg-[#0c0c0c] py-5 text-base font-semibold text-white hover:bg-[#111]"
          onClick={() => setIsModalOpen(true)}
        >
          Proceed to withdraw <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
          <div className="w-full max-w-lg rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.6)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                  Withdraw via {selectedMethod.label}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Enter payout details
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full border border-black/10 p-2 text-[#0c0c0c] transition hover:-translate-y-0.5 hover:bg-[#f7f8fa]"
                aria-label="Close withdrawal modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <label className="flex flex-col gap-2 text-sm font-semibold text-[#0c0c0c]">
                Amount to withdraw
                <input
                  value={withdrawAmount}
                  onChange={(event) => setWithdrawAmount(event.target.value)}
                  className="rounded-2xl border border-black/10 bg-[#f7f8fa] px-4 py-3 text-sm shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c]"
                  placeholder="Enter amount"
                  type="number"
                />
                <span className="text-xs font-normal text-[#7d838d]">
                  Withdrawable balance: {withdrawableBalance}
                </span>
              </label>
              {isBankTransfer ? (
                <>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-[#0c0c0c]">
                    Account name
                    <input
                      value={bankDetails.accountName}
                      onChange={(event) =>
                        setBankDetails((prev) => ({
                          ...prev,
                          accountName: event.target.value,
                        }))
                      }
                      className="rounded-2xl border border-black/10 bg-[#f7f8fa] px-4 py-3 text-sm shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c]"
                      placeholder="Full name on account"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-[#0c0c0c]">
                    Bank name
                    <input
                      value={bankDetails.bankName}
                      onChange={(event) =>
                        setBankDetails((prev) => ({
                          ...prev,
                          bankName: event.target.value,
                        }))
                      }
                      className="rounded-2xl border border-black/10 bg-[#f7f8fa] px-4 py-3 text-sm shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c]"
                      placeholder="Bank"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-[#0c0c0c]">
                    Account number
                    <input
                      value={bankDetails.accountNumber}
                      onChange={(event) =>
                        setBankDetails((prev) => ({
                          ...prev,
                          accountNumber: event.target.value,
                        }))
                      }
                      className="rounded-2xl border border-black/10 bg-[#f7f8fa] px-4 py-3 text-sm shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c]"
                      placeholder="Account number"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-[#0c0c0c]">
                    Routing number
                    <input
                      value={bankDetails.routingNumber}
                      onChange={(event) =>
                        setBankDetails((prev) => ({
                          ...prev,
                          routingNumber: event.target.value,
                        }))
                      }
                      className="rounded-2xl border border-black/10 bg-[#f7f8fa] px-4 py-3 text-sm shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c]"
                      placeholder="Routing number"
                    />
                  </label>
                </>
              ) : (
                <label className="flex flex-col gap-2 text-sm font-semibold text-[#0c0c0c]">
                  Wallet address
                  <input
                    value={cryptoAddress}
                    onChange={(event) => setCryptoAddress(event.target.value)}
                    className="rounded-2xl border border-black/10 bg-[#f7f8fa] px-4 py-3 text-sm shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c]"
                    placeholder="Paste wallet address"
                  />
                </label>
              )}
            </div>

            <Button className="mt-6 w-full rounded-2xl bg-[#0c0c0c] py-5 text-base font-semibold text-white hover:bg-[#111]">
              Submit withdrawal request
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WithdrawPage;
