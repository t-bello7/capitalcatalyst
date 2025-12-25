import {
  ArrowDownToLine,
  ArrowUpToLine,
  CreditCard,
  LayoutDashboard,
  RefreshCcw,
  Users,
  PieChart,
  Wallet,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { getUserBalances, getUserProfile } from "@/lib/supabase/user";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

const metrics = [
  { label: "Total profit", value: "$9,855.00", icon: TrendingUp },
  { label: "Bonus", value: "$580.00", icon: CreditCard },
  { label: "Referral bonus", value: "$320.00", icon: Users },
  { label: "Withdrawals", value: "$6,200.00", icon: Wallet },
];

const quickActions = [
  { label: "Deposit", icon: ArrowDownToLine },
  { label: "Withdraw", icon: ArrowUpToLine },
  { label: "Transactions", icon: RefreshCcw },
  { label: "Referrals", icon: Users },
  { label: "Swap", icon: PieChart },
  { label: "Support", icon: LayoutDashboard },
];

const marketOverview = [
  { symbol: "AAPL", price: "$176.66", change: "+1.55%", positive: true },
  { symbol: "MSFT", price: "$379.43", change: "-0.30%", positive: false },
  { symbol: "GOOGL", price: "$142.76", change: "+0.88%", positive: true },
  { symbol: "TSLA", price: "$249.98", change: "+2.36%", positive: true },
];

const recentTransactions = [
  { amount: "$4,200.00", date: "Jun 12, 2024", type: "Deposit", status: "Completed" },
  { amount: "$2,000.00", date: "Jun 10, 2024", type: "Withdraw", status: "Pending" },
  { amount: "$650.00", date: "Jun 8, 2024", type: "Bonus", status: "Completed" },
  { amount: "$985.00", date: "Jun 4, 2024", type: "Referral", status: "Completed" },
  { amount: "$1,200.00", date: "Jun 2, 2024", type: "Trade", status: "Completed" },
];

const StatCard = ({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
}) => (
  <div className="flex flex-col gap-3 rounded-[28px] border border-black/5 bg-[#0c0c0c]/4 p-4 text-[#0c0c0c] shadow-inner shadow-black/5">
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#858b9a]">
      <Icon className="h-4 w-4 text-[#0c0c0c]" />
      {label}
    </div>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
);

const ActionButton = ({
  label,
  icon: Icon,
}: {
  label: string;
  icon: React.ElementType;
}) => (
  <button className="flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-white/90 px-6 py-5 text-sm font-semibold text-[#0c0c0c] shadow-[0_18px_60px_-45px_rgba(0,0,0,0.8)] transition hover:-translate-y-0.5">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7f8fa] text-[#0c0c0c] shadow-inner shadow-black/5">
      <Icon className="h-4 w-4" />
    </div>
    {label}
  </button>
);

const MarketCard = ({
  symbol,
  price,
  change,
  positive,
}: {
  symbol: string;
  price: string;
  change: string;
  positive: boolean;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white shadow-sm">
    <div className="flex items-center justify-between text-sm text-white/80">
      {symbol}
      <span
        className={`text-xs font-semibold ${
          positive ? "text-emerald-300" : "text-rose-300"
        }`}
      >
        {change}
      </span>
    </div>
    <p className="text-xl font-semibold">{price}</p>
  </div>
);

export default async function DashboardPage() {
  const supabase = await createClient();
  const profile = await getUserProfile(supabase);
  const greetingName = profile.displayName || "Investor";
  const { available, locked } = await getUserBalances(supabase);
  const balances = [
    {
      label: "Available balance",
      value: formatCurrency(available),
      muted: true,
    },
    { label: "Locked balance", value: formatCurrency(locked), muted: false },
  ];

  return (
    <div className="space-y-8 text-[#0c0c0c]">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.8)]">
          <div className="rounded-[28px] bg-gradient-to-br from-[#121212] via-[#1b1b1b] to-[#323232] p-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">
              Account overview
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Hello, {greetingName}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {balances.map((balance) => (
                <div key={balance.label}>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {balance.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    {balance.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <StatCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
                icon={metric.icon}
              />
            ))}
          </div>
          <Button className="mt-6 w-full rounded-2xl bg-[#0c0c0c] py-5 text-base font-semibold text-white hover:bg-[#111]">
            Trade now
          </Button>
        </div>

        <div className="rounded-[32px] border border-black/5 bg-[#0c0c0c] p-6 text-white shadow-[0_35px_90px_-60px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">
              Stock market overview
            </p>
            <div className="flex gap-2 text-xs">
              <Button size="sm" variant="secondary">
                1D
              </Button>
              <Button size="sm" variant="ghost" className="text-white">
                1W
              </Button>
              <Button size="sm" variant="ghost" className="text-white">
                1M
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {marketOverview.map((stock) => (
              <MarketCard key={stock.symbol} {...stock} />
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-white/5 p-6 shadow-inner shadow-black/20">
            <div className="flex items-center justify-between text-white/80">
              <p className="text-sm font-semibold">Apple Inc.</p>
              <span className="text-xs text-emerald-300">+2.26%</span>
            </div>
            <p className="mt-2 text-3xl font-semibold">$176.66</p>
            <div className="mt-6">
              <div className="h-32 rounded-2xl bg-gradient-to-b from-white/15 to-transparent">
                <div className="h-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                Quick actions
              </p>
              <h3 className="mt-2 text-2xl font-semibold">Manage in one tap</h3>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {quickActions.map((action) => (
              <ActionButton key={action.label} {...action} />
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                Market sentiment
              </p>
              <h3 className="mt-2 text-2xl font-semibold">Fear & Greed Index</h3>
            </div>
            <span className="rounded-full bg-[#fff4de] px-3 py-1 text-xs font-semibold text-[#d28a00]">
              Neutral
            </span>
          </div>
          <div className="mt-6">
            <div className="h-3 rounded-full bg-[#f1f3f6]">
              <div className="h-3 w-1/2 rounded-full bg-[#0c0c0c]" />
            </div>
            <div className="mt-3 flex justify-between text-xs text-[#7d838d]">
              <span>Extreme fear</span>
              <span>Extreme greed</span>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Top movers</span>
              <span className="text-xs text-[#7d838d]">Updated 2m ago</span>
            </div>
            <div className="space-y-3">
              {[
                { token: "DOGE", change: "+7.1%" },
                { token: "AVAX", change: "+4.6%" },
                { token: "DOT", change: "-2.3%" },
              ].map((asset) => (
                <div
                  key={asset.token}
                  className="flex items-center justify-between rounded-2xl border border-black/5 bg-[#f7f8fa] px-4 py-3 text-sm font-semibold"
                >
                  <span>{asset.token}</span>
                  <span
                    className={
                      asset.change.startsWith("+")
                        ? "text-emerald-600"
                        : "text-rose-500"
                    }
                  >
                    {asset.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.8)]">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Recent transactions
            </p>
            <h3 className="mt-2 text-2xl font-semibold">Your latest activity</h3>
          </div>
          <Button variant="outline" className="rounded-full">
            View all
          </Button>
        </div>
        <div className="overflow-hidden rounded-[24px] border border-black/5">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#f7f8fa] text-xs font-semibold uppercase tracking-[0.3em] text-[#878c9b]">
              <tr>
                <th className="px-4 py-3 font-semibold">Amount</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white text-[#0c0c0c]">
              {recentTransactions.map((tx) => (
                <tr
                  key={`${tx.amount}-${tx.date}`}
                  className="border-t border-black/5 transition hover:bg-[#f9fafb]"
                >
                  <td className="px-4 py-4 font-semibold">{tx.amount}</td>
                  <td className="px-4 py-4 text-[#4b4f5c]">{tx.date}</td>
                  <td className="px-4 py-4">{tx.type}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        tx.status === "Completed"
                          ? "bg-[#e8f8ec] text-emerald-600"
                          : "bg-[#fff4de] text-[#d28a00]"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
