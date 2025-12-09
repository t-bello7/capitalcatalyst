import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { BitCoin, Tether, UsdCoin, PolkaDot } from "@/assets/images";

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

const cryptoHighlights = [
  { name: "Bitcoin", price: "$72,500", change: "+2.3%", marketCap: "$1.39T" },
  { name: "Ethereum", price: "$3,850", change: "+1.1%", marketCap: "$458B" },
  { name: "Solana", price: "$120", change: "-0.5%", marketCap: "$45B" },
  { name: "Avalanche", price: "$56", change: "+4.2%", marketCap: "$14B" },
  { name: "Chainlink", price: "$28", change: "-1.2%", marketCap: "$12B" },
  { name: "Polygon", price: "$0.95", change: "+0.8%", marketCap: "$12B" },
  { name: "Uniswap", price: "$12", change: "+3.0%", marketCap: "$9.8B" },
];

const testimonials = [
  {
    quote: "Nexora makes it easy to follow high-conviction traders while keeping full visibility into every trade.",
    name: "Mia Chen",
    role: "Growth Lead, StellarFund",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=200&h=200&q=80",
  },
  {
    quote: "The platform feels polished and secure. Copy trading saved us hours a week and keeps our portfolio diversified.",
    name: "Jordan Malik",
    role: "Founder, Atlas Ventures",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=200&h=200&q=80",
  },
  {
    quote: "We trust Nexora for large-volume trades because the guardrails are tight and reporting is always reliable.",
    name: "Ruth Alvarez",
    role: "CFO, Novus Alpha",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=200&h=200&q=80",
  },
];

export default function Home() {
  const featureHighlights = [
    {
      title: "User-Friendly Interface",
      body:
        "Navigate the markets with a clean layout, adaptable dashboards, and guided actions that keep the focus on your goals.",
    },
    {
      title: "Built-in Wallet",
      body:
        "Securely store, send, and receive crypto without leaving the platform—insights, transfers, and tracking all in one place.",
    },
    {
      title: "Real-Time Market Data",
      body:
        "Get live price feeds, news alerts, and technical signals so you can react quickly whenever opportunities arise.",
    },
    {
      title: "Instant Secure Transfers",
      body:
        "Send and receive funds with enterprise-grade protection, whether you’re trading manually or copying strategies.",
    },
  ];

  const tradingModes = [
    {
      title: "Copy Trading",
      description:
        "Mirror top investors to stay in sync with winning strategies without reconstructing them.",
    },
    {
      title: "Stock Trading",
      description:
        "Access global equities with layered analytics and real-time execution tools built for pros.",
    },
    {
      title: "Bot Trading",
      description:
        "Deploy adaptive bots that follow market signals and preserve your disciplined risk profile.",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-secondary relative mt-4 mx-auto max-w-6xl rounded-3xl px-4 py-6 text-text-onColor space-y-6 sm:space-y-8 shadow-[0_25px_90px_-60px_rgba(0,0,0,0.45)]" id="jumbotron-section">
        <nav className="w-full">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm backdrop-blur supports-[backdrop-filter]:backdrop-blur">
            <div className="flex items-center gap-3 font-semibold">
              <Link href="/">Nexora</Link>
              <ThemeSwitcher />
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex">
                {!hasEnvVars ? (
                  <EnvVarWarning />
                ) : (
                  <Suspense>
                    <AuthButton />
                  </Suspense>
                )}
              </div>
              <Button size="sm" className="px-4 py-2 sm:hidden">Join</Button>
            </div>
          </div>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex w-full flex-col gap-5">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs uppercase tracking-[0.35em] text-white/70">Introducing Nexora</span>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Future-Ready Investing for Everyone</h1>
              <p className="text-base text-white/80 sm:text-lg">Empowering you to make smart investment decisions with cutting-edge technology and user-friendly tools.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
              <Button className="w-full sm:w-auto">Get Started</Button>
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/5 px-3 py-2 text-xs text-white/80 sm:text-sm">
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-[12px] italic text-white/80 sm:text-sm">24+ joined today!</span>
              </div>
            </div>
          </div>
          <div className="relative order-first h-[260px] rounded-3xl bg-white/5 px-4 py-6 shadow-inner sm:h-[320px] lg:order-none">
            <Image src={BitCoin} alt="Bitcoin" width={100} height={100} className="absolute right-6 top-6 sm:right-10" />
            <Image src={Tether} alt="Tether" width={100} height={100} className="absolute bottom-6 right-8 sm:right-12" />
            <Image src={UsdCoin} alt="USD Coin" width={100} height={100} className="absolute left-4 top-6 sm:left-6" />
            <Image src={PolkaDot} alt="PolkaDot" width={100} height={100} className="absolute bottom-6 left-10 sm:left-16" />
          </div>
        </div>
        <div className="grid items-center gap-6 rounded-xl border border-[#393939] bg-[#1D1D1D] p-6 sm:grid-cols-2 sm:p-8 md:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="text-2xl bg-clip-text text-transparent bg-[linear-gradient(18deg,#C5CB74_50%,#FFF_83.82%)] font-bold"> 1M+ </div>
            <div className="text-[#A4B0BE] md:block"> Active Traders </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-2xl bg-clip-text text-transparent bg-[linear-gradient(18deg,#C5CB74_50%,#FFF_83.82%)] font-bold"> 150+ </div>
            <div className="text-[#A4B0BE]"> Countries Served </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-2xl bg-clip-text text-transparent bg-[linear-gradient(18deg,#C5CB74_50%,#FFF_83.82%)] font-bold"> 5M+ </div>
            <div className="text-[#A4B0BE]"> Daily Transactions </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-2xl bg-clip-text text-transparent bg-[linear-gradient(18deg,#C5CB74_50%,#FFF_83.82%)] font-bold"> 25B+ </div>
            <div className="text-[#A4B0BE]"> Trading Volume </div>
          </div>
        </div>
      </section>
      <section className="mt-12 mx-auto max-w-6xl rounded-[36px] bg-gradient-to-br from-[#0c1425] via-[#070a12] to-[#05050a] px-4 py-10 text-white sm:px-8">
        <div className="max-w-5xl mx-auto space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#6bc4ff]">Why is this app for you?</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Designed for every investor</h2>
          <p className="text-[#a3aecf] text-lg md:text-xl">
            Whether you are starting out or scaling your portfolio, Nexora pairs advanced tools with effortless usability so you can focus on gaining momentum.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featureHighlights.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_70px_-40px_rgba(3,5,19,0.9)] transition hover:border-[#6bc4ff] hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-[#d0d8ff] leading-relaxed">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-12 mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-[#07070d] px-4 py-6 text-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)] sm:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#f9a826]">Start Trading Now</p>
            <h2 className="text-3xl font-semibold">Pick the style that matches your strategy</h2>
            <p className="text-[#b1b6c8]">Copy strategies, trade stocks, or automate rewards with confidence.</p>
          </div>
          <Button className="w-full md:w-auto">Launch trading</Button>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tradingModes.map((mode) => (
            <article
              key={mode.title}
              className="rounded-2xl border border-white/5 bg-white/5 p-5 text-sm transition hover:border-[#f9a826]/80 hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white">{mode.title}</h3>
              <p className="mt-2 text-[#d3d6df] leading-snug">{mode.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto mb-16 max-w-6xl px-4">
        <div className="max-w-5xl mx-auto space-y-3 text-center">
          <p className="text-sm uppercase tracking-widest text-[#A4B0BE]">Investment plans</p>
          <h2 className="text-3xl font-semibold">Choose the plan that fits your goals</h2>
          <p className="text-[#A4B0BE]">Every plan gives you a 30-day runway so you can participate on your timeline.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {investmentPlans.map((plan) => (
            <article
              key={plan.name}
              className={`group rounded-3xl border-2 p-6 flex flex-col gap-4 transition-transform ${
                plan.recommended
                  ? "border-[#F9A826] bg-gradient-to-br from-white/90 to-[#F9F7EA] shadow-[0_20px_60px_-20px_rgba(255,170,0,0.7)] scale-105"
                  : "border-[#2b2b2b] bg-[#0b0b0b]"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#A4B0BE]">{plan.name}</p>
                {plan.recommended && (
                  <span className="rounded-full bg-[#F9A826] px-3 py-1 text-[10px] font-bold uppercase text-black">
                    Recommended
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-semibold text-white">{plan.interest}</p>
                <p className="text-sm uppercase tracking-[0.4em] text-[#A4B0BE]">Interest</p>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-[#A4B0BE]">
                <li>
                  <span className="font-semibold text-white">Duration:</span> {plan.duration}
                </li>
                <li>
                  <span className="font-semibold text-white">Deposit:</span> {plan.deposit}
                </li>
                <li>
                  <span className="font-semibold text-white">Support:</span> {plan.support}
                </li>
              </ul>
              <Button className="mt-auto w-full bg-[#141414] text-white border-none">Invest now</Button>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto mb-16 max-w-6xl px-4">
        <div className="max-w-5xl mx-auto space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#fcd34d]">We support 1,000+ cryptocurrencies</p>
          <h2 className="text-3xl font-semibold text-white">Track the markets in one place</h2>
          <p className="text-[#9ea8cc]">Real-time snapshots keep you informed on price moves, market cap shifts, and momentum.</p>
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#05060d] shadow-[0_25px_60px_-25px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] gap-4 border-b border-white/5 bg-white/5 px-6 py-4 text-xs uppercase tracking-[0.4em] text-[#a9b3cb] md:text-sm">
            <span>Name</span>
            <span>Price</span>
            <span>24h</span>
            <span>Market Cap</span>
          </div>
          <div className="divide-y divide-white/5">
            {cryptoHighlights.map((crypto) => (
              <div key={crypto.name} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] gap-4 px-6 py-4 text-sm text-[#d7dde8]">
                <div className="flex flex-col gap-1">
                  <span className="text-base font-semibold text-white">{crypto.name}</span>
                  <span className="text-[11px] text-[#7c8699]">Harness weekly liquidity</span>
                </div>
                <span>{crypto.price}</span>
                <span className={crypto.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"}>{crypto.change}</span>
                <div className="space-y-1">
                  <span>{crypto.marketCap}</span>
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#f97316] to-[#facc15]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto mb-16 max-w-6xl px-4">
        <div className="max-w-5xl mx-auto space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#7c87ff]">What our users say</p>
          <h2 className="text-3xl font-semibold text-white">Trusted by investors worldwide</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 text-left shadow-[0_25px_60px_-30px_rgba(0,0,0,0.8)]">
              <p className="text-sm text-[#ced6ff] leading-relaxed">“{testimonial.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
                  {/* <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" /> */}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#7c87ff]">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto mb-16 max-w-6xl px-4">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e0f19] to-[#05060d] p-8 text-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col gap-4 md:items-center md:justify-between md:flex-row">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#fbbf24]">Get in touch</p>
              <h3 className="text-2xl font-semibold">Stay in the loop</h3>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
              <label htmlFor="language" className="text-xs uppercase tracking-[0.4em] text-[#a5b3cf]">Language</label>
              <select id="language" className="bg-transparent text-white outline-none">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
          <form className="mt-6 flex flex-col gap-3 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#7c8699] focus:border-[#f9a826] focus:outline-none"
            />
            <Button className="rounded-2xl border-none bg-[#f9a826] text-black">Subscribe</Button>
          </form>
        </div>
      </section>
      <footer className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mx-auto grid max-w-5xl gap-6 rounded-3xl border border-white/10 bg-[#05060d] p-8 text-[#d0d7f1] shadow-[0_30px_90px_-45px_rgba(0,0,0,0.8)] md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-white">Nexora</p>
            <p className="text-sm leading-relaxed text-[#9ea8cc]">
              Future-ready investing tools for modern capital markets. From copy trading to advanced automation, Nexora keeps you ahead of the next cycle.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9ea8cc]">Contact</p>
            <a href="mailto:support@nexora.com" className="text-sm text-white">support@nexora.com</a>
            <p className="text-xs text-[#7c8699]">+1 (800) 555-0199</p>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9ea8cc]">Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/investments" className="hover:text-white">Investments</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-5xl border-t border-white/5 pt-6 text-center text-[13px] text-[#7c8699]">
          {/* © {new Date().getFullYear()} Nexora. All rights reserved. */}
        </div>
      </footer>
    </main>
  );
}
