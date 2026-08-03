---
title: "Async communication for distributed backend teams"
excerpt: "Remote backend work demands clarity over speed. How I structure RFCs, incident write-ups, and design docs so async teams ship without constant meetings."
publishedAt: "2025-08-01"
readTime: "4 min"
---

The best backend team I worked with had almost no recurring meetings. They shipped constantly across three time zones. The secret was not talent density — though that helped — it was **written clarity as a default**.

Async communication is not "fewer meetings because we are introverts." It is a system design problem for human coordination.

## RFCs before code, always

Every non-trivial change started as a short RFC — even internal ones. Not a 40-page design doc. A structured note with:

- Problem statement in one paragraph
- Proposed approach with a diagram if boundaries move
- Alternatives considered and why they were rejected
- Rollout plan, rollback plan, and what we are explicitly not solving

The RFC lived in the repo or wiki with a comment window. Reviewers left async feedback. The author consolidated and marked decisions. Then code followed.

This prevented the classic failure mode: three engineers building incompatible solutions because they each interpreted the Slack thread differently.

## Incidents produce documents, not just fixes

After every production incident worth discussing, we wrote a postmortem with:

- Timeline with trace links and metric screenshots
- Root cause — the actual cause, not the proximate trigger
- What went well in detection and response
- Action items with owners and dates, or explicitly "won't fix" with reasoning

The document was searchable. Six months later, when a similar alert fired, someone found the postmortem before reinventing the investigation.

## Design docs for cross-team boundaries

When two teams shared a service contract, the design doc included typed examples — request and response payloads, error codes, idempotency behavior. We pasted TypeScript interfaces directly. Ambiguity in prose became compile errors in the shared package.

This sounds heavy. It is lighter than a weekly sync meeting that exists because nobody trusts the documentation.

## Habits that make async work

- Default to public channels over DMs for technical decisions
- Write conclusions at the top, context below — inverted pyramid style
- Link to code, traces, and dashboards, not descriptions of them
- Set response-time expectations: RFCs get 48h review windows, incidents get same-day timelines

Remote backend work does not fail because people are remote. It fails because decisions live in heads and call recordings instead of searchable, structured writing.

Clarity over speed. Always. The team that writes well ships faster — they just do it without another calendar invite.
