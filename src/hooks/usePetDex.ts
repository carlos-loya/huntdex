import { useMemo } from "react";
import { PET_FAMILIES, type PetFamily } from "@/data/pet-families";
import type { HunterPet } from "@/lib/blizzard-types";

export interface DexEntry {
  family: PetFamily;
  collected: boolean;
  pets: HunterPet[];
}

export function usePetDex(hunterPets: HunterPet[] | undefined) {
  return useMemo(() => {
    const collectedMap = new Map<string, HunterPet[]>();

    if (hunterPets) {
      for (const pet of hunterPets) {
        const key = (pet.family.name ?? "").toLowerCase();
        const existing = collectedMap.get(key) ?? [];
        existing.push(pet);
        collectedMap.set(key, existing);
      }
    }

    const entries: DexEntry[] = PET_FAMILIES.map((family) => {
      const key = family.name.toLowerCase();
      const pets = collectedMap.get(key) ?? [];
      return {
        family,
        collected: pets.length > 0,
        pets,
      };
    });

    const totalFamilies = entries.length;
    const collectedFamilies = entries.filter((e) => e.collected).length;

    return { entries, totalFamilies, collectedFamilies };
  }, [hunterPets]);
}
