import { describe, expect, it } from "vitest";
import { assessmentEnvelopeSchema, makeUnknownAssessment } from "./assessment";

describe("assessment envelope", () => {
  it("represents missing evidence as unknown", () => {
    const assessment = makeUnknownAssessment(
      "No reviewed source is available.",
      "2026-11-03T12:00:00.000Z",
    );

    expect(assessment.status).toBe("unknown");
    expect(assessment.evidence).toHaveLength(0);
    expect(assessmentEnvelopeSchema.safeParse(assessment).success).toBe(true);
  });

  it("rejects an invalid calendar date", () => {
    const result = assessmentEnvelopeSchema.safeParse({
      status: "conditional",
      reason: "Test rule.",
      evaluatedAt: "2026-11-03T12:00:00.000Z",
      datasetVersion: "fixture-1",
      evidence: [
        {
          sourceId: "fixture-source",
          status: "official_source",
          retrievedAt: "2026-11-03T12:00:00.000Z",
          effectiveFrom: "2026-13-01",
        },
      ],
    });

    expect(result.success).toBe(false);
  });
});
