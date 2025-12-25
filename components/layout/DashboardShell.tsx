"use client";

import { useEffect, useState } from "react";
import { SideBar } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { createClient } from "@/lib/supabase/client";
import { getUserProfile } from "@/lib/supabase/user";

type ProfileState = {
  firstName: string;
  lastName: string;
  fullName: string;
  initials: string;
  displayName: string;
  avatarUrl: string;
  kycVerified: boolean;
  kycInfo: string;
};

const DashboardShell = ({ children }: { children: React.ReactNode }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profile, setProfile] = useState<ProfileState>({
    firstName: "",
    lastName: "",
    fullName: "",
    initials: "CC",
    displayName: "Investor",
    avatarUrl: "",
    kycVerified: false,
    kycInfo: "KYC information filed",
  });

  useEffect(() => {
    let isMounted = true;

    const loadProfile = async () => {
      const supabase = createClient();
      const data = await getUserProfile(supabase);
      if (isMounted) {
        setProfile((prev) => ({
          ...prev,
          firstName: data.firstName,
          lastName: data.lastName,
          fullName: data.fullName,
          initials: data.initials || "CC",
          displayName: data.displayName,
        }));
      }
    };

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex w-full gap-6 text-[#0c0c0c]">
      <SideBar profile={profile} onProfileClick={() => setIsProfileOpen(true)} />
      <div className="min-w-0 flex-1 rounded-[32px] border border-black/5 bg-white/80 p-6 shadow-[0_35px_80px_-55px_rgba(0,0,0,0.8)] backdrop-blur-sm">
        {children}
      </div>

      <Dialog
        open={isProfileOpen}
        onOpenChange={(open) => {
          setIsProfileOpen(open);
          if (!open) {
            setIsEditingProfile(false);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
              Profile
            </p>
            <DialogTitle className="text-2xl font-semibold">
              Account details
            </DialogTitle>
          </DialogHeader>

          <div className="mt-2 flex items-center gap-4 rounded-[24px] border border-black/5 bg-[#f7f8fa] p-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#dfff3f] via-[#c5f63b] to-[#0c0c0c] text-base font-semibold text-[#0c0c0c]">
              {profile.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.avatarUrl}
                  alt={profile.displayName}
                  className="h-full w-full object-cover"
                />
              ) : (
                profile.initials
              )}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#0c0c0c]">
                {profile.fullName || profile.displayName}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                {profile.kycVerified ? "KYC verified" : "KYC pending"}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {isEditingProfile ? (
              <>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[#0c0c0c]">
                  Profile picture URL
                  <input
                    value={profile.avatarUrl}
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        avatarUrl: event.target.value,
                      }))
                    }
                    className="rounded-2xl border border-black/10 bg-[#f7f8fa] px-4 py-3 text-sm shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c]"
                    placeholder="https://"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[#0c0c0c]">
                  First name
                  <input
                    value={profile.firstName}
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        firstName: event.target.value,
                        fullName: `${event.target.value} ${prev.lastName}`.trim(),
                      }))
                    }
                    className="rounded-2xl border border-black/10 bg-[#f7f8fa] px-4 py-3 text-sm shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c]"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[#0c0c0c]">
                  Last name
                  <input
                    value={profile.lastName}
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        lastName: event.target.value,
                        fullName: `${prev.firstName} ${event.target.value}`.trim(),
                      }))
                    }
                    className="rounded-2xl border border-black/10 bg-[#f7f8fa] px-4 py-3 text-sm shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c]"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[#0c0c0c]">
                  KYC status
                  <select
                    value={profile.kycVerified ? "verified" : "pending"}
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        kycVerified: event.target.value === "verified",
                      }))
                    }
                    className="rounded-2xl border border-black/10 bg-[#f7f8fa] px-4 py-3 text-sm shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c]"
                  >
                    <option value="pending">Not verified</option>
                    <option value="verified">Verified</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[#0c0c0c]">
                  KYC information
                  <textarea
                    value={profile.kycInfo}
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        kycInfo: event.target.value,
                      }))
                    }
                    className="min-h-[90px] rounded-2xl border border-black/10 bg-[#f7f8fa] px-4 py-3 text-sm shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c]"
                  />
                </label>
              </>
            ) : (
              <>
                <div className="rounded-[20px] border border-black/5 bg-white px-4 py-3 text-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                    First name
                  </p>
                  <p className="mt-2 font-semibold text-[#0c0c0c]">
                    {profile.firstName || "—"}
                  </p>
                </div>
                <div className="rounded-[20px] border border-black/5 bg-white px-4 py-3 text-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                    Last name
                  </p>
                  <p className="mt-2 font-semibold text-[#0c0c0c]">
                    {profile.lastName || "—"}
                  </p>
                </div>
                <div className="rounded-[20px] border border-black/5 bg-white px-4 py-3 text-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                    KYC status
                  </p>
                  <p className="mt-2 font-semibold text-[#0c0c0c]">
                    {profile.kycVerified ? "Verified" : "Not verified"}
                  </p>
                </div>
                <div className="rounded-[20px] border border-black/5 bg-white px-4 py-3 text-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#7d838d]">
                    KYC information
                  </p>
                  <p className="mt-2 font-semibold text-[#0c0c0c]">
                    {profile.kycInfo || "—"}
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {isEditingProfile ? (
              <Button
                className="flex-1 rounded-full bg-[#0c0c0c] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#111]"
                onClick={() => setIsEditingProfile(false)}
              >
                Save
              </Button>
            ) : (
              <Button
                className="flex-1 rounded-full bg-[#0c0c0c] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#111]"
                onClick={() => setIsEditingProfile(true)}
              >
                Edit
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardShell;
