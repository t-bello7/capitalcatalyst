"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, RefreshCcw } from "lucide-react";

const methods = [
  {
    name: "XRP",
    label: "Ripple",
    rate: "1 USD ≈ 0.00001154 BTC",
    instant: true,
  },
  {
    name: "USDT",
    label: "Tether",
    rate: "1 USD ≈ 1.00044920 USDT",
    instant: true,
  },
  {
    name: "Litecoin",
    label: "LTC",
    rate: "1 USD ≈ 0.01325732 LTC",
    instant: true,
  },
  {
    name: "Ethereum",
    label: "ETH",
    rate: "1 USD ≈ 0.00034335 ETH",
    instant: true,
  },
];

const recentActivity = [
  { amount: "$500", method: "USDT", time: "Today, 10:24 AM", status: "Completed" },
  { amount: "$1,200", method: "XRP", time: "Yesterday, 6:14 PM", status: "Completed" },
  { amount: "$300", method: "Litecoin", time: "Jun 11, 8:04 PM", status: "Pending" },
];

const DepositPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("XRP");

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
          <label className="flex flex-col gap-3 rounded-[24px] border border-[#0c0c0c]/10 bg-[#f7f8fa] p-5">
            <span className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Amount to deposit
            </span>
            <div className="flex flex-col gap-3 rounded-2xl border border-[#0c0c0c]/10 bg-white px-4 py-3 text-sm font-semibold shadow-inner shadow-black/5 focus-within:ring-2 focus-within:ring-[#0c0c0c]">
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border-none bg-transparent text-lg placeholder:text-[#b1b6c4] focus:outline-none"
              />
              <div className="flex items-center justify-between text-xs text-[#7d838d]">
                <span>Min: $30</span>
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

        <Button className="mt-8 w-full rounded-2xl bg-[#0c0c0c] py-5 text-base font-semibold text-white hover:bg-[#111]">
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
    </div>
  );
};

export default DepositPage;
