import { useCharacters } from "@/hooks/useCharacters";
import { CharacterCard } from "@/components/characters/CharacterCard";

export function CharactersPage() {
  const { data, isLoading, error } = useCharacters();

  if (isLoading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold">Select a Character</h1>
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-24 animate-pulse rounded-lg bg-card" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold">Select a Character</h1>
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
          Failed to load characters: {error.message}
        </div>
      </div>
    );
  }

  const hunters = data?.hunters ?? [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold">Select a Character</h1>
      <p className="mb-6 text-muted-foreground">
        Choose a Hunter to view their pet collection.
        {data && data.allCharacters.length > 0 && (
          <span className="ml-1 text-sm">
            ({hunters.length} Hunter{hunters.length !== 1 ? "s" : ""} found out of {data.allCharacters.length} characters)
          </span>
        )}
      </p>

      {hunters.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground">
          No Hunter characters found on your account. Only Hunter characters can
          have tamed pets.
        </div>
      ) : (
        <div className="space-y-3">
          {hunters.map((char) => (
            <CharacterCard key={`${char.realm.slug}-${char.id}`} character={char} />
          ))}
        </div>
      )}
    </div>
  );
}
