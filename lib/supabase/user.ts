import type { SupabaseClient, User } from "@supabase/supabase-js";

export type UserProfile = {
  firstName: string;
  lastName: string;
  fullName: string;
  initials: string;
  displayName: string;
};

const buildProfile = (user: User | null): UserProfile => {
  const metadata = (user?.user_metadata ?? {}) as Record<string, unknown>;
  const firstName =
    (metadata.first_name as string | undefined) ||
    (metadata.firstName as string | undefined) ||
    "";
  const lastName =
    (metadata.last_name as string | undefined) ||
    (metadata.lastName as string | undefined) ||
    "";
  const fullName = [firstName, lastName].filter(Boolean).join(" ").trim();
  const fallbackName = user?.email?.split("@")[0] ?? "Investor";
  const displayName = fullName || fallbackName;
  const initials = displayName
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return {
    firstName,
    lastName,
    fullName,
    initials,
    displayName,
  };
};

export const getUserProfile = async (
  supabase: SupabaseClient,
): Promise<UserProfile> => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    return buildProfile(null);
  }

  return buildProfile(data.user);
};

export const getUserAvailableBalance = async (
  supabase: SupabaseClient,
): Promise<number> => {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    return 0;
  }

  const { data: wallet, error: walletError } = await supabase
    .from("wallets")
    .select("balance")
    .eq("user_id", data.user.id)
    .single();

  if (walletError || !wallet) {
    return 0;
  }

  return typeof wallet.balance === "number"
    ? wallet.balance
    : Number(wallet.balance ?? 0);
};

export const getUserBalances = async (
  supabase: SupabaseClient,
): Promise<{ available: number; locked: number }> => {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    return { available: 0, locked: 0 };
  }

  const { data: wallet, error: walletError } = await supabase
    .from("wallets")
    .select("balance, locked_balance")
    .eq("user_id", data.user.id)
    .single();

  if (walletError || !wallet) {
    return { available: 0, locked: 0 };
  }

  return {
    available:
      typeof wallet.balance === "number"
        ? wallet.balance
        : Number(wallet.balance ?? 0),
    locked:
      typeof wallet.locked_balance === "number"
        ? wallet.locked_balance
        : Number(wallet.locked_balance ?? 0),
  };
};
