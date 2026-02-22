import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WowCharacter } from "@/lib/blizzard-types";

const FACTION_COLORS: Record<string, string> = {
  HORDE: "border-red-900/50 hover:border-red-700/70",
  ALLIANCE: "border-blue-900/50 hover:border-blue-700/70",
};

interface CharacterCardProps {
  character: WowCharacter;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const realmSlug = character.realm.slug;
  const nameLower = character.name.toLowerCase();
  const factionType = character.faction.type;

  return (
    <Link
      to={`/dex/${realmSlug}/${nameLower}`}
      className={cn(
        "group flex items-center justify-between rounded-lg border-2 bg-card p-4 transition-colors hover:bg-accent",
        FACTION_COLORS[factionType] ?? "border-border hover:border-primary/50",
      )}
    >
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold text-foreground">{character.name}</span>
        <span className="text-sm text-muted-foreground">
          Level {character.level} {character.playable_race.name} Hunter
        </span>
        <span className="text-xs text-muted-foreground">
          {character.realm.name} &middot; {character.faction.name}
        </span>
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
    </Link>
  );
}
