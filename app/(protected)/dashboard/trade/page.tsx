"use client";

type Trader = {
  name: string;
  handle: string;
  market: string;
  roi: string;
  cumulativePnl: string;
  copiers: string;
  winRate: string;
  avatarColor: string;
  sparkline: string;
};

const featuredTraders: Trader[] = [
  {
    name: "Tony Bro",
    handle: "@tony_bro",
    market: "Perpetual Futures",
    roi: "+229.35%",
    cumulativePnl: "+66,437.55",
    copiers: "4057",
    winRate: "86.44%",
    avatarColor: "#0c0c0c",
    sparkline: "M0 90 C 20 30 40 110 60 80 C 80 50 100 70 120 40 C 140 10 160 30 180 20",
  },
  {
    name: "Crypto Box",
    handle: "@cryptobox",
    market: "Perpetual Futures",
    roi: "+10.11%",
    cumulativePnl: "+62,909.46",
    copiers: "28111",
    winRate: "74.93%",
    avatarColor: "#0c0c0c",
    sparkline: "M0 92 C 18 70 36 110 54 78 C 72 46 90 60 108 44 C 126 28 144 40 162 16 180 30",
  },
  {
    name: "Alphabot Long",
    handle: "@alphabot_long",
    market: "Perpetual Futures",
    roi: "+4.28%",
    cumulativePnl: "+2,875.83",
    copiers: "3130",
    winRate: "80.95%",
    avatarColor: "#0c0c0c",
    sparkline: "M0 100 C 22 70 44 115 66 72 C 88 30 110 72 132 40 C 154 18 168 50 180 28",
  },
];

const trendingTraders: Trader[] = [
  {
    name: "Lannister Trades",
    handle: "@lannistertrades",
    market: "Perpetual Futures",
    roi: "+1443.14%",
    cumulativePnl: "+128,239.12",
    copiers: "22380",
    winRate: "78.12%",
    avatarColor: "#0c0c0c",
    sparkline: "M0 88 C 20 60 40 120 60 76 C 80 32 100 80 120 54 C 140 28 160 50 180 24",
  },
  {
    name: "Tony-Bro",
    handle: "@tony_bro",
    market: "Perpetual Futures",
    roi: "+229.35%",
    cumulativePnl: "+66,437.55",
    copiers: "4057",
    winRate: "86.44%",
    avatarColor: "#0c0c0c",
    sparkline: "M0 90 C 20 30 40 110 60 80 C 80 50 100 70 120 40 C 140 10 160 30 180 20",
  },
  {
    name: "Juidy99",
    handle: "@juidy99",
    market: "Perpetual Futures",
    roi: "+43.87%",
    cumulativePnl: "+9,874.10",
    copiers: "992",
    winRate: "80.95%",
    avatarColor: "#0c0c0c",
    sparkline: "M0 96 C 20 66 40 110 60 82 C 80 54 100 64 120 44 C 140 24 160 52 180 34",
  },
];

const filters = [
  "Comprehensive Rankings",
  "Account Level",
  "Account Assets",
  "Copiers",
  "30D ROI",
  "Cumulative PnL",
  "Cumulative Earnings of Copiers",
];

const metricCards = [
  { label: "Cumulative PnL", key: "cumulativePnl" as const },
  { label: "Copiers", key: "copiers" as const },
  { label: "Win Ratio", key: "winRate" as const },
];

const getInitials = (name: string) =>
  name
    .split(/[\s_]+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TradePage = () => {
  return (
    <div className="space-y-10 text-[#0c0c0c]">
      <section className="relative overflow-hidden rounded-[36px] border border-black/5 bg-gradient-to-br from-[#0c0c0c] via-[#0f1b1a] to-[#0b2a2a] p-8 text-white shadow-[0_50px_120px_-80px_rgba(3,18,18,0.9)]">
        <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-[#dfff3f]/15 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#1cd6c3]/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              Trade · Copy strategies
            </p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Copy global elite traders
            </h1>
            <p className="mt-3 text-sm text-white/70">
              Established 11,328,024 copy relationships across markets.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#dfff3f] px-5 py-2.5 text-sm font-semibold text-[#0c0c0c] shadow-[0_18px_40px_-25px_rgba(198,214,20,0.7)] transition hover:-translate-y-0.5">
                Become a trader
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                Copy trading guide
              </button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[320px]">
            <div className="absolute -right-6 top-6 h-32 w-32 rounded-full border border-white/10 bg-white/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-white shadow-[0_35px_90px_-60px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfff3f] text-lg font-semibold text-[#0c0c0c] shadow-[0_18px_40px_-26px_rgba(198,214,20,0.7)]">
                  B
                </div>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  Top signal
                </span>
              </div>
              <p className="mt-5 text-sm text-white/70">
                Portfolio momentum signals reaching new highs.
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-semibold">+182.9%</span>
                <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                  30D ROI
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between text-xs text-white/60">
                <span>Copiers</span>
                <span className="text-sm font-semibold text-white">52,811</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">All traders</h2>
          <button className="text-sm font-semibold text-[#0c0c0c] underline decoration-[#dfff3f] underline-offset-4">
            See all
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={[
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                index === 0
                  ? "border-[#0c0c0c]/10 bg-white text-[#0c0c0c] shadow-sm"
                  : "border-black/5 bg-[#f7f8fa] text-[#4b4f5c] hover:text-[#0c0c0c]",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
          <button className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#0c0c0c] shadow-sm">
            Filter
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredTraders.map((trader) => (
            <article
              key={trader.name}
              className="group relative overflow-hidden rounded-[32px] border border-black/5 bg-gradient-to-br from-[#0c0c0c] via-[#0f1a1a] to-[#0b2a2a] p-6 text-white shadow-[0_35px_90px_-60px_rgba(0,0,0,0.85)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(223,255,63,0.18),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: trader.avatarColor }}
                >
                  {getInitials(trader.name)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{trader.name}</h3>
                  <p className="text-xs text-white/60">{trader.market}</p>
                </div>
                <button className="rounded-full bg-[#dfff3f] px-4 py-1 text-xs font-semibold text-[#0c0c0c] shadow-[0_16px_40px_-26px_rgba(198,214,20,0.7)]">
                  Copy
                </button>
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  30D ROI
                </p>
                <p className="mt-2 text-2xl font-semibold">{trader.roi}</p>
              </div>
              <div className="relative mt-4 h-20">
                <svg
                  viewBox="0 0 180 120"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <path
                    d={trader.sparkline}
                    fill="none"
                    stroke="rgba(223,255,63,0.9)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d={`${trader.sparkline} L180 120 L0 120 Z`}
                    fill="rgba(223,255,63,0.08)"
                  />
                </svg>
              </div>
              <dl className="mt-4 grid grid-cols-3 gap-3 text-xs">
                {metricCards.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <dt className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                      {metric.label}
                    </dt>
                    <dd className="mt-2 text-sm font-semibold text-white">
                      {trader[metric.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Trending traders</h2>
          <button className="text-sm font-semibold text-[#0c0c0c] underline decoration-[#dfff3f] underline-offset-4">
            See all
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {trendingTraders.map((trader) => (
            <article
              key={trader.handle}
              className="relative overflow-hidden rounded-[32px] border border-black/5 bg-gradient-to-br from-[#0c0c0c] via-[#0f1717] to-[#0b2525] p-6 text-white shadow-[0_35px_90px_-60px_rgba(0,0,0,0.85)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: trader.avatarColor }}
                >
                  {getInitials(trader.name)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{trader.name}</h3>
                  <p className="text-xs text-white/60">{trader.market}</p>
                </div>
                <button className="rounded-full bg-[#dfff3f] px-4 py-1 text-xs font-semibold text-[#0c0c0c] shadow-[0_16px_40px_-26px_rgba(198,214,20,0.7)]">
                  Copy
                </button>
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  30D ROI
                </p>
                <p className="mt-2 text-2xl font-semibold">{trader.roi}</p>
              </div>
              <div className="relative mt-4 h-20">
                <svg
                  viewBox="0 0 180 120"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <path
                    d={trader.sparkline}
                    fill="none"
                    stroke="rgba(223,255,63,0.9)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d={`${trader.sparkline} L180 120 L0 120 Z`}
                    fill="rgba(223,255,63,0.08)"
                  />
                </svg>
              </div>
              <dl className="mt-4 grid grid-cols-3 gap-3 text-xs">
                {metricCards.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <dt className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                      {metric.label}
                    </dt>
                    <dd className="mt-2 text-sm font-semibold text-white">
                      {trader[metric.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TradePage;
