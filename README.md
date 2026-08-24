# rohan-web-frontend

Static web frontend served by a tiny Express server — a **demo entity for the Cortex Professional Services assessment**.

This repo is the **GitOps-defined** one: the entity is not imported through the Cortex UI but declared by the [`cortex.yaml`](cortex.yaml) committed here, which the Cortex GitHub App picks up from the default branch. It also deliberately has **current, clean dependency pins**, so it acts as the control case next to `rohan-payments-api` / `rohan-orders-worker` when comparing security findings and Scorecard results.

```bash
npm ci
npm start   # http://localhost:3000
```

<!-- Entity is defined via cortex.yaml on main (GitOps). -->
