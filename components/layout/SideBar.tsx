"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ElementType } from "react";
import { useState } from "react";
import {
  LayoutDashboard,
  ArrowDownToLine,
  ArrowUpToLine,
  Clock3,
  Coins,
  LineChart,
  Users,
  LifeBuoy,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/brand/Logo";

type NavItem = {
  label: string;
  href: string;
  icon: ElementType;
};

const NAV_SECTIONS: { title: string; items: NavItem[] }[] = [
  {
    title: "Finance Management",
    items: [
    //   { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "Deposit", href: "/dashboard/deposit", icon: ArrowDownToLine },
      { label: "Withdraw", href: "/dashboard/withdraw", icon: ArrowUpToLine },
      { label: "Transactions", href: "/dashboard/transactions", icon: Clock3 },
    ],
  },
  {
    title: "Trading & Investments",
    items: [
      { label: "Trade", href: "/dashboard/trade", icon: Coins },
      { label: "My Trades", href: "/dashboard/my-trade", icon: LineChart },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Referrals", href: "/dashboard/referrals", icon: Users },
      { label: "Support", href: "/dashboard/support", icon: LifeBuoy },
    ],
  },
];

const USER_PROFILE = {
  firstName: "Hannah",
  fullName: "Hannah Rivera",
  role: "Copy trader",
};

const SideBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={cn(
        "sticky top-4 z-30 flex min-h-[calc(100vh-32px)] max-h-[calc(100vh-32px)] flex-col rounded-[32px] border border-black/5 bg-white/95 p-5 text-[#0c0c0c] shadow-[0_35px_90px_-60px_rgba(0,0,0,0.8)] ring-1 ring-black/5 backdrop-blur transition-[width] duration-300",
        "flex-shrink-0",
        isOpen ? "w-[260px]" : "w-[92px]",
      )}
    >
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <LogoMark className="h-11 w-11" />
          {isOpen && (
            <div className="transition-opacity duration-200">
              <p className="text-lg font-semibold leading-tight">
                Capital Catalyst
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                Control deck
              </p>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white text-[#0c0c0c] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f4f5f7]"
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
      </div>

      <div
        className={cn(
          "mb-6 flex items-center gap-3 rounded-[24px] border border-black/5 bg-[#f7f8fa] px-3 py-3 shadow-inner shadow-black/5",
          !isOpen && "justify-center px-2",
        )}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#dfff3f] via-[#c5f63b] to-[#0c0c0c] text-sm font-semibold text-[#0c0c0c]">
          {USER_PROFILE.firstName.slice(0, 1)}
        </div>
        {isOpen && (
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#0c0c0c]">
              {USER_PROFILE.fullName}
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              {USER_PROFILE.role}
            </p>
          </div>
        )}
      </div>

      <nav
        className={cn(
          "flex-1 space-y-7 overflow-y-auto pr-1 text-sm",
          !isOpen && "text-center sm:text-left",
        )}
        aria-label="Primary"
      >
    <Link
        key={"/dashboard"}
        href={"/dashboard"}
        className={cn(
            "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all",
            "text-[#4b4f5c] hover:bg-[#f2f3f7] hover:text-[#0c0c0c]",
            pathname === "/dashboard" &&
            "bg-[#e8f8ec] text-[#0c0c0c] ring-1 ring-[#b5ebc7]",
            !isOpen && "justify-center gap-0 px-0",
        )}
        >
        <LayoutDashboard className="h-4 w-4 shrink-0" />
        {isOpen && <span className="truncate">Dashboard</span>}
        </Link>
        {NAV_SECTIONS.map((section) => (
          <div key={section.title} className="space-y-3">
            {isOpen && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8c92a3]">
                {section.title}
              </p>
            )}
          
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all",
                      "text-[#4b4f5c] hover:bg-[#f2f3f7] hover:text-[#0c0c0c]",
                      isActive &&
                        "bg-[#e8f8ec] text-[#0c0c0c] ring-1 ring-[#b5ebc7]",
                      !isOpen && "justify-center gap-0 px-0",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {isOpen && <span className="truncate">{item.label}</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* <div className="pt-6">
        <div className="rounded-3xl bg-[#f7f8fa] p-4">
          <div className="flex items-center justify-between gap-3">
            {isOpen ? (
              <div>
                <p className="text-sm font-semibold text-[#0c0c0c]">
                  Dark mode
                </p>
                <p className="text-xs text-[#7d838d]">
                  Synced with your system
                </p>
              </div>
            ) : (
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#7d838d]">
                Mode
              </span>
            )}
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#0c0c0c]/15">
              <span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-white shadow transition-transform" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="pt-6">
        <button
          type="button"
          className={cn(
            "flex w-full items-center gap-3 rounded-2xl border border-black/10 bg-white px-3 py-2.5 text-sm font-semibold text-[#0c0c0c] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f4f5f7]",
            !isOpen && "justify-center px-0",
          )}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {isOpen && <span className="truncate">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
