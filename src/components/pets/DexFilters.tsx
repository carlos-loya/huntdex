import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export type CollectedFilter = "all" | "collected" | "uncollected";
export type SpecFilter = "all" | "ferocity" | "tenacity" | "cunning";

interface DexFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  collectedFilter: CollectedFilter;
  onCollectedFilterChange: (value: CollectedFilter) => void;
  specFilter: SpecFilter;
  onSpecFilterChange: (value: SpecFilter) => void;
  exoticOnly: boolean;
  onExoticOnlyChange: (value: boolean) => void;
}

const COLLECTED_OPTIONS: { value: CollectedFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "collected", label: "Collected" },
  { value: "uncollected", label: "Missing" },
];

const SPEC_OPTIONS: { value: SpecFilter; label: string }[] = [
  { value: "all", label: "All Specs" },
  { value: "ferocity", label: "Ferocity" },
  { value: "tenacity", label: "Tenacity" },
  { value: "cunning", label: "Cunning" },
];

export function DexFilters({
  search,
  onSearchChange,
  collectedFilter,
  onCollectedFilterChange,
  specFilter,
  onSpecFilterChange,
  exoticOnly,
  onExoticOnlyChange,
}: DexFiltersProps) {
  return (
    <div className="space-y-3">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search families..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Collected filter */}
        <div className="flex gap-1 rounded-lg bg-muted p-0.5">
          {COLLECTED_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onCollectedFilterChange(opt.value)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                collectedFilter === opt.value
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Spec filter */}
        <div className="flex gap-1 rounded-lg bg-muted p-0.5">
          {SPEC_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onSpecFilterChange(opt.value)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                specFilter === opt.value
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Exotic toggle */}
        <button
          onClick={() => onExoticOnlyChange(!exoticOnly)}
          className={cn(
            "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
            exoticOnly
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted text-muted-foreground hover:text-foreground",
          )}
        >
          Exotic Only
        </button>
      </div>
    </div>
  );
}
