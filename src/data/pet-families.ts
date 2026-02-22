/**
 * Static database of all tameable hunter pet families in World of Warcraft (Retail).
 *
 * Sources:
 *   - Petopia (wow-petopia.com) — specs, abilities, and family pages
 *   - Warcraft Wiki (warcraft.wiki.gg/wiki/Pet_family)
 *   - Wowhead (wowhead.com/hunter-pets)
 *
 * Last verified: February 2026 (Patch 12.0 — Midnight pre-patch)
 *
 * Total families: 61  (48 standard + 13 exotic)
 */

export interface PetFamily {
  id: number;
  name: string;
  exotic: boolean;
  specialization: "ferocity" | "tenacity" | "cunning";
}

export const PET_FAMILIES: PetFamily[] = [
  // ── Cunning ────────────────────────────────────────────────
  { id: 1,  name: "Aqiri",           exotic: true,  specialization: "cunning" },
  { id: 2,  name: "Basilisk",        exotic: false, specialization: "cunning" },
  { id: 3,  name: "Bird of Prey",    exotic: false, specialization: "cunning" },
  { id: 4,  name: "Boar",            exotic: false, specialization: "cunning" },
  { id: 5,  name: "Camel",           exotic: false, specialization: "cunning" },
  { id: 6,  name: "Fox",             exotic: false, specialization: "cunning" },
  { id: 7,  name: "Gruffhorn",       exotic: false, specialization: "cunning" },
  { id: 8,  name: "Hound",           exotic: false, specialization: "cunning" },
  { id: 9,  name: "Hyena",           exotic: false, specialization: "cunning" },
  { id: 10, name: "Mechanical",      exotic: false, specialization: "cunning" },
  { id: 11, name: "Monkey",          exotic: false, specialization: "cunning" },
  { id: 12, name: "Moth",            exotic: false, specialization: "cunning" },
  { id: 13, name: "Pterrordax",      exotic: true,  specialization: "cunning" },
  { id: 14, name: "Raptor",          exotic: false, specialization: "cunning" },
  { id: 15, name: "Rodent",          exotic: false, specialization: "cunning" },
  { id: 16, name: "Serpent",         exotic: false, specialization: "cunning" },
  { id: 17, name: "Shale Beast",     exotic: true,  specialization: "cunning" },
  { id: 18, name: "Sporebat",        exotic: false, specialization: "cunning" },
  { id: 19, name: "Warp Stalker",    exotic: false, specialization: "cunning" },
  { id: 20, name: "Water Strider",   exotic: true,  specialization: "cunning" },

  // ── Ferocity ───────────────────────────────────────────────
  { id: 21, name: "Bat",             exotic: false, specialization: "ferocity" },
  { id: 22, name: "Carrion Bird",    exotic: false, specialization: "ferocity" },
  { id: 23, name: "Cat",             exotic: false, specialization: "ferocity" },
  { id: 24, name: "Chimaera",        exotic: true,  specialization: "ferocity" },
  { id: 25, name: "Clefthoof",       exotic: true,  specialization: "ferocity" },
  { id: 26, name: "Core Hound",      exotic: true,  specialization: "ferocity" },
  { id: 27, name: "Courser",         exotic: false, specialization: "ferocity" },
  { id: 28, name: "Crocolisk",       exotic: false, specialization: "ferocity" },
  { id: 29, name: "Devilsaur",       exotic: true,  specialization: "ferocity" },
  { id: 30, name: "Gorilla",         exotic: false, specialization: "ferocity" },
  { id: 31, name: "Lesser Dragonkin", exotic: false, specialization: "ferocity" },
  { id: 32, name: "Ravager",         exotic: false, specialization: "ferocity" },
  { id: 33, name: "Ray",             exotic: false, specialization: "ferocity" },
  { id: 34, name: "Scalehide",       exotic: false, specialization: "ferocity" },
  { id: 35, name: "Scorpid",         exotic: false, specialization: "ferocity" },
  { id: 36, name: "Spider",          exotic: false, specialization: "ferocity" },
  { id: 37, name: "Tallstrider",     exotic: false, specialization: "ferocity" },
  { id: 38, name: "Wasp",            exotic: false, specialization: "ferocity" },
  { id: 39, name: "Whiptail",        exotic: true,  specialization: "ferocity" },
  { id: 40, name: "Wind Serpent",    exotic: false, specialization: "ferocity" },
  { id: 41, name: "Wolf",            exotic: false, specialization: "ferocity" },

  // ── Tenacity ───────────────────────────────────────────────
  { id: 42, name: "Bear",            exotic: false, specialization: "tenacity" },
  { id: 43, name: "Beetle",          exotic: false, specialization: "tenacity" },
  { id: 44, name: "Blood Beast",     exotic: false, specialization: "tenacity" },
  { id: 45, name: "Carapid",         exotic: true,  specialization: "tenacity" },
  { id: 46, name: "Crab",            exotic: false, specialization: "tenacity" },
  { id: 47, name: "Direhorn",        exotic: false, specialization: "tenacity" },
  { id: 48, name: "Dragonhawk",      exotic: false, specialization: "tenacity" },
  { id: 49, name: "Feathermane",     exotic: false, specialization: "tenacity" },
  { id: 50, name: "Hopper",          exotic: false, specialization: "tenacity" },
  { id: 51, name: "Hydra",           exotic: false, specialization: "tenacity" },
  { id: 52, name: "Lizard",          exotic: false, specialization: "tenacity" },
  { id: 53, name: "Mammoth",         exotic: false, specialization: "tenacity" },
  { id: 54, name: "Oxen",            exotic: false, specialization: "tenacity" },
  { id: 55, name: "Riverbeast",      exotic: false, specialization: "tenacity" },
  { id: 56, name: "Spirit Beast",    exotic: true,  specialization: "tenacity" },
  { id: 57, name: "Stag",            exotic: false, specialization: "tenacity" },
  { id: 58, name: "Stone Hound",     exotic: true,  specialization: "tenacity" },
  { id: 59, name: "Turtle",          exotic: false, specialization: "tenacity" },
  { id: 60, name: "Waterfowl",       exotic: false, specialization: "tenacity" },
  { id: 61, name: "Worm",            exotic: true,  specialization: "tenacity" },
];

/** Quick lookup map: lowercase family name → PetFamily */
export const PET_FAMILY_MAP = new Map<string, PetFamily>(
  PET_FAMILIES.map((f) => [f.name.toLowerCase(), f]),
);

/** Get a family by its display name (case-insensitive). */
export function getPetFamily(name: string): PetFamily | undefined {
  return PET_FAMILY_MAP.get(name.toLowerCase());
}
