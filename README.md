# Huntdex

A "Pokedex" for World of Warcraft Hunters. Log in with your Battle.net account and track which Hunter pets you've tamed across your characters, with completion progress and filtering.

## Tech Stack

- React 19 + TypeScript
- Vite
- React Router v7
- TanStack Query v5
- Zustand
- Tailwind CSS + shadcn/ui
- Cloudflare Pages (hosting + serverless functions)

## Getting Started

### Prerequisites

- Node.js 20+
- A [Blizzard Developer](https://develop.battle.net) application

### Setup

```bash
npm install
```

Create a `.dev.vars` file for local development:

```
BLIZZARD_CLIENT_ID=your_client_id
BLIZZARD_CLIENT_SECRET=your_client_secret
```

### Development

```bash
# Start Vite dev server (frontend only)
npm run dev

# Start with Cloudflare Pages Functions (full stack)
npm run build && npx wrangler pages dev dist
```

### Build

```bash
npm run build
```

## Deployment

This project is designed to deploy on Cloudflare Pages (free tier):

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables in Cloudflare dashboard:
   - `BLIZZARD_CLIENT_ID`
   - `BLIZZARD_CLIENT_SECRET`

### Blizzard Developer App

1. Go to https://develop.battle.net
2. Create a new API client
3. Set the redirect URI to `https://your-domain/callback`
4. Note the client_id and client_secret

## License

MIT
