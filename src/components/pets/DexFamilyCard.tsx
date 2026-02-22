import { PawPrint, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DexEntry } from "@/hooks/usePetDex";

const SPEC_COLORS: Record<string, string> = {
  ferocity: "text-red-400",
  tenacity: "text-blue-400",
  cunning: "text-yellow-400",
};

const SPEC_BG: Record<string, string> = {
  ferocity: "bg-red-400/10",
  tenacity: "bg-blue-400/10",
  cunning: "bg-yellow-400/10",
};

interface DexFamilyCardProps {
  entry: DexEntry;
}

export function DexFamilyCard({ entry }: DexFamilyCardProps) {
  const { family, collected, pets } = entry;

  return (
    <div
      className={cn(
        "relative flex flex-col items-center rounded-lg border p-4 transition-colors",
        collected
          ? "border-primary/30 bg-card hover:border-primary/60"
          : "border-border bg-card/50 hover:border-border/80",
      )}
    >
      {/* Exotic badge */}
      {family.exotic && (
        <Star className="absolute right-2 top-2 h-3.5 w-3.5 fill-primary text-primary" />
      )}

      {/* Icon */}
      <div
        className={cn(
          "mb-3 flex h-14 w-14 items-center justify-center rounded-full transition-all",
          collected
            ? "bg-primary/15"
            : "bg-muted grayscale",
        )}
      >
        <PawPrint
          className={cn(
            "h-7 w-7",
            collected ? "text-primary" : "text-muted-foreground/40",
          )}
        />
      </div>

      {/* Name */}
      <span
        className={cn(
          "text-center text-sm font-semibold",
          collected ? "text-foreground" : "text-muted-foreground/60",
        )}
      >
        {family.name}
      </span>

      {/* Spec badge */}
      <span
        className={cn(
          "mt-1 rounded-full px-2 py-0.5 text-xs font-medium capitalize",
          SPEC_BG[family.specialization],
          SPEC_COLORS[family.specialization],
        )}
      >
        {family.specialization}
      </span>

      {/* Pet count */}
      {collected && (
        <span className="mt-1.5 text-xs text-muted-foreground">
          {pets.length} pet{pets.length !== 1 ? "s" : ""}
        </span>
      )}
    </div>
  );
}
