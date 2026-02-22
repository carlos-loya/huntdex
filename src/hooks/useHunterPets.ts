import { useQuery } from "@tanstack/react-query";
import { blizzardFetch } from "@/lib/api";
import { useAuthStore } from "@/stores/auth-store";
import type { HunterPetsResponse } from "@/lib/blizzard-types";

export function useHunterPets(realm: string, name: string) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const region = useAuthStore((s) => s.region);

  return useQuery({
    queryKey: ["hunter-pets", region, realm, name],
    queryFn: () =>
      blizzardFetch<HunterPetsResponse>(
        `/profile/wow/character/${encodeURIComponent(realm)}/${encodeURIComponent(name)}/hunter-pets`,
      ),
    enabled: isAuthenticated() && !!realm && !!name,
  });
}
