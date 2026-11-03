import cors from "@fastify/cors";
import Fastify from "fastify";

const developmentOrigins = [
  "http://localhost:3000",
  "http://localhost:8081",
  "http://localhost:19006",
];

export function buildApp() {
  const app = Fastify({
    logger:
      process.env.NODE_ENV === "test"
        ? false
        : {
            redact: ["req.headers.authorization", "req.headers.cookie"],
          },
  });

  const configuredOrigins = process.env.CORS_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  void app.register(cors, {
    origin: configuredOrigins?.length ? configuredOrigins : developmentOrigins,
  });

  app.get("/healthz", async () => ({ status: "ok" as const }));

  app.get("/v1/coverage", async () => ({
    status: "not_configured" as const,
    message:
      "No fishing locations or regulations are configured in this build.",
  }));

  return app;
}
