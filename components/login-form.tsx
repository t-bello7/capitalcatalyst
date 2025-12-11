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
      <Card className="border border-white/10 bg-white shadow-[0_30px_80px_-40px_rgba(20,30,60,0.25)]">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl text-[#1f2435]">Login into Account</CardTitle>
          <CardDescription className="text-[#5f6476]">
            Sign in using your email and password.
          </CardDescription>
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#9aa1b8]">
            <span className="flex-1 border-t border-[#e5e8f0]" />
            Login
            <span className="flex-1 border-t border-[#e5e8f0]" />
          </div>
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
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm font-semibold text-[#2956e3] hover:underline"
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
                className="bg-[#fffbea]"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-[#1f2435]">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-[#cbd2e4] text-[#2956e3] focus:ring-[#2956e3]"
                />
                <span className="text-[#4b5163]">Remember this Device</span>
              </label>
            </div>

            {error && <p className="text-sm text-rose-500">{error}</p>}

            <Button
              type="submit"
              className="w-full rounded-xl bg-[#2956e3] text-white hover:bg-[#1f46c1]"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Sign In"}
            </Button>
            <div className="text-center text-sm text-[#5f6476]">
              New to Capital Catalyst?{" "}
              <Link href="/auth/sign-up" className="font-semibold text-[#2956e3] hover:underline">
                Create an account
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
