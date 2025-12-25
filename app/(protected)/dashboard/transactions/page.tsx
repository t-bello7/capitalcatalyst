"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Transaction = {
  amount: string;
  asset: string;
  timestamp: string;
  status: "Completed" | "Pending";
  category: "Deposit" | "Withdrawal";
};

const transactions: Transaction[] = [
  {
    amount: "$500",
    asset: "USDT",
    timestamp: "Today, 10:24 AM",
    status: "Completed",
    category: "Deposit",
  },
  {
    amount: "$1,200",
    asset: "XRP",
    timestamp: "Yesterday, 6:14 PM",
    status: "Completed",
    category: "Deposit",
  },
  {
    amount: "$300",
    asset: "Litecoin",
    timestamp: "Jun 11, 8:04 PM",
    status: "Pending",
    category: "Deposit",
  },
  {
    amount: "$650",
    asset: "USDT",
    timestamp: "Jun 7, 4:55 PM",
    status: "Completed",
    category: "Withdrawal",
  },
  {
    amount: "$320",
    asset: "Bitcoin",
    timestamp: "Jun 6, 9:31 AM",
    status: "Pending",
    category: "Withdrawal",
  },
];

const tabs = ["Deposit", "Withdrawal"] as const;

const TransactionsPage = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Deposit");

  const filteredItems = useMemo(
    () => transactions.filter((tx) => tx.category === activeTab),
    [activeTab],
  );

  return (
    <div className="space-y-8 text-[#0c0c0c]">
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.8)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Transactions
            </p>
            <h1 className="mt-2 text-3xl font-semibold">
              Review your account history
            </h1>
            <p className="mt-2 text-sm text-[#7d838d]">
              Monitor deposits and withdrawals in one organized view.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 rounded-[28px] border border-black/5 bg-[#f7f8fa] p-2 text-sm font-semibold">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 rounded-2xl px-4 py-3 transition",
                activeTab === tab
                  ? "bg-white text-[#0c0c0c] shadow-sm"
                  : "text-[#7d838d] hover:text-[#0c0c0c]",
              )}
            >
              {tab}s
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] border border-black/5 bg-white/90 p-4">
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div
                key={`${item.amount}-${item.timestamp}`}
                className="flex flex-wrap items-center justify-between gap-3 rounded-[28px] border border-black/5 bg-[#f7f8fa] px-5 py-4 shadow-inner shadow-black/5"
              >
                <div>
                  <p className="text-2xl font-semibold">{item.amount}</p>
                  <p className="text-sm text-[#7d838d]">{item.asset}</p>
                </div>
                <div className="text-right text-xs text-[#7d838d]">
                  <p>{item.timestamp}</p>
                  <span
                    className={cn(
                      "mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold",
                      item.status === "Completed"
                        ? "bg-[#e8f8ec] text-emerald-600"
                        : "bg-[#fff4de] text-[#d28a00]",
                    )}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
