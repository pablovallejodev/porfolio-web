---
title: "Observability is not optional at scale"
excerpt: "Logs alone will not save you. Metrics, traces, and structured context are the minimum viable toolkit for teams running services under strict SLAs."
publishedAt: "2025-11-01"
readTime: "6 min"
---

The first time I debugged a production incident with only unstructured logs and a grep command, I was a junior engineer and it felt like detective work. The tenth time, with 40 microservices and a 300ms SLA, it felt like malpractice.

Observability is not a luxury add-on after launch. At scale, it is part of the product.

## The three pillars, minus the marketing

**Metrics** tell you something is wrong before users tell you. I instrument every service with:

- Request rate, error rate, and duration — the classic RED set
- Saturation signals: connection pool usage, queue depth, event loop lag
- Business counters tied to the actual job: events processed, anomalies flagged, cache hit ratio

A dashboard that only shows CPU usage is a weather report. You need signals connected to user-visible outcomes.

**Traces** tell you where it went wrong. When p99 spikes from 80ms to 400ms, averages lie and logs scatter. A trace ID propagated from the API gateway through every downstream call collapses a two-hour investigation into twenty minutes.

We made trace context non-negotiable: every outbound HTTP call, every queue publish, every database query carried the same correlation ID. Not because the tooling required it — because on-call engineers required it.

**Structured logs** are the story around the numbers. Free-text `console.log("error happened")` is technical debt with interest. Every log line in production carries:

- `traceId`, `service`, `environment`
- The operation name, not the function name
- Error codes and safe context — never raw PII

## What good enough looks like

You do not need a perfect observability platform on day one. You need a minimum bar before traffic arrives:

- Can you answer "what is the error rate right now?" in under 30 seconds?
- Can you follow a single failed request across service boundaries?
- Can you tell whether the database or the cache is the bottleneck without SSH?

If any answer is no, you are not ready for peak traffic.

## The cultural piece nobody ships

Tools are half the problem. The other half is team habit:

- Incidents produce timeline documents with trace links, not screenshots of graphs
- New services do not merge without a basic dashboard and alert thresholds
- Postmortems update runbooks, not just Confluence pages nobody reads

Observability is how you buy down the cost of complexity. At 10M users, that is not a nice-to-have. It is how you sleep during national peak events.
