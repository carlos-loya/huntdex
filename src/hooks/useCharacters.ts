import { useQuery } from "@tanstack/react-query";
import { blizzardFetch } from "@/lib/api";
import { useAuthStore } from "@/stores/auth-store";
import type { WowAccountProfile, WowCharacter } from "@/lib/blizzard-types";
import { HUNTER_CLASS_ID } from "@/lib/blizzard-types";

export function useCharacters() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const region = useAuthStore((s) => s.region);

  return useQuery({
    queryKey: ["characters", region],
    queryFn: async () => {
      const profile = await blizzardFetch<WowAccountProfile>(
        "/profile/user/wow",
      );

      const allCharacters: WowCharacter[] = profile.wow_accounts.flatMap(
        (account) => account.characters,
      );

      const hunters = allCharacters.filter(
        (char) => char.playable_class.id === HUNTER_CLASS_ID,
      );

      // Sort by level descending, then name
      hunters.sort((a, b) => b.level - a.level || a.name.localeCompare(b.name));

      return { allCharacters, hunters };
    },
    enabled: isAuthenticated(),
  });
}
