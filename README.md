# WaterScout

WaterScout is a fishing trip-planning product for web and mobile. It aims to help anglers find promising water, understand whether they can legally fish and reach it, plan for the conditions, and adapt when the bite is slow.

## Trust boundary

- Regulations, closures, access, and source freshness must come from reviewed evidence and deterministic services—not generated model claims.
- Missing, stale, or conflicting evidence is reported as unknown.
- Recommendations describe better-supported opportunities, not guaranteed catches or safety.
- This repository currently contains **no real fishing locations, legal rules, or production map data**. The map style is a development demo only.

## Architecture

- `apps/web`: Next.js website.
- `apps/mobile`: Expo / React Native app.
- `apps/server`: Fastify API.
- `packages/core`: shared schemas and pure domain logic.
- `supabase`: local database configuration and migrations.

The clients are separate so each can fit its device, but they use the same API and are expected to support the same core workflows.

## Local development

Requirements: Node.js 24.15.x, Corepack, and Docker Desktop. The first install may download the pinned pnpm version through Corepack.

```powershell
corepack pnpm install
corepack pnpm db:start
corepack pnpm dev:api
corepack pnpm dev:web
```

`db:start` starts the local Postgres container without the unused Supabase services. Use `corepack pnpm supabase:start` when the project begins using local Auth/Storage. Stop services with `corepack pnpm db:stop`. The CLI-managed Postgres service is configured for PostGIS; application tables and real datasets have not been added yet.

For the mobile app, use an Android device/emulator and a **development build**. MapLibre is a native module and does not run in Expo Go:

```powershell
corepack pnpm --filter @waterscout/mobile android
corepack pnpm dev:mobile
```

The demo map style is for local development only. Do not ship it or bulk-cache its tiles. Production map, geocoding, weather, and fishing-data providers are undecided pending licensing and coverage review.

## Checks

```powershell
corepack pnpm typecheck
corepack pnpm test
corepack pnpm format:check
```

## Current stage

This is the initial foundation only: workspace setup, client shells, API health endpoint, shared evidence/status schemas, and a local PostGIS baseline. It is not yet suitable for fishing, navigation, or legal decisions. The first real-data milestone depends on choosing and auditing a launch region and its source licenses.
