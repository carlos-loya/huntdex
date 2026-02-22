// Common Blizzard API types

export interface BlizzardLink {
  href: string;
}

export interface BlizzardRef {
  key?: BlizzardLink;
  name?: string;
  id: number;
}

// Profile API: /profile/user/wow
export interface WowAccountProfile {
  _links: { self: BlizzardLink };
  id: number;
  wow_accounts: WowAccount[];
}

export interface WowAccount {
  id: number;
  characters: WowCharacter[];
}

export interface WowCharacter {
  character: BlizzardLink;
  protected_character: BlizzardLink;
  name: string;
  id: number;
  realm: {
    key: BlizzardLink;
    name: string;
    id: number;
    slug: string;
  };
  playable_class: BlizzardRef;
  playable_race: BlizzardRef;
  gender: { type: string; name: string };
  faction: { type: string; name: string };
  level: number;
}

// Hunter Pets API: /profile/wow/character/{realm}/{name}/hunter-pets
export interface HunterPetsResponse {
  _links: { self: BlizzardLink };
  character: {
    key: BlizzardLink;
    name: string;
    id: number;
    realm: { key: BlizzardLink; name: string; id: number; slug: string };
  };
  hunter_pets: HunterPet[];
}

export interface HunterPet {
  name: string;
  level: number;
  creature: BlizzardRef;
  slot: number;
  is_active?: boolean;
  creature_display?: {
    key: BlizzardLink;
    id: number;
  };
  family: BlizzardRef;
}

// Character Media API
export interface CharacterMediaResponse {
  _links: { self: BlizzardLink };
  character: BlizzardRef;
  assets: CharacterMediaAsset[];
}

export interface CharacterMediaAsset {
  key: string;
  value: string;
}

// Creature Family
export interface CreatureFamilyIndex {
  _links: { self: BlizzardLink };
  creature_families: BlizzardRef[];
}

// Hunter class ID in WoW is 3
export const HUNTER_CLASS_ID = 3;
