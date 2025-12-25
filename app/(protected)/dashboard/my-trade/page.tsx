"use client";

import { useEffect, useState } from "react";
import { useRouter } from "nextjs-toploader/app";

type CopiedTrade = {
  id: string;
  trader: string;
  handle: string;
  market: string;
  status: "Active" | "Trailing" | "Paused";
  allocation: string;
  entry: string;
  current: string;
  pnl: string;
  roi: string;
  duration: string;
  riskLevel: "Low" | "Medium" | "High";
  avatarColor: string;
};

type SummaryStat = {
  label: string;
  value: string;
  helper: string;
};

type PositionHistory = {
  id: string;
  trader: string;
  market: string;
  side: "Long" | "Short";
  size: string;
  entry: string;
  exit: string;
  pnl: string;
  closedAt: string;
  status: "Closed" | "Partially Closed";
};

type TradeResponse = {
  summary: SummaryStat[];
  active: CopiedTrade[];
  history: PositionHistory[];
};

const depositedPlans = [
  { name: "Starter", amount: "$1,000", status: "Active" },
  { name: "Growth", amount: "$3,000", status: "Active" },
];

const mockTradeData: TradeResponse = {
  summary: [
    {
      label: "Active copy trades",
      value: "5 trades",
      helper: "Across 2 open copy traders",
    },
    {
      label: "Total Invested",
      value: "$42,800",
      helper: "Auto-rebalanced daily",
    },
    {
      label: "Unrealized Profit",
      value: "+$3,420",
      helper: "Last 24h +$420",
    },
    {
      label: "Win rate",
      value: "78.4%",
      helper: "30D performance",
    },
  ],
  active: [
    {
      id: "trade-1",
      trader: "Hannah Rivera",
      handle: "@crypto.hannah12",
      market: "BTC-USDT Perpetual",
      status: "Active",
      allocation: "$12,500",
      entry: "$62,140",
      current: "$64,820",
      pnl: "+$740",
      roi: "+5.9%",
      duration: "3d 4h",
      riskLevel: "Medium",
      avatarColor: "#0c0c0c",
    },
      {
      id: "trade-2",
      trader: "Hannah Rivera",
      handle: "@crypto.hannah12",
      market: "BTC-USDT Perpetual",
      status: "Active",
      allocation: "$12,500",
      entry: "$62,140",
      current: "$64,820",
      pnl: "+$740",
      roi: "+5.9%",
      duration: "3d 4h",
      riskLevel: "Medium",
      avatarColor: "#0c0c0c",
    },

  {
      id: "trade-3",
      trader: "Hannah Rivera",
      handle: "@crypto.hannah12",
      market: "BTC-USDT Perpetual",
      status: "Active",
      allocation: "$12,500",
      entry: "$62,140",
      current: "$64,820",
      pnl: "+$740",
      roi: "+5.9%",
      duration: "3d 4h",
      riskLevel: "Medium",
      avatarColor: "#0c0c0c",
    },    {
      id: "trade-4",
      trader: "Tony Bro",
      handle: "@tony_bro",
      market: "ETH-USDT Perpetual",
      status: "Trailing",
      allocation: "$9,800",
      entry: "$3,420",
      current: "$3,680",
      pnl: "+$520",
      roi: "+8.3%",
      duration: "1d 8h",
      riskLevel: "High",
      avatarColor: "#0c0c0c",
    },
    {
      id: "trade-5",
      trader: "Crypto Box",
      handle: "@cryptobox",
      market: "SOL-USDT Perpetual",
      status: "Active",
      allocation: "$6,600",
      entry: "$152.40",
      current: "$148.10",
      pnl: "-$120",
      roi: "-1.8%",
      duration: "12h 20m",
      riskLevel: "Low",
      avatarColor: "#0c0c0c",
    }
  ],
  history: [
    {
      id: "hist-1",
      trader: "Lannister Trades",
      market: "BTC-USDT Perpetual",
      side: "Long",
      size: "0.42 BTC",
      entry: "$61,820",
      exit: "$63,400",
      pnl: "+$664",
      closedAt: "Today, 09:18 AM",
      status: "Closed",
    },
    {
      id: "hist-2",
      trader: "Alphabot Long",
      market: "ETH-USDT Perpetual",
      side: "Short",
      size: "18.5 ETH",
      entry: "$3,520",
      exit: "$3,610",
      pnl: "-$166",
      closedAt: "Yesterday, 06:42 PM",
      status: "Partially Closed",
    },
    {
      id: "hist-3",
      trader: "Juidy99",
      market: "SOL-USDT Perpetual",
      side: "Long",
      size: "820 SOL",
      entry: "$149.20",
      exit: "$154.80",
      pnl: "+$459",
      closedAt: "Jun 11, 02:11 PM",
      status: "Closed",
    },
  ],
};

const fetchTrades = async (): Promise<TradeResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTradeData), 300);
  });
};


const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const MyTrade = () => {
  const [data, setData] = useState<TradeResponse | null>(null);
  const router = useRouter();
  useEffect(() => {
    let isMounted = true;

    fetchTrades().then((response) => {
      if (isMounted) {
        setData(response);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!data) {
    return (
      <div className="space-y-8 text-[#0c0c0c]">
        <div className="rounded-[32px] border border-black/5 bg-[#0c0c0c] p-6 text-white shadow-[0_35px_90px_-70px_rgba(0,0,0,0.9)]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            My trades
          </p>
          <p className="mt-4 text-lg font-semibold">Loading live data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 text-[#0c0c0c]">
      <section className="rounded-[32px] border border-black/5 bg-gradient-to-br from-[#0c0c0c] via-[#0f1a1a] to-[#0b2a2a] p-6 text-white shadow-[0_35px_90px_-60px_rgba(0,0,0,0.85)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              My trades
            </p>
            <h1 className="mt-2 text-3xl font-semibold">
              Track the trades you are copying
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => router.push("/dashboard/deposit")} className="rounded-full bg-[#dfff3f] px-5 py-2 text-sm font-semibold text-[#0c0c0c] shadow-[0_20px_60px_-35px_rgba(198,214,20,0.6)] transition hover:-translate-y-0.5">
              Add funds
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.summary.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {stat.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{stat.helper}</p>
            </div>
          ))}
        </div>
      </section>

  
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-[#0c0c0c]">
            Active copy positions
          </h2>
          <button onClick={() => router.push("/dashboard/trade")} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#0c0c0c] shadow-sm">
            Add Trade
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 max-h-[40vh] overflow-y-scroll">
          {data.active.map((trade) => (
            <article
              key={trade.id}
              className="flex h-full flex-col justify-between rounded-[32px] border border-black/5 bg-gradient-to-br from-[#0c0c0c] via-[#0f1717] to-[#0b2525] p-6 text-white shadow-[0_35px_90px_-60px_rgba(0,0,0,0.85)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: trade.avatarColor }}
                >
                  {getInitials(trade.trader)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{trade.trader}</h3>
                  <p className="text-xs text-white/60">{trade.handle}</p>
                </div>
                <span
                  className={
                    trade.status === "Active"
                      ? "rounded-full bg-[#dfff3f] px-3 py-1 text-xs font-semibold text-[#0c0c0c]"
                      : trade.status === "Trailing"
                        ? "rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                        : "rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70"
                  }
                >
                  {trade.status}
                </span>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {trade.market}
                </p>
                <div className="mt-3 flex items-baseline justify-between">
                  <div>
                    <p className="text-xs text-white/60">ROI</p>
                    <p className="text-2xl font-semibold">{trade.roi}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/60">PnL</p>
                    <p className="text-lg font-semibold">{trade.pnl}</p>
                  </div>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-2/3 rounded-full bg-[#dfff3f]" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-white/60">
                  <span>Risk: {trade.riskLevel}</span>
                  <span>Open {trade.duration}</span>
                </div>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                    Allocation
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-white">
                    {trade.allocation}
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                    Entry
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-white">
                    {trade.entry}
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                    Current
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-white">
                    {trade.current}
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                    Risk level
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-white">
                    {trade.riskLevel}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-black/5 bg-gradient-to-br from-[#0c0c0c] via-[#0f1717] to-[#0b2525] p-6 text-white shadow-[0_35px_90px_-60px_rgba(0,0,0,0.85)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Position history
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Recently closed</h2>
          </div>
          <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
            Export history
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-[11px] uppercase tracking-[0.28em] text-white/50">
              <tr>
                <th className="px-4 py-3 font-semibold">Trader</th>
                <th className="px-4 py-3 font-semibold">Market</th>
                <th className="px-4 py-3 font-semibold">Side</th>
                <th className="px-4 py-3 font-semibold">Size</th>
                <th className="px-4 py-3 font-semibold">Entry</th>
                <th className="px-4 py-3 font-semibold">Exit</th>
                <th className="px-4 py-3 font-semibold">PnL</th>
                <th className="px-4 py-3 font-semibold">Closed</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {data.history.map((row) => (
                <tr key={row.id} className="bg-white/2">
                  <td className="px-4 py-3 font-medium text-white">
                    {row.trader}
                  </td>
                  <td className="px-4 py-3 text-white/70">{row.market}</td>
                  <td className="px-4 py-3 text-white/70">{row.side}</td>
                  <td className="px-4 py-3 text-white/70">{row.size}</td>
                  <td className="px-4 py-3 text-white/70">{row.entry}</td>
                  <td className="px-4 py-3 text-white/70">{row.exit}</td>
                  <td className="px-4 py-3 text-white">
                    {row.pnl}
                  </td>
                  <td className="px-4 py-3 text-white/70">
                    {row.closedAt}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        row.status === "Closed"
                          ? "rounded-full bg-[#dfff3f] px-3 py-1 text-xs font-semibold text-[#0c0c0c]"
                          : "rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                      }
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyTrade;
