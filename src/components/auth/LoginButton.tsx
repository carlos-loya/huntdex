import { useState } from "react";
import { LogIn } from "lucide-react";
import { useAuthStore } from "@/stores/auth-store";

export function LoginButton() {
  const [loading, setLoading] = useState(false);
  const region = useAuthStore((s) => s.region);

  async function handleLogin() {
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/login?region=${region}`);
      const data = await res.json() as { url: string; state: string };

      sessionStorage.setItem("oauth_state", data.state);
      window.location.href = data.url;
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleLogin}
      disabled={loading}
      className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
    >
      <LogIn className="h-4 w-4" />
      {loading ? "Redirecting..." : "Login with Battle.net"}
    </button>
  );
}
