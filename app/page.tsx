"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const awards = [
  { title: "Most Transparent FX Broker", organization: "The Forex Expo USA", date: "Dec, 2018" },
  { title: "Best Forex Rewards Program", organization: "Global Forex Awards", date: "Jun, 2016" },
  { title: "Global Forex Broker of the Year", organization: "Global Forex Awards", date: "Mar, 2021" },
];

const coins = [
  { name: "Bitcoin", price: "90340.61 USD", change: "-0.76%", positive: false, icon: "https://img.icons8.com/color/96/bitcoin--v1.png" },
  { name: "Ethereum", price: "3207.04 USD", change: "-0.08%", positive: false, icon: "https://img.icons8.com/color/96/ethereum.png" },
  { name: "Solana", price: "131.17 USD", change: "+0.46%", positive: true, icon: "https://cryptologos.cc/logos/solana-sol-logo.png?v=032" },
  { name: "XRP", price: "2.013 USD", change: "+0.98%", positive: true, icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=032" },
  { name: "Cardano", price: "0.4308 USD", change: "+0.79%", positive: true, icon: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=032" },
  { name: "Dogecoin", price: "0.1386 USD", change: "-0.55%", positive: false, icon: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=032" },
  { name: "Polygon", price: "0.1995 USD", change: "-0.42%", positive: false, icon: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=032" },
  { name: "Polkadot", price: "2.073 USD", change: "+0.10%", positive: true, icon: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=032" },
];

const investmentPlans = [
  {
    name: "Starter Plan",
    interest: "20%",
    duration: "30 days",
    deposit: "$1,000 minimum",
    support: "Email support • Manual trading",
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
    support: "24/7 dedicated support • Manual trading • Personal account manager",
  },
];

const investmentBullets = [
  "Customized portfolio management",
  "Diverse investment options",
  "Expert financial advice",
];

const achievementStats = [
  { value: "23K", label: "Active Traders", icon: "https://img.icons8.com/color/48/add-user-male.png" },
  { value: "3.7M", label: "Market Capitalisation", icon: "https://img.icons8.com/color/48/combo-chart--v1.png" },
  { value: "18.4M", label: "Total Revenue", icon: "https://img.icons8.com/color/48/money-bag-bitcoin.png" },
  { value: "20", label: "Awards Won", icon: "https://img.icons8.com/color/48/prize.png" },
  { value: "12+", label: "Offices & Branches", icon: "https://img.icons8.com/color/48/company.png" },
];

const indices = [
  { title: "S&P 500", description: "Recent upward trend with a 5% increase over the last month, driven by strong earnings reports." },
  { title: "NASDAQ", description: "Tech stocks continue to perform well, showing resilience in a volatile market." },
  { title: "Dow Jones", description: "Industrial stocks lead the way with significant gains, supported by robust economic data." },
  { title: "FTSE 100", description: "UK markets show steady growth, driven by strong performance in energy and financial sectors." },
  { title: "Nikkei 225", description: "Japanese markets are on the rise, supported by a weaker yen and strong export data." },
  { title: "DAX", description: "German equities remain stable with modest gains across automotive and tech sectors." },
];

const mt4Features = [
  "Ultra fast trade execution",
  "Trading from a smartphone or tablet",
  "No dealing desk, no requotes",
];

const copyTradingPerks = [
  "Access to expert strategies",
  "Minimized risk through diversification",
  "Automated trading for convenience",
];

const reasons = [
  { title: "Friendly User Interface", description: "Improving accessibility and satisfaction through a friendly user interface.", number: "01" },
  { title: "24/7 Support", description: "A dedicated customer care team ready around the clock to assist you.", number: "02" },
  { title: "Highly Secured", description: "Enterprise-grade encryption keeps every move and balance safe.", number: "03" },
  { title: "Award winner", description: "Industry recognition for service quality and execution speed.", number: "04" },
];

const stakingPerks = [
  "High-yield opportunities",
  "Secure and reliable platforms",
  "Flexible staking options",
];

const testimonialCards = [
  {
    quote: "This broker delivers results! I've seen my investments grow consistently, and their platform is a breeze to use.",
    author: "Nathan Felix",
    location: "California",
    rating: "5 out of 5",
    sentiment: "Awesome!",
  },
  {
    quote: "Quick execution, solid returns. This broker knows how to keep traders happy.",
    author: "Nora Penelope",
    location: "San Fransisco",
    rating: "4.5 out of 5",
    sentiment: "It’s been fantastic!",
  },
];

export default function Home() {
  // const sectionVariants = {
  //   hidden: { opacity: 0, y: 36 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  // };

  const sectionReveal = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    // variants: sectionVariants,
  };

  return (
    <main className="bg-[#f5f7fb] text-[#1f2430]">
      <header className="bg-[#0f1524] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-semibold">CC</div>
            <span className="text-lg font-semibold">Capital Catalyst</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <Link href="/">Home</Link>
            <Link href="/">Markets</Link>
            <Link href="/">Plans</Link>
            <Link href="/">Account</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="bg-white px-4 text-[#0f1524] hover:bg-white/90">Client Portal</Button>
            <Button className="bg-[#2956e3] px-5 hover:bg-[#1f46c1]">Register</Button>
          </div>
        </div>
      </header>

      <motion.section
        {...sectionReveal}
        className="relative isolate overflow-hidden bg-[#0a1021] text-white"
        id="jumbotron"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
            alt="Market dashboard"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1021]/90 via-[#0a1021]/70 to-[#0a1021]/55" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Echelon Signals</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Trades shares, crypto, features & enjoy copy trading with financial experts.
          </h1>
          <p className="text-lg text-white/80">Grow your capital with Echelon Signals.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button className="bg-[#214ad8] px-6 text-white shadow-lg shadow-[#214ad8]/30 hover:bg-[#1a3bb3]">
              Register Now →
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl backdrop-blur hover:bg-white/20">
              ←
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl backdrop-blur hover:bg-white/20">
              →
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section 
      {...sectionReveal} 
      className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7f8494]">Our Numbers</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#1f2435] sm:text-4xl">
            Achievements of our Company
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {achievementStats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-[#eaecf2] bg-white p-6 text-center shadow-[0_35px_70px_-50px_rgba(0,0,0,0.45)]"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f2f6ff]">
                  <img src={stat.icon} alt="" className="h-8 w-8 object-contain" />
                </div>
                <div className="text-3xl font-bold text-[#1f2435]">{stat.value}</div>
                <p className="mt-1 text-sm text-[#6a7184]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-[#545a6b]">
            <div className="flex -space-x-2">
              <img
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=120&h=120&q=80"
                alt="Reviewer one"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=120&h=120&q=80"
                alt="Reviewer two"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=120&h=120&q=80"
                alt="Reviewer three"
              />
            </div>
            <span>Average rating of 4.8/5 on Trustpilot</span>
          </div>
        </div>
      </motion.section>


      <motion.section {...sectionReveal} className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c8197]">Awards & Achievements</p>
              <h2 className="text-3xl font-semibold leading-tight text-[#1b1f32] sm:text-4xl">
                We’re Proud of Our <span className="text-[#2956e3]">Awards</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm text-[#6f7486] lg:text-right">
              Feel free to view our awards, all well deserved
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => (
              <article
                key={award.title}
                className="relative overflow-hidden rounded-3xl bg-[#1c1f2d] p-7 text-white shadow-xl ring-1 ring-black/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_55%),radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.06),transparent_45%)]" />
                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl">🏅</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold leading-snug">{award.title}</h3>
                    <div className="h-[1px] w-12 bg-[#3d5ccf]" />
                    <p className="text-sm text-white/80">{award.organization}</p>
                    <p className="text-sm text-white/70">{award.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-[#242b3b]">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4d7e1] bg-white text-lg shadow-sm hover:border-[#2956e3] hover:text-[#2956e3]">
              ←
            </button>
            <div className="flex items-center gap-3 text-sm font-semibold text-[#7a7f93]">
              <span className="text-[#292f3e]">1</span>
              <span>2</span>
              <span className="text-[#000]">3</span>
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4d7e1] bg-white text-lg shadow-sm hover:border-[#2956e3] hover:text-[#2956e3]">
              →
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="bg-[#f0f3f8] py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7c839b]">For beginners and pros</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1f2435] sm:text-5xl">
            Trade Spot, Margin, Futures & OTC on the Best Crypto Trading Platform
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {coins.map((coin) => (
            <article
              key={coin.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#e3e6ef] bg-white p-6 text-center shadow-[0_25px_50px_-40px_rgba(15,20,32,0.4)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
                <img src={coin.icon} alt={coin.name} className="h-12 w-12 object-contain" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-[#1f2435]">{coin.name}</h3>
                <p className="text-sm text-[#6b7289]">{coin.price}</p>
                <p className={`text-sm font-semibold ${coin.positive ? "text-emerald-500" : "text-rose-500"}`}>
                  {coin.positive ? "▲" : "▼"} {coin.change}
                </p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="flex justify-center">
            <div className="rounded-[32px] bg-[#f6f8fd] p-6 shadow-[0_40px_80px_-50px_rgba(0,0,0,0.35)]">
              <img
                src="https://img.icons8.com/3d-fluency/512/rocket.png"
                alt="Investment rocket"
                className="mx-auto w-full max-w-md"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#1f2435]">Investment Solutions</h2>
            <p className="text-lg text-[#6a7184]">
              Tailored strategies to maximize your financial growth and secure your future.
            </p>
            <ul className="space-y-3">
              {investmentBullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg text-[#3c4257]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e7ecff] text-[#2956e3]">▮</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="bg-white py-16">
        <div className="mx-auto max-w-6xl space-y-3 px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#1f2435] sm:text-4xl">Copy Trading</h2>
          <p className="text-lg text-[#686f82]">
            Replicate strategies of top-performing investors and enhance your portfolio with minimal effort.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="rounded-[32px] bg-[#f6f8fd] p-6 shadow-[0_40px_90px_-60px_rgba(0,0,0,0.4)]">
            <img
              src="https://img.icons8.com/3d-fluency/512/businessman.png"
              alt="Copy trading illustration"
              className="mx-auto w-full max-w-xl"
            />
          </div>
          <div className="space-y-4">
            <ul className="space-y-4 text-lg text-[#2b3042]">
              {copyTradingPerks.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6f0ff] text-[#2956e3]">✔</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="bg-white py-16">
        <div className="mx-auto max-w-6xl space-y-3 px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#1f2435] sm:text-4xl">Staking Opportunities</h2>
          <p className="text-lg text-[#686f82]">
            Earn consistent rewards while supporting blockchain security and efficiency.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-2">
          <div className="space-y-4 text-left">
            {stakingPerks.map((perk) => (
              <div key={perk} className="flex items-center gap-3 text-lg text-[#2b3042]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f0ff] text-[#2956e3]">✔</span>
                {perk}
              </div>
            ))}
          </div>
          <div className="rounded-[32px] bg-[#f6f8fd] p-6 shadow-[0_40px_90px_-60px_rgba(0,0,0,0.4)]">
            <img
              src="https://img.icons8.com/3d-fluency/512/bitcoin.png"
              alt="Staking illustration"
              className="mx-auto w-full max-w-xl"
            />
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="bg-gradient-to-br from-[#0d1224] via-[#0c1020] to-[#090c16] py-16 text-white">
        <div className="mx-auto max-w-6xl space-y-3 px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Investment Plans</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Choose the plan that fits your goals</h2>
          <p className="text-base text-white/70">Every plan gives you a 30-day runway so you can participate on your timeline.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 md:grid-cols-2 xl:grid-cols-4">
          {investmentPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative overflow-hidden rounded-3xl border bg-white/5 p-6 shadow-[0_40px_90px_-60px_rgba(0,0,0,0.7)] ${
                plan.recommended ? "border-[#fbbf24] shadow-[0_25px_80px_-50px_rgba(251,191,36,0.5)]" : "border-white/10"
              }`}
            >
              {plan.recommended && (
                <span className="absolute right-4 top-4 rounded-full bg-[#fbbf24] px-3 py-1 text-xs font-semibold uppercase text-black">
                  Recommended
                </span>
              )}
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">{plan.name}</p>
                <p className="text-4xl font-bold text-white">{plan.interest}</p>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Interest</p>
              </div>
              <dl className="mt-6 space-y-2 text-sm text-white/80">
                <div className="flex gap-2">
                  <dt className="font-semibold text-white">Duration:</dt>
                  <dd>{plan.duration}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-white">Deposit:</dt>
                  <dd>{plan.deposit}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-white">Support:</dt>
                  <dd>{plan.support}</dd>
                </div>
              </dl>
              <Button
                className={`mt-6 w-full rounded-2xl ${plan.recommended ? "bg-[#fbbf24] text-black hover:bg-[#e3aa1f]" : "bg-white/10 text-white hover:bg-white/20"}`}
              >
                Invest now
              </Button>
            </article>
          ))}
        </div>
      </motion.section>
 
      <motion.section {...sectionReveal} className="bg-[#f0f3f8] py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#1f2435] sm:text-4xl">Trading Indices Trends</h2>
          <p className="mt-3 text-lg text-[#686f82]">
            Stay ahead with the latest insights on global trading indices.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {indices.map((index) => (
              <article
                key={index.title}
                className="rounded-2xl border border-[#e1e4ed] bg-white p-6 text-center shadow-[0_35px_80px_-60px_rgba(15,20,32,0.45)]"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8edff] text-[#2956e3]">
                  ▮
                </div>
                <h3 className="text-xl font-semibold text-[#1f2435]">{index.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5d6476]">{index.description}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="relative overflow-hidden bg-[#0f1220] py-20 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1220]/90 via-[#0f1220]/80 to-[#0f1220]/70" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4">
          <p className="text-lg text-gray-200">Forex Trading</p>
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Top <span className="text-[#2956e3]">Pricing</span> List in Market
          </h2>
          <div>
            <Button className="mt-4 bg-white px-6 text-[#0f1220] hover:bg-white/90">
              Join Us Now →
            </Button>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="bg-[#f7f9fc] py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a7f93]">MT4 Platform</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#1f2435] sm:text-4xl">
              Use <span className="text-[#2956e3]">MT4?</span> Get Exclusive Tools with Bullion
            </h2>
            <p className="text-lg text-[#6b7289]">
              Unless we are able to do the most pleasurable thing, all pleasure is assumed, all pain is repelled by time.
            </p>
            <ul className="space-y-3">
              {mt4Features.map((feature, index) => (
                <li key={feature} className="flex items-start gap-3 text-lg text-[#2b3042]">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#e5e9ff] text-sm font-semibold text-[#2956e3]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <Button className="bg-[#0f1524] px-5 text-white hover:bg-[#121a2d]">Register →</Button>
              <div className="flex items-center gap-2 text-[#6b7289]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3ef] bg-white text-sm">
                  ⊞
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3ef] bg-white text-sm">
                  
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3ef] bg-white text-sm">
                  🤖
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl overflow-hidden rounded-[28px] bg-white shadow-[0_40px_80px_-50px_rgba(0,0,0,0.35)]">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80"
                alt="Trading screens"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

  

      <motion.section {...sectionReveal} className="bg-[#0f1324] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8c92a8]">Why Echelon Signals</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Reasons to <span className="text-[#2956e3]">Choose Echelon Signals</span>
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-[1fr_auto_1fr]">
          <div className="space-y-6">
            {reasons.slice(0, 2).map((reason) => (
              <article key={reason.title} className="rounded-2xl bg-white/5 p-5 text-left shadow-[0_25px_60px_-50px_rgba(0,0,0,0.7)]">
                <div className="text-sm font-semibold text-[#2956e3]">{reason.number}</div>
                <h3 className="mt-1 text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm text-white/70">{reason.description}</p>
              </article>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <div className="relative overflow-hidden rounded-[28px] bg-[#161b2c] p-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=900&q=80"
                alt="Happy customer"
                className="h-[360px] w-auto rounded-[24px] object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            {reasons.slice(2).map((reason) => (
              <article key={reason.title} className="rounded-2xl bg-white/5 p-5 text-left shadow-[0_25px_60px_-50px_rgba(0,0,0,0.7)]">
                <div className="text-sm font-semibold text-[#2956e3]">{reason.number}</div>
                <h3 className="mt-1 text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm text-white/70">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="bg-[#f5f7fb] py-16">
        <div className="mx-auto max-w-6xl space-y-3 px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a7f93]">Testimonials</p>
          <h2 className="text-3xl font-semibold text-[#1f2435] sm:text-4xl">
            Traders <span className="text-[#2956e3]">Words</span> About Us
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl items-start gap-8 px-4 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80"
              alt="Happy trader"
              className="w-full max-w-xs rounded-full bg-white p-6"
            />
            <div className="text-center text-sm font-semibold text-[#1f2435]">
              Nora Penelope
              <div className="text-xs text-[#6b7289]">San Fransisco</div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {testimonialCards.map((testimonial) => (
              <article
                key={testimonial.author}
                className="relative rounded-2xl border border-[#e4e7ef] bg-white p-6 shadow-[0_35px_80px_-60px_rgba(15,20,32,0.45)]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🙂</span>
                  <h3 className="text-lg font-semibold text-[#1f2435]">{testimonial.sentiment}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#5d6476]">{testimonial.quote}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-[#3a4052]">
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-[#2956e3]">{testimonial.location}</div>
                  </div>
                  <div className="text-[#f5a524]">★★★★★</div>
                </div>
                <p className="mt-2 text-xs text-[#6b7289]">{testimonial.rating}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
              alt="Excited trader"
              className="w-full max-w-xs rounded-full bg-white p-6"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionReveal}
        className="bg-[#0b0f1a] py-14 text-white"
      >
        <div className="mx-auto max-w-6xl space-y-6 px-4">
          <div className="flex flex-col gap-4 rounded-[28px] border border-white/5 bg-gradient-to-r from-[#0f1524] via-[#0d1220] to-[#0b0f1a] p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.6)] md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f6b83d]">
                Get in touch
              </p>
              <h3 className="text-3xl font-semibold">Stay in the loop</h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                <span className="tracking-[0.25em] text-white/60">Language</span>
                <select className="bg-transparent text-white outline-none">
                  <option>English</option>
                  <option>French</option>
                  <option>Spanish</option>
                </select>
              </div>
              <div className="flex w-full flex-1 items-center gap-2 rounded-[18px] border border-white/10 bg-white/5 px-3 py-2 text-sm md:w-auto md:min-w-[340px]">
                <input
                  className="w-full bg-transparent px-2 py-2 text-white placeholder:text-white/50 focus:outline-none"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="rounded-[14px] bg-[#fbbf24] px-4 py-2 text-sm font-semibold text-black hover:bg-[#e9ab18]">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionReveal}
        className="bg-[#0b0f1a] pb-14 text-white"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[28px] border border-white/5 bg-[#0d1220] p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.6)] md:p-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">CapitalCatalyst</p>
                <p className="text-sm leading-relaxed text-white/80">
                  Future-ready investing tools for modern capital markets. From copy trading to advanced automation, Nexora keeps you ahead of the next cycle.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Contact</p>
                <div className="space-y-1 text-sm text-white">
                  <p>support@capitalcatalyst.org</p>
                  <p className="text-white/70">+1 (800) 555-0199</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Links</p>
                <ul className="space-y-2 text-sm text-white">
                  <li>
                    <Link className="hover:text-[#fbbf24]" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#fbbf24]" href="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#fbbf24]" href="/investments">
                      Investments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
