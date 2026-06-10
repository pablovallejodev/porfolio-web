---
title: "Microservices vs monoliths: a pragmatic take"
excerpt: "The best architecture is the one your team can operate. I have shipped both. Here is when each approach actually makes sense for backend teams."
publishedAt: "2025-10-01"
readTime: "9 min"
---

Architecture debates on Twitter are sports. In production, the question is simpler and harder: **can this team deploy, debug, and recover this system on a bad day?**

I have shipped monoliths that scaled gracefully and microservices that became distributed monoliths with extra network hops. I have also seen the reverse — a well-bounded service extraction that cut deploy risk in half. The pattern matters less than the constraints.

## When a monolith is the right call

Early-stage products, small teams, and domains still in flux benefit from a single deployable unit. The advantages are real:

- One repository, one pipeline, one place to grep when things break
- Refactoring across boundaries is a function call, not a versioning negotiation
- Local development that actually works without running twelve Docker containers

At Deepfriend, owning the product end-to-end from architecture to launch, a cohesive backend made sense. Speed of iteration beat theoretical scalability. We could still separate modules internally and enforce boundaries with TypeScript packages.

## When services earn their complexity

Microservices justify themselves when independent scaling, independent deploy cadence, or team ownership boundaries are **business requirements**, not engineering preferences.

In the telco project, anomaly detection and client status reporting had different scaling profiles, different SLAs, and different on-call owners. Extracting them reduced blast radius when one path needed an emergency deploy during an incident.

The extraction worked because:

- The boundary followed a natural domain seam, not a org-chart line
- Each service owned its data — no shared mutable database as integration layer
- Contracts were versioned and tested, not assumed

## The failure mode I see most often

Teams split services because the monolith feels messy. They end up with:

- Synchronous chains of five HTTP calls where one function call used to live
- Distributed transactions improvised with retries and hope
- Observability gaps at every network boundary
- Deploy coordination that takes longer than the monolith ever did

That is not microservices. That is a monolith with latency tax.

## Questions I ask before splitting

1. Can we draw the boundary without cross-service joins on every request?
2. Does this team have the ops capacity to own another on-call rotation?
3. Will independent deploys happen at least monthly, or are we adding overhead for nothing?
4. Do we have tracing and contract tests ready for the new boundary?

If the answers are weak, I keep the monolith modular inside and wait.

## The takeaway

There is no moral victory in either direction. The architecture that wins is the one your team can operate confidently at 3am — and the one you can explain to a new engineer in an afternoon without a diagram that looks like a subway map.

Start simple. Split when the pain of staying together exceeds the pain of separating. Not before.
