import { PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HunterPet } from "@/lib/blizzard-types";

interface PetCardProps {
  pet: HunterPet;
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-center rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-accent",
        pet.is_active && "ring-2 ring-hunter-green/50",
      )}
    >
      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <PawPrint className="h-8 w-8 text-primary" />
      </div>
      <span className="text-center text-sm font-semibold text-foreground">
        {pet.name}
      </span>
      <span className="mt-1 text-xs text-muted-foreground">
        {pet.family.name}
      </span>
      <span className="mt-0.5 text-xs text-muted-foreground">
        Level {pet.level}
      </span>
      {pet.is_active && (
        <span className="mt-2 rounded-full bg-hunter-green/20 px-2 py-0.5 text-xs font-medium text-hunter-green">
          Active
        </span>
      )}
    </div>
  );
}
