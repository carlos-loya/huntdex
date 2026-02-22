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
    <header className="border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80">
          <Crosshair className="h-6 w-6" />
          <span className="text-lg font-bold tracking-wide">HUNTDEX</span>
        </Link>
        <nav className="flex items-center gap-4">
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
                className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <LogOut className="h-3.5 w-3.5" />
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
