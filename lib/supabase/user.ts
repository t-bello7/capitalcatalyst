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
