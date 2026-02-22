# Huntdex - WoW Hunter Pet Collection Tracker

## Project Overview
A "Pokedex" for World of Warcraft Hunters - players log in with their Battle.net account and see which Hunter pets they've tamed, presented as a collection tracker with completion progress. Retail WoW only.

## Tech Stack
- **Frontend**: React 19 + TypeScript, Vite, React Router v7, TanStack Query v5, Zustand, Tailwind CSS v4 + shadcn/ui
- **Backend**: Cloudflare Pages Functions (thin OAuth proxy only)
- **Deployment**: Cloudflare Pages (free tier)

## Architecture
- SPA calls Blizzard APIs directly (they return `Access-Control-Allow-Origin: *`)
- Only OAuth token exchange goes through our Cloudflare Worker (requires client_secret)
- Cloudflare Pages Functions live in `functions/` directory

## Commands
- `npm run dev` - Start Vite dev server
- `npm run build` - TypeScript check + Vite build
- `npm run lint` - ESLint
- `npm run preview` - Preview production build
- `npx wrangler pages dev dist` - Test with Cloudflare Pages Functions locally

## Project Structure
- `src/` - React SPA source
- `src/components/ui/` - shadcn/ui primitives
- `src/components/layout/` - AppShell, Header, Footer
- `src/components/auth/` - LoginButton, AuthGuard
- `src/components/pets/` - PetCard, PetGrid, PetDetail, filters
- `src/components/characters/` - CharacterSelector, CharacterCard
- `src/hooks/` - Custom hooks (useAuth, useCharacters, useHunterPets, usePetDex)
- `src/lib/` - Utilities, API client, Blizzard types
- `src/pages/` - Route pages
- `src/stores/` - Zustand stores
- `src/data/` - Static data (pet families)
- `functions/` - Cloudflare Pages Functions (OAuth proxy)

## Coding Conventions
- Use `@/` path alias for imports from `src/`
- Use `cn()` from `@/lib/utils` for conditional classnames
- Components use named exports (not default)
- One component per file
- Zustand stores use the `create` function with `persist` middleware where needed
- TanStack Query hooks go in `src/hooks/` with `use` prefix
- Blizzard API types in `src/lib/blizzard-types.ts`
