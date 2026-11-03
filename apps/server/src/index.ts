import { buildApp } from "./app.js";

const port = Number(process.env.PORT ?? 4010);
const host = process.env.HOST ?? "0.0.0.0";
const app = buildApp();

try {
  await app.listen({ port, host });
} catch (error) {
  app.log.error(error);
  process.exitCode = 1;
}
