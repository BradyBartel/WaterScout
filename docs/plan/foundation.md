# Foundation milestone

## Goal

Establish a reproducible local workspace with a web shell, native mobile shell, API, shared contracts, and PostGIS support. No real fishing spots or legal claims are included.

## Included

- pnpm workspace and pinned Node / package-manager versions.
- Next.js web app and Expo native app, with a development-only MapLibre style.
- Fastify API with health and coverage-status endpoints.
- Shared Zod schemas that distinguish evidence status and assessment status.
- Local Supabase configuration and PostGIS extension migration.
- CI checks for type safety, unit tests, formatting, and builds.

## Deliberately deferred

- Real regulations, access points, or user-facing fishing recommendations.
- Authentication and user trip storage until data ownership and privacy requirements are implemented together.
- Production map tiles, parcel data, geocoding, weather, tide, and fishery providers.
- LLM provider/model selection, chat, vector search, offline packs, and deployment secrets.
- Selecting a launch region or making a nationwide coverage claim.

## Exit criteria

1. Fresh install works from the documented Windows setup.
2. API health route and both client development servers start.
3. Shared domain tests, type checks, and web build pass.
4. Local PostGIS starts through Supabase CLI and the foundation migration applies.
5. The app clearly identifies demo map data and contains no real spot/legal claims.
