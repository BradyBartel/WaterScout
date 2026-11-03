import { z } from "zod";

export const assessmentStatusSchema = z.enum([
  "permitted_for_context",
  "prohibited",
  "conditional",
  "unknown",
  "conflict",
]);

export type AssessmentStatus = z.infer<typeof assessmentStatusSchema>;

const calendarDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((value) => {
    const [year, month, day] = value.split("-").map(Number);
    if (year === undefined || month === undefined || day === undefined) {
      return false;
    }

    const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    const daysByMonth = [
      31,
      leapYear ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    const maximumDay = daysByMonth[month - 1];

    return maximumDay !== undefined && day >= 1 && day <= maximumDay;
  }, "Expected a valid calendar date in YYYY-MM-DD format");

export const evidenceStatusSchema = z.enum([
  "official_source",
  "reviewed",
  "user_report",
  "inferred",
  "unknown",
]);

export const evidenceReferenceSchema = z.object({
  sourceId: z.string().min(1),
  status: evidenceStatusSchema,
  retrievedAt: z.string().datetime(),
  url: z.string().url().optional(),
  // Keep legal dates as calendar strings; do not round-trip them through JS Date.
  effectiveFrom: calendarDateSchema.optional(),
  effectiveTo: calendarDateSchema.optional(),
});

export const assessmentEnvelopeSchema = z.object({
  status: assessmentStatusSchema,
  reason: z.string().min(1),
  evaluatedAt: z.string().datetime(),
  datasetVersion: z.string().nullable(),
  evidence: z.array(evidenceReferenceSchema),
});

export type AssessmentEnvelope = z.infer<typeof assessmentEnvelopeSchema>;

export function makeUnknownAssessment(
  reason: string,
  evaluatedAt: string,
): AssessmentEnvelope {
  return assessmentEnvelopeSchema.parse({
    status: "unknown",
    reason,
    evaluatedAt,
    datasetVersion: null,
    evidence: [],
  });
}
