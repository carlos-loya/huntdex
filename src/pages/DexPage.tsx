import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useHunterPets } from "@/hooks/useHunterPets";
import { PetGrid } from "@/components/pets/PetGrid";

export function DexPage() {
  const { realm, name } = useParams<{ realm: string; name: string }>();
  const { data, isLoading, error } = useHunterPets(realm ?? "", name ?? "");

  const displayName = name ? name.charAt(0).toUpperCase() + name.slice(1) : "";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-center gap-3">
        <Link
          to="/characters"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Characters
        </Link>
      </div>

      <h1 className="mb-1 text-2xl font-bold">
        {displayName}&apos;s Pet Collection
      </h1>
      <p className="mb-6 text-sm text-muted-foreground">
        {realm && realm.replace(/-/g, " ")}
      </p>

      {isLoading && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-lg bg-card" />
          ))}
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
          {error.message.includes("404")
            ? "No hunter pet data found. This character may not be a Hunter, or may need to log out after the weekly reset."
            : `Failed to load pets: ${error.message}`}
        </div>
      )}

      {data && (
        <>
          <p className="mb-4 text-sm text-muted-foreground">
            {data.hunter_pets.length} pet{data.hunter_pets.length !== 1 ? "s" : ""} tamed
          </p>
          <PetGrid pets={data.hunter_pets} />
        </>
      )}
    </div>
  );
}
