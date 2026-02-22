import { Crosshair } from "lucide-react";
import { Navigate } from "react-router";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/LoginButton";
import { useAuthStore, type Region } from "@/stores/auth-store";

const REGIONS: { value: Region; label: string }[] = [
  { value: "us", label: "Americas" },
  { value: "eu", label: "Europe" },
  { value: "kr", label: "Korea" },
  { value: "tw", label: "Taiwan" },
];

export function HomePage() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const region = useAuthStore((s) => s.region);
  const setRegion = useAuthStore((s) => s.setRegion);

  if (isAuthenticated()) {
    return <Navigate to="/characters" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 py-24">
      {/* Hero */}
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/30">
          <Crosshair className="h-10 w-10 text-primary" />
        </div>
        <h1 className="mb-3 text-5xl font-bold tracking-tight text-foreground">
          Hunt<span className="text-primary">dex</span>
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          Track your World of Warcraft hunter pet collection.
          Gotta tame &apos;em all.
        </p>
      </div>

      {/* Region Selector */}
      <div className="mb-8 flex flex-col items-center gap-4">
        <p className="text-sm font-medium text-muted-foreground">Select your region</p>
        <div className="flex gap-2">
          {REGIONS.map((r) => (
            <button
              key={r.value}
              onClick={() => setRegion(r.value)}
              className={cn(
                "rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
                region === r.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-foreground hover:border-primary hover:text-primary",
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Login */}
      <LoginButton />

      {/* Features */}
      <div className="mt-20 grid max-w-3xl gap-8 sm:grid-cols-3">
        <div className="text-center">
          <div className="mb-2 text-3xl">🎯</div>
          <h3 className="mb-1 font-semibold text-foreground">Track Progress</h3>
          <p className="text-sm text-muted-foreground">
            See which pet families you&apos;ve collected and which ones you still need.
          </p>
        </div>
        <div className="text-center">
          <div className="mb-2 text-3xl">🔍</div>
          <h3 className="mb-1 font-semibold text-foreground">Filter &amp; Search</h3>
          <p className="text-sm text-muted-foreground">
            Find pets by family, specialization, or exotic status.
          </p>
        </div>
        <div className="text-center">
          <div className="mb-2 text-3xl">📊</div>
          <h3 className="mb-1 font-semibold text-foreground">Completion Stats</h3>
          <p className="text-sm text-muted-foreground">
            Track your overall completion percentage across all families.
          </p>
        </div>
      </div>
    </div>
  );
}
