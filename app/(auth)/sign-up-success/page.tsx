import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Thank you for signing up!
              </CardTitle>
              <CardDescription>Check your email to confirm</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You&apos;ve successfully signed up. Please check your email to
                confirm your account before signing in.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-stretch gap-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Ready to access your dashboard? Jump into your account to start
                exploring Capital Catalyst.
              </p>
              <Button
                asChild
                className="w-full rounded-full bg-[#0c0c0c] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_60px_-40px_rgba(0,0,0,0.85)] transition-transform hover:-translate-y-0.5 hover:bg-[#111]"
              >
                <Link href="/login">Go to login</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
