---
title: "SLAs under 300ms: what actually moves the needle"
excerpt: "Faster frameworks help. Better indexes help more. The real gains come from eliminating synchronous hops, right-sizing payloads, and measuring the right things."
publishedAt: "2025-09-01"
readTime: "5 min"
---

A 300ms SLA sounds generous until you stack five synchronous service calls, two database round trips, and a cache miss into a single user-facing request. Suddenly you have 40ms of budget left and a product manager asking why the dashboard feels slow.

I spent years optimizing backends under that constraint. Framework choice mattered less than architecture discipline.

## The math nobody writes down

Every synchronous hop adds tail latency, not just average latency. If each dependency has a p99 of 60ms, four hops in series do not give you 240ms p99 — they give you a much uglier number because tails compound.

The highest-leverage move is almost always **removing hops**, not making hops faster:

- Collapse read paths that fan out to three services into one query with a purpose-built view
- Push aggregation to the data layer when the API is just reshaping rows
- Replace chatty REST sequences with a single endpoint shaped for the client

We cut average response time by an estimated 60% on critical microservices not by switching runtimes, but by deleting unnecessary calls from the hot path.

## Payload size is a performance feature

Oversized JSON responses are silent killers. I have seen teams spend weeks tuning connection pools while shipping 800KB payloads for a table that displays twelve columns.

What worked:

- Pagination with cursor-based navigation, not offset scans on large tables
- Field selection at the API level — clients request what they need
- Compression at the edge, but only after right-sizing the body

A 30% latency reduction on ClickHouse and BigQuery queries came from rewriting wide aggregations into pre-computed summary tables. The indexes were fine. The shape of the question was wrong.

## Measure tails, optimize tails

Average response time is a vanity metric for SLAs. I track:

- p50, p95, p99 per endpoint and per dependency
- Time spent waiting on each downstream call within a trace
- Cache hit ratio segmented by endpoint, not globally

When p99 moves, I look at the slowest span in traces first. Nine times out of ten it is one dependency or one query plan, not the framework.

## Practical checklist

Before reaching for a faster language or bigger instances:

- How many synchronous network calls are on the critical path?
- What is the payload size at p99, not just the happy path?
- Are database queries indexed for the actual filter combination, not the demo query?
- Is there a warm cache path that is measurably cheaper than the cold path?

Sub-300ms is not a framework feature. It is what you get when you respect the math and remove work from the request — not when you hero-optimize the work that remains.
