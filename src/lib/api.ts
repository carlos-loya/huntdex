import { useAuthStore, type Region } from "@/stores/auth-store";

function getApiBaseUrl(region: Region): string {
  return `https://${region}.api.blizzard.com`;
}

function getNamespace(type: "profile" | "static", region: Region): string {
  return `${type}-${region}`;
}

export async function blizzardFetch<T>(
  path: string,
  options: {
    namespace?: "profile" | "static";
    region?: Region;
  } = {},
): Promise<T> {
  const { accessToken, region: storeRegion } = useAuthStore.getState();
  const region = options.region ?? storeRegion;
  const namespace = options.namespace ?? "profile";

  if (!accessToken) {
    throw new Error("Not authenticated");
  }

  const url = `${getApiBaseUrl(region)}${path}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Battlenet-Namespace": getNamespace(namespace, region),
    },
  });

  if (!res.ok) {
    throw new Error(`Blizzard API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}
