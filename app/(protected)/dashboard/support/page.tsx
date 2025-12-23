import {
  AlertTriangle,
  ArrowLeftRight,
  Banknote,
  FileLock2,
  Globe2,
  Headset,
  ShieldCheck,
  UserCircle2,
  Wallet,
} from "lucide-react";

type SupportCategory = {
  title: string;
  description: string;
  icon: typeof UserCircle2;
};

type SupportIssue = {
  title: string;
  detail: string;
};

const categories: SupportCategory[] = [
  {
    title: "Account access",
    description: "Login issues, 2FA resets, and password recovery.",
    icon: UserCircle2,
  },
  {
    title: "Deposits",
    description: "Pending deposits, bank transfers, and on-chain delays.",
    icon: Banknote,
  },
  {
    title: "Withdrawals",
    description: "Withdrawal limits, approvals, and settlement times.",
    icon: Wallet,
  },
  {
    title: "Copy trading",
    description: "Sync issues, allocation changes, and slippage alerts.",
    icon: ArrowLeftRight,
  },
  {
    title: "Security",
    description: "Device verification, suspicious activity, account lock.",
    icon: ShieldCheck,
  },
  {
    title: "Disputes & fraud",
    description: "Chargebacks, unauthorized transactions, evidence upload.",
    icon: AlertTriangle,
  },
  {
    title: "Compliance",
    description: "KYC review status, documents, and verification errors.",
    icon: FileLock2,
  },
  {
    title: "International",
    description: "Country availability, taxes, and local payment rails.",
    icon: Globe2,
  },
];

const issues: SupportIssue[] = [
  {
    title: "My withdrawal is pending",
    detail:
      "Most withdrawals clear within 2 hours. Bank transfers can take 1-3 business days depending on your region.",
  },
  {
    title: "Deposit shows completed but balance is missing",
    detail:
      "Balances update after network confirmations. If more than 30 minutes have passed, submit the transaction ID.",
  },
  {
    title: "Copy trade is out of sync",
    detail:
      "Check if your allocation dropped below the trader minimum. Sync delays can happen during high volatility.",
  },
  {
    title: "Account locked after login",
    detail:
      "We lock accounts after suspicious attempts. Verify your device and reset security settings to restore access.",
  },
];

const SupportPage = () => {
  return (
    <div className="space-y-8 text-[#0c0c0c]">
      <section className="relative overflow-hidden rounded-[32px] border border-black/5 bg-gradient-to-br from-[#e6f7f4] via-[#f2fbf9] to-white p-8 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.6)]">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#dfff3f]/40 blur-3xl" />
        <div className="absolute -right-16 bottom-6 h-56 w-56 rounded-full bg-[#bfeee7] blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Support center
            </p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
              How can we help you today?
            </h1>
            <p className="mt-3 text-sm text-[#7d838d]">
              Get help with funding, copy trading, security, and account
              verification.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex w-full max-w-[420px] items-center gap-2 rounded-full border border-black/5 bg-white/90 px-3 py-2 shadow-inner shadow-black/5">
                <span className="rounded-full bg-[#f7f8fa] px-3 py-1 text-xs font-semibold text-[#7d838d]">
                  Search
                </span>
                <input
                  className="flex-1 bg-transparent text-sm text-[#0c0c0c] outline-none placeholder:text-[#9aa1ad]"
                  placeholder="Search issues, topics, and articles"
                />
                <button className="rounded-full bg-[#0c0c0c] px-4 py-2 text-xs font-semibold text-white">
                  Find help
                </button>
              </div>
              <button className="rounded-full border border-black/10 px-5 py-2 text-sm font-semibold hover:-translate-y-0.5">
                Open a ticket
              </button>
            </div>
          </div>
          <div className="rounded-[28px] border border-black/5 bg-white/80 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0c0c0c] text-white shadow-[0_20px_40px_-26px_rgba(0,0,0,0.55)]">
                <Headset className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Priority support</p>
                <p className="text-xs text-[#7d838d]">
                  Average response time: 8 minutes
                </p>
              </div>
            </div>
            <div className="mt-5 rounded-[20px] border border-black/5 bg-[#f7f8fa] px-4 py-4 text-sm">
              <p className="font-semibold">Live status</p>
              <p className="mt-2 text-xs text-[#7d838d]">
                All systems operational · Withdrawals processing normally
              </p>
              <button className="mt-3 text-xs font-semibold text-[#0c0c0c] underline decoration-[#dfff3f] underline-offset-4">
                View status page
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Popular topics</h2>
          <button className="text-sm font-semibold text-[#0c0c0c] underline decoration-[#dfff3f] underline-offset-4">
            See all articles
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.title}
                className="rounded-[28px] border border-black/5 bg-white/90 p-5 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7f8fa] text-[#0c0c0c] shadow-inner shadow-black/5">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-[#7d838d]">
                  {category.description}
                </p>
                <button className="mt-4 text-sm font-semibold text-[#0c0c0c] underline decoration-[#dfff3f] underline-offset-4">
                  Explore
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.8)]">
          <h2 className="text-2xl font-semibold">Issues we resolve fast</h2>
          <p className="mt-2 text-sm text-[#7d838d]">
            Quick answers to the most common finance support requests.
          </p>
          <div className="mt-6 space-y-4">
            {issues.map((issue) => (
              <details
                key={issue.title}
                className="rounded-[24px] border border-black/5 bg-[#f7f8fa] px-5 py-4"
              >
                <summary className="cursor-pointer text-sm font-semibold">
                  {issue.title}
                </summary>
                <p className="mt-3 text-sm text-[#7d838d]">
                  {issue.detail}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-black/5 bg-[#0c0c0c] p-6 text-white shadow-[0_35px_90px_-60px_rgba(0,0,0,0.8)]">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Urgent help
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Report suspicious activity
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Freeze your account and contact our security team immediately.
            </p>
            <button className="mt-5 w-full rounded-full bg-[#dfff3f] px-4 py-2 text-sm font-semibold text-[#0c0c0c] shadow-[0_20px_60px_-35px_rgba(198,214,20,0.6)]">
              Freeze account
            </button>
          </div>

          <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.8)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Contact
            </p>
            <h3 className="mt-3 text-xl font-semibold">Talk to support</h3>
            <p className="mt-2 text-sm text-[#7d838d]">
              Our specialists are available 24/7 for account or trading issues.
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-[20px] border border-black/5 bg-[#f7f8fa] px-4 py-3">
                <span className="font-semibold">Live chat</span>
                <span className="text-xs text-[#7d838d]">~8 min</span>
              </div>
              <div className="flex items-center justify-between rounded-[20px] border border-black/5 bg-[#f7f8fa] px-4 py-3">
                <span className="font-semibold">Email support</span>
                <span className="text-xs text-[#7d838d]">2-4 hrs</span>
              </div>
              <div className="flex items-center justify-between rounded-[20px] border border-black/5 bg-[#f7f8fa] px-4 py-3">
                <span className="font-semibold">Phone callback</span>
                <span className="text-xs text-[#7d838d]">Same day</span>
              </div>
            </div>
            <button className="mt-5 w-full rounded-full bg-[#0c0c0c] px-4 py-2 text-sm font-semibold text-white shadow-[0_20px_60px_-35px_rgba(0,0,0,0.6)]">
              Contact support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
