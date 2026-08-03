---
title: "Big Data pipelines: batch vs stream in practice"
excerpt: "The textbook says stream everything. Production says pick the right tool. A pragmatic framework for choosing between batch and real-time pipelines."
publishedAt: "2025-12-01"
readTime: "7 min"
---

Every Big Data conference has the same slide: the lambda architecture, the kappa architecture, the unified dream. Then you go back to work and discover that your team has three engineers, a Kafka cluster nobody fully understands, and a finance team that wants yesterday's numbers by 8am.

I have built both batch and real-time pipelines processing millions of network events daily. The right answer is rarely ideological. It is operational.

## The question I actually ask

Instead of "batch or stream?", I ask: **how stale can the data be before the business suffers?**

| Latency need | Typical pattern |
|---|---|
| Seconds | Stream with windowed aggregations |
| Minutes | Micro-batch or stream with larger windows |
| Hours | Scheduled batch jobs |
| Daily | Batch ETL, idempotent, replayable |

If support agents need network status within 30 seconds during an outage, batch is the wrong tool. If finance needs revenue reconciliation by product line, streaming adds complexity with no benefit.

## When streaming earned its keep

In telecommunications anomaly detection, events arrived continuously — millions per day from network probes, OSS systems, and customer-facing status checks. The value was in **early signal**, not perfect nightly reconciliation.

We built a real-time pipeline that:

- Ingested events through a durable queue with backpressure handling
- Applied enrichment joins against a slowly-changing dimension store
- Fed Elastic Machine Learning models for predictive anomaly scoring
- Exposed results to the incident dashboard under a 300ms SLA

Streaming was justified because the cost of delay was measured in minutes of undetected network degradation, not in reporting accuracy.

## When batch was the adult in the room

Historical trend analysis, compliance exports, and ML training datasets did not need sub-minute freshness. Batch jobs with clear idempotency keys, partitioned outputs, and replay from a known offset were simpler to operate and easier to debug at 3am.

The mistake I see often is streaming these workloads because the infrastructure already exists. You end up with complex windowing logic to produce what a nightly Spark or BigQuery job would give you cleanly.

## A simple decision framework

Before committing to a pipeline architecture:

1. Define the freshness SLA in business terms, not engineering terms
2. Estimate the cost of failure — wrong number vs late number vs missing number
3. Count the operational surfaces: who gets paged, who replays data, who owns the schema
4. Start with the simplest model that meets the SLA, not the most impressive

Streaming is a tool. Batch is a tool. The architecture that wins is the one your team can run reliably on a Tuesday night when traffic is weird and someone is on call alone.
