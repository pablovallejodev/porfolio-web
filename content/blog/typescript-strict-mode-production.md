---
title: "TypeScript strict mode saved our production twice"
excerpt: "Strict mode is not bureaucracy. It is insurance. Two incidents that never reached users because the compiler caught contract drift before deploy."
publishedAt: "2026-01-01"
readTime: "5 min"
---

I have heard the argument a hundred times: strict TypeScript slows teams down. Maybe in the first month. Over a year of production traffic, the opposite is true — if you treat types as API contracts, not decoration.

Two incidents never reached users because `strict: true` blocked the deploy. Not a linter warning. A hard compile failure.

## Incident one: the silent field rename

A shared DTO between two microservices lost a field during a refactor. The producer team renamed `networkId` to `network_id` in the payload. The consumer still typed the old shape.

Without strict null checks and exact object typing, the code would have compiled. At runtime, the anomaly detection service would have received `undefined` where it expected a string identifier. In a 10M-subscriber network, that is not a log line — it is a blind spot in incident detection.

TypeScript caught the mismatch at the integration boundary because we typed the message schema explicitly and ran `tsc` in CI before any container image was built.

## Incident two: the optional that was not optional

A third-party webhook started omitting a field under error conditions. Our handler typed it as required. Strict mode forced us to model the error payload as a discriminated union — success shape or failure shape, never both ambiguous.

When the webhook behavior changed in staging, the type error pointed directly at the handler branch we had never tested. We added the missing branch, wrote two tests, and shipped. Production never saw it.

## How we enforce it without slowing down

Strict mode only works if the team agrees on three habits:

- Shared types live in a package both services import — not copy-pasted interfaces
- `any` requires a comment explaining why and a ticket to remove it
- CI fails on type errors, no exceptions, no `--no-verify` culture

We also enabled `noUncheckedIndexedAccess` on newer services. It is annoying for a week. Then you stop writing `arr[0]` without checking and start writing software that survives real data.

## The takeaway

Strict TypeScript is not about pleasing the compiler. It is about making wrong states unrepresentable at the boundaries where wrong states become outages.

If your types do not hurt a little when the world changes, they are not doing their job.
