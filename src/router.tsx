import { Routes, Route } from "react-router";
import { AppShell } from "@/components/layout/AppShell";
import { AuthGuard } from "@/components/auth/AuthGuard";
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
        <Route
          path="characters"
          element={
            <AuthGuard>
              <CharactersPage />
            </AuthGuard>
          }
        />
        <Route
          path="dex/:realm/:name"
          element={
            <AuthGuard>
              <DexPage />
            </AuthGuard>
          }
        />
      </Route>
    </Routes>
  );
}
