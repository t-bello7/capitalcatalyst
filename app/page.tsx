"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const features = [
  { title: "Staking Opportunities", copy: "Earn consistent rewards while supporting blockchain security and efficiency.", icon: "💼" },
  { title: "Investment Solutions", copy: "Tailored strategies to maximize your financial growth and secure your future.", icon: "📈" },
  { title: "Copy Trading", copy: "Replicate strategies of top-performing investors and enhance your portfolio with minimal effort.", icon: "🛡️" },
];

const advantages = [
  { title: "Smooth Start", copy: "Open an account in minutes with guided onboarding." },
  { title: "24/7 Support", copy: "Experts ready whenever you need answers." },
  { title: "Low Commissions", copy: "Transparent pricing with no surprise fees." },
  { title: "Invest to Your Budget", copy: "Invest according to the plans that fit your budget and scale at your pace." },
];

const partners = [
  { name: "Citi", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg" },
  { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
  { name: "Citi", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg" },
  { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
];

const marketRows = [
  {
    rank: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$89,721.07",
    percent: "+1.21%",
    positive: true,
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032",
  },
  {
    rank: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,125.44",
    percent: "-0.82%",
    positive: false,
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032",
  },
  {
    rank: 3,
    name: "Tether",
    symbol: "USDT",
    price: "$0.9977",
    percent: "+0.05%",
    positive: true,
    icon: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=032",
  },
  {
    rank: 4,
    name: "BNB",
    symbol: "BNB",
    price: "$884.80",
    percent: "-0.68%",
    positive: false,
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=032",
  },
  {
    rank: 5,
    name: "XRP",
    symbol: "XRP",
    price: "$2.00",
    percent: "+1.08%",
    positive: true,
    icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=032",
  },
];

const tickers = [
  { name: "XRP", rank: "#5", price: "$2.00", change: "-0.71%", mcap: "$120.99B", vol: "$1.90B", positive: false, icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=032" },
  { name: "USDC", rank: "#6", price: "$0.9998", change: "-0.02%", mcap: "$78.39B", vol: "$7.62B", positive: false, icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=032" },
  { name: "SOL", rank: "#7", price: "$131.72", change: "-0.62%", mcap: "$74.15B", vol: "$3.28B", positive: false, icon: "https://cryptologos.cc/logos/solana-sol-logo.png?v=032" },
  { name: "ETH", rank: "#2", price: "$3,125.44", change: "+0.45%", mcap: "$376.04B", vol: "$20.83B", positive: true, icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032" },
];

const sectionProps = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  // transition: { duration: 0.5, ease: "easeOut" },
};

export default function Home() {
  const [isTradeOpen, setIsTradeOpen] = useState(false);
  const router = useRouter()

  return (
    <main className="bg-gradient-to-b from-[#f9fafb] via-[#f4f7fb] to-[#eef2f6] text-[#0c0c0c]">
      <header className="sticky top-0 z-20 border-b border-white/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0c0c0c] text-base font-semibold text-white shadow-[0_18px_40px_-26px_rgba(0,0,0,0.55)]">
              CC
            </div>
            <div>
              <p className="text-lg font-semibold">Capital Catalyst</p>
              <p className="text-xs text-[#4b4f5c]">Invest for the future</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-[#3c414f] md:flex">
            <Link href="#market" className="hover:text-[#0c0c0c]">Market</Link>
            <Link href="#pulse" className="hover:text-[#0c0c0c]">Why us</Link>
            <Link href="#advantages" className="hover:text-[#0c0c0c]">Investment</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() =>router.push("/login")} className="hidden rounded-full px-4 py-2 text-sm font-semibold text-[#0c0c0c] hover:-translate-y-0.5 hover:text-black md:inline-flex">
              Log in
            </button>
            <button onClick={() =>router.push("/signup")} className="inline-flex items-center gap-2 rounded-full bg-[#0c0c0c] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.65)] transition-transform hover:-translate-y-0.5">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* <div className=" pb-6 pt-4">
        <div className="overflow-hidden bg-[#0f1118] text-white shadow-[0_25px_70px_-50px_rgba(0,0,0,0.65)]">
          <div className="flex gap-3 overflow-x-auto px-3 py-3">
            {tickers.map((item) => (
              <div
                key={item.name}
                className="flex min-w-[240px] items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Image src={item.icon} alt={item.name} width={28} height={28} className="h-7 w-7 object-contain" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{item.name}</span>
                    <span className="text-xs text-white/60">{item.rank}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <span className="text-base font-semibold text-white">{item.price}</span>
                    <span
                      className={`rounded-full px-2 py-1 font-semibold ${
                        item.positive ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/15 text-rose-300"
                      }`}
                    >
                      {item.change}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-white/60">
                    <span>MCAP: {item.mcap}</span>
                    <span>Vol: {item.vol}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 border-t border-white/10 px-4 py-2 text-xs text-white/80">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Market Status: Open 24/7
            </span>
            <span>7:06:44 AM UTC</span>
            <span className="text-emerald-300">↑ 37 gainers</span>
            <span className="text-rose-300">↓ 61 losers</span>
          </div>
        </div>
      </div> */}

      <motion.section id="market" {...sectionProps} className="mx-auto max-w-6xl px-4 pb-14 pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#ecff60] via-[#dfff3f] to-[#c5f63b] p-8 text-[#0c0c0c] shadow-[0_60px_120px_-70px_rgba(132,146,12,0.6)]">
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
                  Copy Trading
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0c0c0c]/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[#0c0c0c]">
                  Staking
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* <button className="inline-flex items-center gap-2 rounded-full bg-[#0c0c0c] px-5 py-3 text-sm font-semibold text-white shadow-[0_25px_70px_-35px_rgba(0,0,0,0.7)] transition-transform hover:-translate-y-0.5">
                  Download app
                </button> */}
                <span className="flex items-center gap-2 text-sm font-semibold text-[#0c0c0c]">
                  See how it works
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-xs">
                    ↓
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[540px] overflow-hidden rounded-[32px] bg-[#0f1118] text-white shadow-[0_35px_80px_-50px_rgba(0,0,0,0.7)] ring-1 ring-white/5">
              <div className="absolute -left-12 -top-10 h-32 w-32 rounded-full bg-[#dfff3f]/15 blur-3xl" />
              <div className="absolute right-0 bottom-0 h-28 w-28 rounded-full bg-white/5 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 border-b border-white/5 bg-[#0c0c0c] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em]">
                  <span className="h-2 w-2 rounded-full bg-[#dfff3f]" />
                  Market overview
                </div>
                <div className="grid grid-cols-[0.45fr_2fr_1.4fr_1.1fr_1fr] px-5 pb-3 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  <span>#</span>
                  <span>Cryptocurrency</span>
                  <span>Trend</span>
                  <span>Price</span>
                  <span className="text-right">24h %</span>
                </div>
                <div className="divide-y divide-white/5">
                  {marketRows.map((row) => (
                    <div
                      key={row.name}
                      className="grid grid-cols-[0.45fr_2fr_1.4fr_1.1fr_1fr] items-center gap-4 px-5 py-4 text-sm"
                      style={{ backgroundColor: row.rank === 1 ? "rgba(12,12,12,0.4)" : "transparent" }}
                    >
                      <div className="text-white/60">{row.rank}</div>
                      <div className="flex items-center gap-3">
                        <img
                          src={row.icon}
                          alt={row.name}
                          className="h-10 w-10 rounded-full bg-white/5 object-contain p-1.5"
                        />
                        <div>
                          <p className="text-base font-semibold text-white">{row.name}</p>
                          <p className="text-xs uppercase tracking-[0.14em] text-white/50">{row.symbol}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg viewBox="0 0 120 40" className="h-10 w-full" aria-hidden>
                          <path
                            d={
                              row.positive
                                ? "M5 26 C25 18 40 16 60 20 C80 24 95 18 115 12"
                                : "M5 14 C25 20 40 24 60 22 C80 20 95 26 115 30"
                            }
                            fill="none"
                            stroke={row.positive ? "#dfff3f" : "#f87171"}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="font-semibold text-white">{row.price}</div>
                      <div className={`text-right text-sm font-semibold ${row.positive ? "text-[#9ede00]" : "text-rose-400"}`}>
                        {row.percent}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionProps} id="features" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 rounded-[32px] bg-white/90 p-6 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.5)] lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[26px] border border-[#e7ebf2] bg-white px-6 py-5 shadow-[0_20px_60px_-50px_rgba(0,0,0,0.45)]"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f5f7fb] text-lg">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-[#4b4f5c]">{feature.copy}</p>
              <button className="mt-4 text-sm font-semibold text-[#0c0c0c] underline decoration-[#dfff3f] underline-offset-6">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionProps} id="advantages" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[32px] bg-white/90 p-8 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#4b4f5c]">Advantages</p>
              <h2 className="mt-1 text-3xl font-semibold text-[#0c0c0c] sm:text-4xl">Built for faster investing</h2>
              <p className="mt-2 max-w-2xl text-[#4b4f5c]">
                A modern stack that keeps you connected to markets, insights, and every account you manage.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-[#0c0c0c] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_50px_-30px_rgba(0,0,0,0.7)]">
              Open account
            </button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[22px] border border-[#e7ebf2] bg-[#f8f9fb] px-4 py-5 shadow-[0_20px_50px_-45px_rgba(0,0,0,0.5)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c0c0c] text-xs font-semibold text-white shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[#4b4f5c]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionProps} id="cta" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0b0c12] via-[#0d0f18] to-[#11131c] p-8 text-white shadow-[0_60px_140px_-80px_rgba(0,0,0,0.8)]">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Investment plans</p>
            <h3 className="text-3xl font-semibold sm:text-4xl">Choose the plan that fits your goals</h3>
            <p className="text-white/60">
              Every plan gives you a 30-day runway so you can participate on your timeline.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                name: "Starter",
                interest: "20%",
                duration: "30 days",
                deposit: "$1,000 minimum",
                support: "Email support · Manual trading",
                recommended: true,
              },
              {
                name: "Growth Plan",
                interest: "30%",
                duration: "30 days",
                deposit: "$3,000 minimum",
                support: "Market insights",
              },
              {
                name: "Premium Plan",
                interest: "45%",
                duration: "30 days",
                deposit: "$5,000 minimum",
                support: "Priority processing",
              },
              {
                name: "VIP Plan",
                interest: "65%",
                duration: "30 days",
                deposit: "$10,000 minimum",
                support: "24/7 support · Manual trading · Account manager",
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col gap-4 rounded-[28px] border px-6 py-6 shadow-[0_30px_100px_-70px_rgba(0,0,0,0.8)] ${
                  plan.recommended
                    ? "border-[#dfff3f] bg-white/5 ring-1 ring-[#dfff3f]/40"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#dfff3f] px-3 py-1 text-xs font-semibold uppercase text-[#0c0c0c]">
                    Recommended
                  </span>
                )}
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">{plan.name}</p>
                  <p className="text-4xl font-bold text-white">{plan.interest}</p>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">Interest</p>
                </div>
                <div className="space-y-2 text-sm text-white/80">
                  <p>
                    <span className="font-semibold text-white">Duration:</span> {plan.duration}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Deposit:</span> {plan.deposit}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Support:</span> {plan.support}
                  </p>
                </div>
                <button
                  className={`mt-auto rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    plan.recommended
                      ? "bg-[#dfff3f] text-[#0c0c0c] shadow-[0_20px_60px_-40px_rgba(198,214,20,0.6)]"
                      : "bg-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  Invest now
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section {...sectionProps} className="mx-auto max-w-6xl px-4 pb-16">
        <div className="overflow-hidden rounded-[32px] bg-white/90 px-6 py-8 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.5)]">
          <h3 className="text-center text-xl font-semibold text-[#0c0c0c]">Our partners around the world</h3>
          <div className="relative mt-6 h-20 overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 flex w-[200%] items-center gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex h-16 w-32 flex-shrink-0 items-center justify-center rounded-2xl border border-[#e7ebf2] bg-[#f8f9fb] px-3 py-2 shadow-sm"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionProps} id="pulse" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-b from-[#0b0c12] via-[#0d0f18] to-[#11131c] text-white shadow-[0_40px_90px_-50px_rgba(0,0,0,0.75)]">
          <div className="flex flex-col gap-8 px-6 py-10">
            <div className="text-center space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Why Capital Catalyst</p>
              <h3 className="text-3xl font-semibold sm:text-4xl">
                Reasons to <span className="text-[#dfff3f]">Choose Capital Catalyst</span>
              </h3>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr_1fr] lg:items-center">
              <div className="space-y-4">
                {[
                  { title: "Friendly Interface", copy: "Improving accessibility and satisfaction through a clean, friendly UI." },
                  { title: "24/7 Support", copy: "A dedicated customer care team ready around the clock to assist you." },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4 shadow-[0_25px_70px_-55px_rgba(0,0,0,0.8)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfff3f]">0{idx + 1}</p>
                    <h4 className="mt-1 text-xl font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm text-white/70">{item.copy}</p>
                  </div>
                ))}
              </div>
              <div className="relative mx-auto w-full max-w-[520px]">
                <div className="absolute -left-8 top-6 h-32 w-32 rounded-full bg-[#dfff3f]/20 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_100px_-70px_rgba(0,0,0,0.85)]">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                    alt="Investor focus"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Highly Secured", copy: "Enterprise-grade encryption keeps every move and balance safe." },
                  { title: "Award Winning", copy: "Industry recognition for speed, execution quality, and service." },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4 shadow-[0_25px_70px_-55px_rgba(0,0,0,0.8)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfff3f]">0{idx + 3}</p>
                    <h4 className="mt-1 text-xl font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm text-white/70">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionProps} className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8 rounded-[32px] bg-gradient-to-b from-white via-[#f7f8fb] to-[#eef2f6] p-8 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.45)] lg:grid-cols-[1fr_1.2fr_1fr] lg:items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-64 w-64 overflow-hidden rounded-[44px] border-[10px] border-white shadow-[0_25px_80px_-60px_rgba(0,0,0,0.6)]">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
                alt="Nora Penelope"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-base font-semibold text-[#0c0c0c]">Nora Penelope</p>
              <p className="text-sm text-[#4b4f5c]">San Francisco</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.32em] text-[#4b4f5c]">Testimonials</p>
            <h3 className="text-center text-3xl font-semibold sm:text-4xl">
              Traders <span className="text-[#0c0c0c] underline decoration-[#dfff3f] decoration-4 underline-offset-4">Words</span> About Us
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Awesome!",
                  copy: "This broker delivers results! I've seen my investments grow consistently, and their platform is a breeze to use.",
                  author: "Nathan Felix",
                  location: "California",
                  rating: "5 out of 5",
                },
                {
                  title: "It’s been fantastic!",
                  copy: "Quick execution, solid returns. This broker knows how to keep traders happy.",
                  author: "Nora Penelope",
                  location: "San Francisco",
                  rating: "4.5 out of 5",
                },
              ].map((t) => (
                <div
                  key={t.title}
                  className="rounded-[22px] border border-[#e7ebf2] bg-white px-5 py-5 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex items-center gap-2 text-lg font-semibold text-[#0c0c0c]">
                    <span>🙂</span>
                    {t.title}
                  </div>
                  <p className="mt-3 text-sm text-[#4b4f5c]">{t.copy}</p>
                  <div className="mt-4 text-sm text-[#0c0c0c]">
                    <p className="font-semibold">{t.author}</p>
                    <p className="text-[#2956e3]">{t.location}</p>
                    <p className="mt-1 text-xs text-[#4b4f5c]">{t.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative h-64 w-64 overflow-hidden rounded-[44px] border-[10px] border-white shadow-[0_25px_80px_-60px_rgba(0,0,0,0.6)]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                alt="John Miller"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-base font-semibold text-[#0c0c0c]">John Miller</p>
              <p className="text-sm text-[#4b4f5c]">New York</p>
            </div>
          </div>
        </div>
      </motion.section>


      <footer className="bg-[#0c0c0c] text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#0c0c0c]">
                CC
              </div>
              <span className="text-lg font-semibold">Capital Catalyst</span>
            </div>
            <p className="text-sm text-white/70">
              Boost the flow of your capital with smarter tools, live insights, and a bold investing experience.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Links</p>
            <Link href="/" className="block text-white/80 hover:text-white">Home</Link>
            <Link href="/#market" className="block text-white/80 hover:text-white">Market</Link>
            <Link href="/#pulse"  className="block text-white/80 hover:text-white">Why us</Link>
            <Link href="/#advantages"  className="block text-white/80 hover:text-white">Investment</Link>
          </div>
          {/* <div className="space-y-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Company</p>
            <Link className="block text-white/80 hover:text-white" href="/">About</Link>
            <Link className="block text-white/80 hover:text-white" href="/">Careers</Link>
            <Link className="block text-white/80 hover:text-white" href="/">Privacy</Link>
            <Link className="block text-white/80 hover:text-white" href="/">Terms</Link>
          </div> */}
          <div className="space-y-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Subscribe</p>
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dfff3f] text-[#0c0c0c] font-semibold">
                →
              </button>
            </div>
            <div className="flex flex-col gap-3 text-white/70">
              <span>support@cryptogram.biz</span>
              <span>+1 (800) 555-0199</span>
              

            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
