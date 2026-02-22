import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useAuthStore } from "@/stores/auth-store";

export function CallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.setAuth);
  const region = useAuthStore((s) => s.region);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function exchangeCode() {
      const code = searchParams.get("code");
      const state = searchParams.get("state");
      const savedState = sessionStorage.getItem("oauth_state");

      if (!code) {
        setError("No authorization code received.");
        return;
      }

      if (state !== savedState) {
        setError("Invalid state parameter. Possible CSRF attack.");
        return;
      }

      sessionStorage.removeItem("oauth_state");

      try {
        const redirectUri = `${window.location.origin}/callback`;
        const res = await fetch("/api/auth/callback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, redirect_uri: redirectUri, region }),
        });

        if (!res.ok) {
          const data = await res.json() as { error: string };
          setError(data.error || "Token exchange failed.");
          return;
        }

        const data = await res.json() as { access_token: string; expires_in: number };
        setAuth(data.access_token, data.expires_in);
        navigate("/characters", { replace: true });
      } catch {
        setError("Failed to complete login. Please try again.");
      }
    }

    exchangeCode();
  }, [searchParams, setAuth, region, navigate]);

  if (error) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <p className="text-destructive">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-accent"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-muted-foreground">Completing login...</p>
      </div>
    </div>
  );
}
