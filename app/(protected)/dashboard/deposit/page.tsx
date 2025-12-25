"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, RefreshCcw, Copy, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    amount: 1000,
    roi: "20%",
    duration: "30 days",
    support: "Email support",
  },
  {
    name: "Growth",
    amount: 3000,
    roi: "30%",
    duration: "30 days",
    support: "Market insights",
  },
  {
    name: "Premium",
    amount: 5000,
    roi: "45%",
    duration: "30 days",
    support: "Priority processing",
  },
  {
    name: "VIP",
    amount: 10000,
    roi: "65%",
    duration: "30 days",
    support: "24/7 support",
  },
];

const methods = [
  {
    name: "XRP",
    label: "Ripple",
    rate: "1 USD ≈ 0.00001154 BTC",
    instant: true,
    address: "rP1coskLZJ1F8P2x6A8eQwqjPQ9x6o7i9",
  },
  {
    name: "USDT",
    label: "Tether",
    rate: "1 USD ≈ 1.00044920 USDT",
    instant: true,
    address: "0x9dB8F5C4E0a7E1cA3b0dA6e5d8A2f9E7c0b4a1f2",
  },
  {
    name: "Litecoin",
    label: "LTC",
    rate: "1 USD ≈ 0.01325732 LTC",
    instant: true,
    address: "LZYsF4o4Uxw2oK8D5wE1A6kq6Hc2v92eMz",
  },
  {
    name: "Ethereum",
    label: "ETH",
    rate: "1 USD ≈ 0.00034335 ETH",
    instant: true,
    address: "0x5F2A1e9b5E0fB9f4a90D6C3b2c0aE8b7B1d9c3E2",
  },
];

const recentActivity = [
  { amount: "$500", method: "USDT", time: "Today, 10:24 AM", status: "Completed" },
  { amount: "$1,200", method: "XRP", time: "Yesterday, 6:14 PM", status: "Completed" },
  { amount: "$300", method: "Litecoin", time: "Jun 11, 8:04 PM", status: "Pending" },
];

const DepositPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]?.name ?? "");
  const [amount, setAmount] = useState(
    plans[0] ? String(plans[0].amount) : "",
  );
  const [selectedMethod, setSelectedMethod] = useState(methods[0]?.name ?? "");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const formattedAmount = useMemo(
    () =>
      amount
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(Number(amount))
        : "",
    [amount],
  );
  const selectedPayment = methods.find(
    (method) => method.name === selectedMethod,
  );
  const paymentAddress = selectedPayment?.address ?? "";
  const qrCodeUrl = useMemo(() => {
    if (!paymentAddress) return "";
    const encoded = encodeURIComponent(paymentAddress);
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encoded}`;
  }, [paymentAddress]);

  const handleCopy = async () => {
    if (!paymentAddress) return;
    await navigator.clipboard.writeText(paymentAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-8 text-[#0c0c0c]">
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.8)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Make a deposit
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Add funds securely</h1>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#0c0c0c] hover:-translate-y-0.5">
            <RefreshCcw className="h-4 w-4" />
            Transaction history
          </button>
        </div>

        <div className="mt-8 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Investment plans
            </p>
            <div className="mt-3 grid max-h-[50vh] grid-cols-2 gap-3 overflow-auto sm:gap-4 md:max-h-none md:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => {
                const isActive = selectedPlan === plan.name;
                return (
                  <button
                    key={plan.name}
                    onClick={() => {
                      setSelectedPlan(plan.name);
                      setAmount(String(plan.amount));
                    }}
                    className={cn(
                      "flex flex-col gap-2 rounded-[24px] border p-3 text-left shadow-[0_30px_80px_-60px_rgba(0,0,0,0.85)] transition md:gap-3 md:p-4",
                      isActive
                        ? "border-[#0c0c0c] bg-[#fdfef5]"
                        : "border-black/5 bg-white/90 hover:border-[#0c0c0c]/80",
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7d838d]">
                        {plan.name}
                      </p>
                    </div>
                    <div className="hidden text-3xl font-semibold md:block">
                      {plan.roi}
                      <span className="ml-2 text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                        ROI
                      </span>
                    </div>
                    <p className="text-base font-semibold md:text-lg">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(plan.amount)}
                    </p>
                    <div className="hidden text-xs text-[#7d838d] md:block">
                      <p className="mt-1">Duration: {plan.duration}</p>
                      <p className="mt-1">Support: {plan.support}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <label className="flex flex-col gap-3 rounded-[24px] border border-[#0c0c0c]/10 bg-[#f7f8fa] p-5">
            <span className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Amount to deposit
            </span>
            <div className="flex flex-col gap-3 rounded-2xl border border-[#0c0c0c]/10 bg-white px-4 py-3 text-sm font-semibold shadow-inner shadow-black/5 focus-within:ring-2 focus-within:ring-[#0c0c0c]">
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                className="w-full border-none bg-transparent text-lg placeholder:text-[#b1b6c4] focus:outline-none"
              />
              <div className="flex items-center justify-between text-xs text-[#7d838d]">
                <span>
                  {formattedAmount ? `Selected: ${formattedAmount}` : "Min: $30"}
                </span>
                <span>No fees applied</span>
              </div>
            </div>
          </label>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Select payment method
            </p>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {methods.map((method) => {
                const isActive = selectedMethod === method.name;
                return (
                  <button
                    key={method.name}
                    onClick={() => setSelectedMethod(method.name)}
                    className={cn(
                      "flex flex-col gap-4 rounded-[24px] border px-4 py-4 text-left shadow-[0_30px_80px_-60px_rgba(0,0,0,0.85)] transition",
                      isActive
                        ? "border-[#0c0c0c] bg-[#fdfef5]"
                        : "border-black/5 bg-white/90 hover:border-[#0c0c0c]/80",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-semibold">{method.name}</p>
                        <p className="text-xs text-[#7d838d]">{method.label}</p>
                      </div>
                      <span
                        className={cn(
                          "h-5 w-5 rounded-full border-2",
                          isActive ? "border-[#0c0c0c]" : "border-black/10",
                        )}
                      >
                        <span
                          className={cn(
                            "block h-full w-full rounded-full transition",
                            isActive ? "bg-[#0c0c0c]" : "bg-transparent",
                          )}
                        />
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#7d838d]">
                      <span className="inline-flex items-center gap-2">
                        ⚡ Instant processing
                      </span>
                      <span>{method.rate}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <Button
          className="mt-8 w-full rounded-2xl bg-[#0c0c0c] py-5 text-base font-semibold text-white hover:bg-[#111]"
          onClick={() => setIsModalOpen(true)}
        >
          Continue to payment <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.8)]">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Recent activity
            </p>
            <h3 className="mt-2 text-2xl font-semibold">Latest deposits</h3>
          </div>
          <button className="text-sm font-semibold text-[#0c0c0c] underline-offset-4 hover:underline">
            View all
          </button>
        </div>

        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={`${activity.amount}-${activity.method}`}
              className="flex items-center justify-between rounded-[24px] border border-black/5 bg-[#f7f8fa] px-4 py-4 text-sm"
            >
              <div>
                <p className="text-base font-semibold">{activity.amount}</p>
                <p className="text-xs text-[#7d838d]">{activity.method}</p>
              </div>
              <div className="flex flex-col items-end text-xs text-[#7d838d]">
                <span>{activity.time}</span>
                <span
                  className={cn(
                    "mt-1 rounded-full px-3 py-1 font-semibold",
                    activity.status === "Completed"
                      ? "bg-[#e8f8ec] text-emerald-600"
                      : "bg-[#fff4de] text-[#d28a00]",
                  )}
                >
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
          <div className="w-full max-w-md rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.6)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                  Payment details
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Send {formattedAmount || "payment"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full border border-black/10 p-2 text-[#0c0c0c] transition hover:-translate-y-0.5 hover:bg-[#f7f8fa]"
                aria-label="Close payment modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 flex flex-col items-center gap-4 rounded-[24px] border border-black/5 bg-[#f7f8fa] p-5">
              <div className="rounded-[18px] border border-black/10 bg-white p-3 shadow-inner shadow-black/5">
                {qrCodeUrl ? (
                  <img
                    src={qrCodeUrl}
                    alt={`${selectedMethod} QR code`}
                    className="h-48 w-48 rounded-xl"
                  />
                ) : (
                  <div className="flex h-48 w-48 items-center justify-center rounded-xl bg-[#f0f2f5] text-sm text-[#7d838d]">
                    QR code unavailable
                  </div>
                )}
              </div>
              <div className="w-full">
                <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                  {selectedMethod} address
                </p>
                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-3 py-3 text-sm font-semibold text-[#0c0c0c] shadow-inner shadow-black/5">
                  <span className="truncate">{paymentAddress || "—"}</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="ml-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f7f8fa] px-3 py-2 text-xs font-semibold text-[#0c0c0c] transition hover:-translate-y-0.5"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            <Button
              className="mt-6 w-full rounded-2xl bg-[#0c0c0c] py-5 text-base font-semibold text-white hover:bg-[#111]"
              onClick={() => setIsModalOpen(false)}
            >
              Payment done
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DepositPage;
