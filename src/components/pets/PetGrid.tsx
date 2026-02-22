import { PetCard } from "./PetCard";
import type { HunterPet } from "@/lib/blizzard-types";

interface PetGridProps {
  pets: HunterPet[];
}

export function PetGrid({ pets }: PetGridProps) {
  if (pets.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground">
        No pets found. This character may not have tamed any pets yet,
        or may need to log out after the weekly reset for data to appear.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {pets.map((pet, i) => (
        <PetCard key={`${pet.creature.id}-${i}`} pet={pet} />
      ))}
    </div>
  );
}
