"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export type ReferralRow = {
  firstName: string;
  role?: string;
  email: string;
  joinedDate: string;
  joinedTime: string;
  earned: string;
  avatarColor?: string;
};

export function ReferralTable({ data }: { data: ReferralRow[] }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-black/5">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-[#f7f8fa] text-xs font-semibold uppercase tracking-[0.25em] text-[#878c9b]">
          <tr>
            <th className="px-4 py-3 font-semibold">First Name</th>
            <th className="px-4 py-3 font-semibold">Date joined</th>
            <th className="px-4 py-3 font-semibold">Earned</th>
          </tr>
        </thead>
        <tbody className="bg-white text-[#0c0c0c]">
          {data.map((row) => (
            <tr
              key={`${row.firstName}-${row.email}`}
              className="border-t border-black/5 transition hover:bg-[#f9fafb]"
            >
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white",
                      )}
                      style={{
                        background: row.avatarColor || "#0c0c0c",
                      }}
                    >
                      {row.firstName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold leading-tight">
                        {row.firstName}
                      </p>
                      <p className="text-xs text-[#7d838d]">
                        {row.role ?? "Investor"}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <p className="font-medium text-[#0c0c0c]">{row.joinedDate}</p>
                <p className="text-xs text-[#7d838d]">{row.joinedTime}</p>
              </td>
              <td className="px-4 py-4">
                <p className="font-semibold text-emerald-600">{row.earned}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
