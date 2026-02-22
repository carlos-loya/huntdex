import { Link, useNavigate } from "react-router";
import { Crosshair, LogOut } from "lucide-react";
import { useAuthStore } from "@/stores/auth-store";

export function Header() {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const logout = useAuthStore((s) => s.logout);

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80">
          <Crosshair className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="text-base font-bold tracking-wide sm:text-lg">HUNTDEX</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          {isAuthenticated() && (
            <>
              <Link
                to="/characters"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Characters
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:px-3"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
