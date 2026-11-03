# Architecture decision log

## 0001: Initial application architecture

- **Status:** Accepted for the foundation; provider choices remain provisional.
- **Decision:** Use a TypeScript monorepo with a Next.js website, Expo mobile client, Fastify modular-monolith API, and PostgreSQL/PostGIS. Keep the API and future ingestion worker in one backend codebase, using separate process entry points only when needed.
- **Why:** Web and mobile need the same capabilities but benefit from different interaction patterns. A single API and shared domain package are the parity boundary. TypeScript allows the shared validation and deterministic assessment logic to be tested consistently.
- **Alternatives considered:** One Expo universal UI would reduce duplicated presentation work but may constrain the desktop map and public web experience. Python for the API/ETL remains an option if a measured data-processing need appears; it is not required for the first runtime.
- **Consequences:** Some UI code will be platform-specific. Map SDKs, tile services, data providers, and deployment hosts must be verified separately for licensing, offline support, and cost.

## 0002: Evidence before model claims

- **Status:** Accepted.
- **Decision:** AI may interpret requests, explain reviewed evidence, and offer fishing advice. It must not determine legal access, regulations, closures, or safety from model memory. Those answers come from versioned data and deterministic evaluation; unsupported cases return unknown.
- **Consequences:** Data provenance, source review, and freshness are first-class system capabilities. The assistant is only as complete as the supported region's verified data.
