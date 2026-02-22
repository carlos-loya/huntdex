import { Routes, Route } from "react-router";
import { AppShell } from "@/components/layout/AppShell";
import { HomePage } from "@/pages/HomePage";
import { CallbackPage } from "@/pages/CallbackPage";
import { CharactersPage } from "@/pages/CharactersPage";
import { DexPage } from "@/pages/DexPage";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="callback" element={<CallbackPage />} />
        <Route path="characters" element={<CharactersPage />} />
        <Route path="dex/:realm/:name" element={<DexPage />} />
      </Route>
    </Routes>
  );
}
