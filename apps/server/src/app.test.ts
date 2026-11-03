import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { buildApp } from "./app.js";

describe("API foundation", () => {
  let app: ReturnType<typeof buildApp>;

  beforeEach(() => {
    app = buildApp();
  });

  afterEach(async () => {
    await app.close();
  });

  it("reports API health", async () => {
    const response = await app.inject({ method: "GET", url: "/healthz" });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ status: "ok" });
  });

  it("does not imply fishing data is available", async () => {
    const response = await app.inject({ method: "GET", url: "/v1/coverage" });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe("not_configured");
  });
});
