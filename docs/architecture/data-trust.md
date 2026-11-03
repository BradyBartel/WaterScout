# Data trust boundary

This document describes the rules for future fishing data. The current app has no real spot, access, regulation, condition, or species records.

## Separate claims

Do not collapse these into a single `public` or `fishable` flag:

1. Is angling permitted in this water or reach?
2. Can the user legally enter the land and reach the water by this route?
3. Is the route physically usable for the selected activity?
4. Which time-, species-, method-, and angler-specific rules apply?
5. What conditions or fish activity are measured versus inferred?

## Required evidence metadata

Each published fact will need a source identifier, geographic scope, effective period, retrieval/review timestamps, evidence status, source license, and dataset version. Missing, stale, ambiguous, or conflicting facts must remain unknown until reviewed.

## AI boundary

The AI may interpret a request and explain the output of trusted services. It must not make legal-access or current-regulation decisions from model memory. A generated answer is not a source of truth.
