import { useState, useMemo } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useHunterPets } from "@/hooks/useHunterPets";
import { usePetDex } from "@/hooks/usePetDex";
import { DexFamilyCard } from "@/components/pets/DexFamilyCard";
import { DexFilters, type CollectedFilter, type SpecFilter } from "@/components/pets/DexFilters";
import { ProgressBar } from "@/components/pets/ProgressBar";

export function DexPage() {
  const { realm, name } = useParams<{ realm: string; name: string }>();
  const { data, isLoading, error } = useHunterPets(realm ?? "", name ?? "");
  const { entries, totalFamilies, collectedFamilies } = usePetDex(data?.hunter_pets);

  const [search, setSearch] = useState("");
  const [collectedFilter, setCollectedFilter] = useState<CollectedFilter>("all");
  const [specFilter, setSpecFilter] = useState<SpecFilter>("all");
  const [exoticOnly, setExoticOnly] = useState(false);

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      if (search && !entry.family.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      if (collectedFilter === "collected" && !entry.collected) return false;
      if (collectedFilter === "uncollected" && entry.collected) return false;
      if (specFilter !== "all" && entry.family.specialization !== specFilter) return false;
      if (exoticOnly && !entry.family.exotic) return false;
      return true;
    });
  }, [entries, search, collectedFilter, specFilter, exoticOnly]);

  const displayName = name ? name.charAt(0).toUpperCase() + name.slice(1) : "";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Back link */}
      <div className="mb-6">
        <Link
          to="/characters"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Characters
        </Link>
      </div>

      {/* Header */}
      <h1 className="mb-1 text-2xl font-bold">
        {displayName}&apos;s Huntdex
      </h1>
      <p className="mb-4 text-sm text-muted-foreground">
        {realm && realm.replace(/-/g, " ")}
      </p>

      {/* Loading */}
      {isLoading && (
        <div className="space-y-4">
          <div className="h-10 w-full animate-pulse rounded-lg bg-card" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="h-36 animate-pulse rounded-lg bg-card" />
            ))}
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
          {error.message.includes("404")
            ? "No hunter pet data found. This character may not be a Hunter, or may need to log out after the weekly reset."
            : `Failed to load pets: ${error.message}`}
        </div>
      )}

      {/* Dex Content */}
      {data && (
        <>
          {/* Progress */}
          <ProgressBar
            collected={collectedFamilies}
            total={totalFamilies}
            className="mb-6"
          />

          {/* Filters */}
          <div className="mb-6">
            <DexFilters
              search={search}
              onSearchChange={setSearch}
              collectedFilter={collectedFilter}
              onCollectedFilterChange={setCollectedFilter}
              specFilter={specFilter}
              onSpecFilterChange={setSpecFilter}
              exoticOnly={exoticOnly}
              onExoticOnlyChange={setExoticOnly}
            />
          </div>

          {/* Results count */}
          <p className="mb-4 text-sm text-muted-foreground">
            Showing {filteredEntries.length} of {totalFamilies} families
            {data.hunter_pets.length > 0 && (
              <span> &middot; {data.hunter_pets.length} total pets tamed</span>
            )}
          </p>

          {/* Grid */}
          {filteredEntries.length === 0 ? (
            <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground">
              No families match your filters.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredEntries.map((entry) => (
                <DexFamilyCard key={entry.family.id} entry={entry} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
