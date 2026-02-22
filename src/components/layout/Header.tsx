import { Link } from "react-router";
import { Crosshair } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80">
          <Crosshair className="h-6 w-6" />
          <span className="text-lg font-bold tracking-wide">HUNTDEX</span>
        </Link>
        <nav className="flex items-center gap-4">
          {/* Auth buttons will be added in Phase 2 */}
        </nav>
      </div>
    </header>
  );
}
