"use client";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const searchParams = useSearchParams();
  const refFromQuery = searchParams.get("ref") ?? "";
  const [refCode, setRefCode] = useState(refFromQuery);
  const [humanCheck, setHumanCheck] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (refFromQuery && !refCode) {
      setRefCode(refFromQuery);
    }
  }, [refFromQuery, refCode]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (!humanCheck) {
      setError("Please confirm you are human.");
      setIsLoading(false);
      return;
    }

    try {
      const metadata: Record<string, string> = {
        first_name: firstName,
        last_name: lastName,
      };

      if (refCode.trim()) {
        metadata.referrer_code = refCode.trim();
      }

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
          emailRedirectTo: `${window.location.origin}/protected`,
        },
      });
      if (error) throw error;
      router.push("/sign-up-success");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="relative overflow-hidden rounded-[28px] border-none bg-white/90 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.4)] backdrop-blur-sm ring-1 ring-black/5">
        <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c] to-[#dfff3f]" />
        <CardHeader className="space-y-3 pb-2 pt-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f4f5f7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0c0c0c]">
            <span className="h-2 w-2 rounded-full bg-[#dfff3f]" />
            Onboarding
          </div>
          <CardTitle className="text-3xl leading-tight text-[#0c0c0c] md:text-[34px]">
            Create your Capital Catalyst profile
          </CardTitle>
          <CardDescription className="text-base text-[#4b4f5c]">
            Secure your access to live insights, smart alerts, and streamlined investing tools.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                  className="h-12 rounded-2xl border-none bg-[#f7f8fa] px-4 text-[15px] text-[#0c0c0c] shadow-inner shadow-black/5 focus-visible:ring-2 focus-visible:ring-[#0c0c0c] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                  className="h-12 rounded-2xl border-none bg-[#f7f8fa] px-4 text-[15px] text-[#0c0c0c] shadow-inner shadow-black/5 focus-visible:ring-2 focus-visible:ring-[#0c0c0c] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="h-12 rounded-2xl border-none bg-[#f7f8fa] px-4 text-[15px] text-[#0c0c0c] shadow-inner shadow-black/5 focus-visible:ring-2 focus-visible:ring-[#0c0c0c] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              />
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="country">Select Country</Label>
                <select
                  id="country"
                  className="h-12 rounded-2xl border-none bg-[#f7f8fa] px-4 text-[15px] text-[#0c0c0c] shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c] focus:ring-offset-2 focus:ring-offset-white"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="UAE">UAE</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 555 0100"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                  className="h-12 rounded-2xl border-none bg-[#f7f8fa] px-4 text-[15px] text-[#0c0c0c] shadow-inner shadow-black/5 focus-visible:ring-2 focus-visible:ring-[#0c0c0c] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="gender">Gender</Label>
                <select
                  id="gender"
                  className="h-12 rounded-2xl border-none bg-[#f7f8fa] px-4 text-[15px] text-[#0c0c0c] shadow-inner shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0c0c0c] focus:ring-offset-2 focus:ring-offset-white"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="nonbinary">Non-binary</option>
                  <option value="prefer-not">Prefer not to say</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  autoComplete="street-address"
                  className="h-12 rounded-2xl border-none bg-[#f7f8fa] px-4 text-[15px] text-[#0c0c0c] shadow-inner shadow-black/5 focus-visible:ring-2 focus-visible:ring-[#0c0c0c] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  className="h-12 rounded-2xl border-none bg-[#f7f8fa] px-4 text-[15px] text-[#0c0c0c] shadow-inner shadow-black/5 focus-visible:ring-2 focus-visible:ring-[#0c0c0c] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="repeat-password">Confirm Password</Label>
                <Input
                  id="repeat-password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  autoComplete="new-password"
                  className="h-12 rounded-2xl border-none bg-[#f7f8fa] px-4 text-[15px] text-[#0c0c0c] shadow-inner shadow-black/5 focus-visible:ring-2 focus-visible:ring-[#0c0c0c] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="refcode">Referral code (optional)</Label>
              <Input
                id="refcode"
                placeholder="Enter referral code"
                value={refCode}
                onChange={(e) => setRefCode(e.target.value)}
                autoComplete="off"
                className="h-12 rounded-2xl border-none bg-[#f7f8fa] px-4 text-[15px] text-[#0c0c0c] shadow-inner shadow-black/5 focus-visible:ring-2 focus-visible:ring-[#0c0c0c] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              />
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-[#e8eaef] bg-[#f7f8fa] px-4 py-3.5 shadow-inner shadow-black/5">
              <input
                id="human"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded-md border-[#c6cad3] text-[#0c0c0c] accent-[#0c0c0c] focus:ring-[#0c0c0c]"
                checked={humanCheck}
                onChange={(e) => setHumanCheck(e.target.checked)}
              />
              <div className="text-sm">
                <Label htmlFor="human" className="cursor-pointer text-[#0c0c0c]">
                  I am human
                </Label>
                <p className="text-xs text-[#4f5664]">A quick verification to keep accounts safe.</p>
              </div>
            </div>

            {error && <p className="text-sm text-rose-500">{error}</p>}

            <Button
              type="submit"
              className="w-full rounded-full bg-[#0c0c0c] px-6 py-3 text-base font-semibold text-white shadow-[0_25px_65px_-35px_rgba(0,0,0,0.75)] transition-transform hover:-translate-y-0.5 hover:bg-[#111] focus-visible:ring-[#dfff3f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              disabled={isLoading}
            >
              {isLoading ? "Creating an account..." : "Sign Up"}
            </Button>
            <div className="text-center text-sm text-[#4b4f5c]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#0c0c0c] underline decoration-[#dfff3f] underline-offset-4"
              >
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
