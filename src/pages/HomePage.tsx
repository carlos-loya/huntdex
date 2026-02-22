import { Crosshair, ChevronRight } from "lucide-react";

const REGIONS = [
  { value: "us", label: "Americas" },
  { value: "eu", label: "Europe" },
  { value: "kr", label: "Korea" },
  { value: "tw", label: "Taiwan" },
] as const;

export function HomePage() {
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
          {REGIONS.map((region) => (
            <button
              key={region.value}
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>

      {/* Login Button Placeholder */}
      <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
        Login with Battle.net
        <ChevronRight className="h-4 w-4" />
      </button>

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
