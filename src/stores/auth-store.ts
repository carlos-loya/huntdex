import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Region = "us" | "eu" | "kr" | "tw";

interface AuthState {
  accessToken: string | null;
  expiresAt: number | null;
  region: Region;
  setAuth: (token: string, expiresIn: number) => void;
  setRegion: (region: Region) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      expiresAt: null,
      region: "us",
      setAuth: (token, expiresIn) =>
        set({
          accessToken: token,
          expiresAt: Date.now() + expiresIn * 1000,
        }),
      setRegion: (region) => set({ region }),
      logout: () => set({ accessToken: null, expiresAt: null }),
      isAuthenticated: () => {
        const { accessToken, expiresAt } = get();
        return accessToken !== null && expiresAt !== null && Date.now() < expiresAt;
      },
    }),
    {
      name: "huntdex-auth",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
