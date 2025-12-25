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
  }
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
            </div>
          </div>
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
