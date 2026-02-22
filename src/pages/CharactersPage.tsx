import { useCharacters } from "@/hooks/useCharacters";
import { CharacterCard } from "@/components/characters/CharacterCard";
import { ErrorBanner } from "@/components/ui/ErrorBanner";

export function CharactersPage() {
  const { data, isLoading, error } = useCharacters();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold">Select a Character</h1>

      {isLoading && (
        <>
          <p className="mb-6 text-muted-foreground">Loading your characters...</p>
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-[88px] animate-pulse rounded-lg bg-card" />
            ))}
          </div>
        </>
      )}

      {error && (
        <>
          <p className="mb-6 text-muted-foreground">Choose a Hunter to view their pet collection.</p>
          <ErrorBanner message={`Failed to load characters: ${error.message}`} />
        </>
      )}

      {data && (
        <>
          <p className="mb-6 text-muted-foreground">
            Choose a Hunter to view their pet collection.
            {data.allCharacters.length > 0 && (
              <span className="ml-1 text-sm">
                ({data.hunters.length} Hunter{data.hunters.length !== 1 ? "s" : ""} found out of {data.allCharacters.length} characters)
              </span>
            )}
          </p>

          {data.hunters.length === 0 ? (
            <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground">
              No Hunter characters found on your account. Only Hunter characters can
              have tamed pets.
            </div>
          ) : (
            <div className="space-y-3">
              {data.hunters.map((char) => (
                <CharacterCard key={`${char.realm.slug}-${char.id}`} character={char} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
