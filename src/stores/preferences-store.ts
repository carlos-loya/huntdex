import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface PreferencesState {
  selectedRealm: string | null;
  selectedCharacter: string | null;
  setSelectedCharacter: (realm: string, name: string) => void;
  clearSelectedCharacter: () => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      selectedRealm: null,
      selectedCharacter: null,
      setSelectedCharacter: (realm, name) =>
        set({ selectedRealm: realm, selectedCharacter: name }),
      clearSelectedCharacter: () =>
        set({ selectedRealm: null, selectedCharacter: null }),
    }),
    {
      name: "huntdex-prefs",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
