"use client";

import { Copy, Check, Wallet } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReferralTable, type ReferralRow } from "@/components/referrals/referral-table";
import { createClient } from "@/lib/supabase/client";
import { data } from "framer-motion/client";

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const formatTime = (value: string) =>
  new Date(value).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

const CopyButton = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl border border-[#0c0c0c]/10 bg-white px-3 py-2 text-sm font-semibold text-[#0c0c0c] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f7f8fa]",
        className,
      )}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-emerald-500" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy
        </>
      )}
    </button>
  );
};

const ReferralPage = () => {
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [referrals, setReferrals] = useState<ReferralRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  const referralLink = useMemo(() => {
    if (!referralCode) return "";
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/signup?ref=${referralCode}`;
  }, [referralCode]);

  useEffect(() => {
    let isMounted = true;
    const supabase = createClient();

    const loadReferralData = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        if (isMounted) {
          setError("Unable to load referral details.");
        }
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("referral_code")
        .eq("id", user.id)
        .single();

      if (profileError && isMounted) {
        setError("Unable to load referral code.");
      } else if (isMounted) {
        setReferralCode(profile?.referral_code ?? null);
      }

      const { data: referralRows, error: referralsError } = await supabase
        .from("referrals")
        .select("referred_id, created_at")
        .eq("referrer_id", user.id)
        .order("created_at", { ascending: false });

      if (referralsError || !referralRows) {
        if (isMounted) {
          setError("Unable to load referral list.");
          setReferrals([]);
        }
        return;
      }
      
      const referredIds = referralRows.map((row) => row.referred_id);
      let profileMap = new Map<string, { first_name: string | null }>();
      if (referredIds.length > 0) {
          const { data: referredProfiles } = await supabase
          .from("profiles")
          .select("id, first_name")
          .in("id", referredIds);

        profileMap = new Map(
          referredProfiles?.map((profile) => [
            profile.id,
            { first_name: profile.first_name },
          ]) ?? [],
        );
      }
      const mappedReferrals = referralRows.map((row, index) => {
        const referredProfile = profileMap.get(row.referred_id);
        return {
          firstName: referredProfile?.first_name || "Investor",
          role: "Investor",
          email: row.referred_id,
          joinedDate: formatDate(row.created_at),
          joinedTime: formatTime(row.created_at),
          earned: "$0",
          avatarColor: index % 2 === 0 ? "#0c0c0c" : "#dfff3f",
        } satisfies ReferralRow;
      });

      if (isMounted) {
        setReferrals(mappedReferrals);
      }
    };

    void loadReferralData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-8 text-[#0c0c0c]">
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.8)]">
        <div className="rounded-[28px] bg-gradient-to-r from-[#0c0c0c] to-[#0c0c0c] px-6 py-8 text-white shadow-[0_40px_80px_-60px_rgba(0,0,0,0.85)]">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Share & earn
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Invite your network and unlock rewards
          </h2>
          <p className="mt-2 text-sm text-white/80">
            Send your unique link or code to fellow investors and earn bonuses
            when they join Capital Catalyst.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-[24px] border border-black/5 bg-[#f7f8fa] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                Referral link
              </p>
              <div className="mt-3 flex flex-col gap-3 rounded-2xl border border-[#0c0c0c]/10 bg-white p-4 text-sm font-medium text-[#0c0c0c] shadow-inner shadow-black/5 md:flex-row md:items-center md:justify-between">
                <p className="truncate">{referralLink || "Loading..."}</p>
                {referralLink ? (
                  <CopyButton value={referralLink} />
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-[24px] border border-black/5 bg-[#fdfef5] p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                  Referral code
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[0.16em] text-[#0c0c0c]">
                  {referralCode ?? "—"}
                </p>
              </div>
              {referralCode ? (
                <CopyButton value={referralCode} className="w-full md:w-auto" />
              ) : null}
            </div>
          </div>

          <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                  Referral bonus
                </p>
                <div className="mt-4 flex flex-wrap items-end gap-3">
                  <p className="text-4xl font-semibold">$450</p>
                  <span className="rounded-full bg-[#e8f8ec] px-3 py-1 text-xs font-semibold text-emerald-600">
                    +12% this month
                  </span>
                </div>
              </div>
              <Button className="w-full rounded-2xl bg-[#0c0c0c] py-6 text-base font-semibold text-white hover:bg-[#111] md:w-auto">
                <Wallet className="mr-2 h-4 w-4" />
                Withdraw earnings
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.8)]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Your network
            </p>
            <h3 className="mt-2 text-2xl font-semibold">Referral list</h3>
          </div>
        </div>

        {error ? (
          <p className="text-sm text-rose-500">{error}</p>
        ) : null}
        <ReferralTable data={referrals} />
      </div>
    </div>
  );
};

export default ReferralPage;
