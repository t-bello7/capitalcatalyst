"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ElementType } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  Map,
  Users,
  Tag,
  CreditCard,
  DollarSign,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  icon: ElementType;
};

const NAV_SECTIONS: { title: string; items: NavItem[] }[] = [
  {
    title: "Marketing",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "Marketplace", href: "/dashboard/marketplace", icon: ShoppingCart },
      { label: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
      { label: "Tracking", href: "/dashboard/tracking", icon: Map },
      { label: "Customers", href: "/dashboard/customers", icon: Users },
      { label: "Discounts", href: "/dashboard/discounts", icon: Tag },
    ],
  },
  {
    title: "Payments",
    items: [
      { label: "Ledger", href: "/dashboard/ledger", icon: CreditCard },
      { label: "Taxes", href: "/dashboard/taxes", icon: DollarSign },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Settings", href: "/dashboard/settings", icon: Settings },
    ],
  },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:w-64 xl:w-72 flex-col rounded-[32px] bg-white/90 p-6 text-[#0c0c0c] shadow-[0_35px_90px_-60px_rgba(0,0,0,0.8)] ring-1 ring-black/5 backdrop-blur">
      <div className="mb-8 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0c0c0c] text-base font-semibold uppercase tracking-tight text-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)]">
          CC
        </span>
        <div>
          <p className="text-lg font-semibold leading-tight">Capital Catalyst</p>
          <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
            Control deck
          </p>
        </div>
      </div>

      <nav className="space-y-8 text-sm">
        {NAV_SECTIONS.map((section) => (
          <div key={section.title} className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8c92a3]">
              {section.title}
            </p>
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
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-6">
        <div className="rounded-3xl bg-[#f7f8fa] p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8c92a3]">
            System
          </p>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#0c0c0c]">Dark mode</p>
              <p className="text-xs text-[#7d838d]">Coming soon</p>
            </div>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#0c0c0c]/15">
              <span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-white shadow transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
