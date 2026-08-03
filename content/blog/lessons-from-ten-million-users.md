---
title: "Lessons from serving 10 million users"
excerpt: "Scale changes the rules. Caching strategies that worked at 100k users become liabilities at 10M. Here is what I learned shipping backends where every millisecond counts."
publishedAt: "2026-02-01"
readTime: "8 min"
---

There is a version of backend engineering that works fine until it does not. You add a cache here, an index there, deploy on Friday, and nothing breaks. Then traffic multiplies by a hundred and assumptions you never wrote down become incidents.

I learned this operating backends for a telecommunications client with 10M+ active subscribers. The system did not fail loudly at first. It degraded — slowly, then all at once during national peak events.

## Scale rewrites your mental model

At 100k users, a naive database query is a performance smell. At 10M, it is an outage waiting for the right traffic spike. Strategies that felt clever at small scale — aggressive in-memory caching without invalidation discipline, synchronous cross-service calls, oversized API payloads — became structural liabilities.

The hardest lesson: **what you measure at small scale is not what matters at large scale**. Average response time looked healthy while p99 was climbing for weeks. Nobody noticed until customer support queues doubled during a football match.

## Caching is a contract, not a trick

We redesigned caching with three rules:

- Every cached value has an explicit TTL and an invalidation trigger
- Cache misses must be cheaper than the uncached path — not equal, cheaper
- Stale reads are acceptable only where the business says so, in writing

The third point sounds bureaucratic. It saved us from serving outdated network status to support agents who were already under pressure during incidents.

## Peak traffic is a design requirement

National events are not edge cases in telco. They are the main case you design for. We moved from reactive scaling to proactive capacity planning:

- Load tests that simulated realistic peak shapes, not flat RPS curves
- Circuit breakers on downstream dependencies with graceful degradation paths
- Read replicas and query routing tuned for the specific access patterns of incident dashboards

One ClickHouse query rewrite — splitting a wide aggregation into a pre-materialized summary table — cut retrieval latency by 30% and, more importantly, stabilized it under load.

## What I would tell my past self

If I could send a message back to the first week on that project:

- Instrument p95 and p99 from day one, not just averages
- Treat every synchronous hop as guilty until proven innocent
- Write down your scaling assumptions before traffic proves you wrong
- Peak traffic patterns are part of the domain model, not an ops afterthought

Scale does not punish bad code immediately. It waits. Then it invoices you with interest.
