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
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      // Update this route to redirect to an authenticated route. The user already has an active session.
      router.push("/protected");
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
            Login
          </div>
          <CardTitle className="text-3xl leading-tight text-[#0c0c0c] md:text-[34px]">
            Welcome back to Capital Catalyst
          </CardTitle>
          <CardDescription className="text-base text-[#4b4f5c]">
            Enter your credentials to access insights, alerts, and portfolio tools.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
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
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm font-semibold text-[#0c0c0c] underline decoration-[#dfff3f] underline-offset-4"
                >
                  Forgot Password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="h-12 rounded-2xl border-none bg-[#f7f8fa] px-4 text-[15px] text-[#0c0c0c] shadow-inner shadow-black/5 focus-visible:ring-2 focus-visible:ring-[#0c0c0c] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-[#1f2435]">
              <label className="flex items-center gap-2 text-[#4b4f5c]">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded-md border-[#c6cad3] text-[#0c0c0c] accent-[#0c0c0c] focus:ring-[#0c0c0c]"
                />
                Remember this device
              </label>
              <span className="text-xs text-[#6b7289]">Secure sign-in</span>
            </div>

            {error && <p className="text-sm text-rose-500">{error}</p>}

            <Button
              type="submit"
              className="w-full rounded-full bg-[#0c0c0c] px-6 py-3 text-base font-semibold text-white shadow-[0_25px_65px_-35px_rgba(0,0,0,0.75)] transition-transform hover:-translate-y-0.5 hover:bg-[#111] focus-visible:ring-[#dfff3f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Sign In"}
            </Button>
            <div className="text-center text-sm text-[#4b4f5c]">
              New to Capital Catalyst?{" "}
              <Link href="/signup" className="font-semibold text-[#0c0c0c] underline decoration-[#dfff3f] underline-offset-4">
                Create an account
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
