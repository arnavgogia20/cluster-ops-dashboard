# ClusterOps Dashboard

A frontend-only Kubernetes operator dashboard UX exploration.

![ClusterOps Dashboard Overview](apps/web/screenshots/overview.png)

## What This Project Demonstrates

- **Information Architecture**: Organized navigation for multi-cluster operations (Overview, Clusters, Workloads, Policies)
- **Operator UX**: Calm, dense, operator-friendly interface with subtle shadows and clear typography
- **Status Visualization**: Soft-colored status badges, summary cards, and cluster distribution charts

## What This Project Intentionally Does NOT Do

- ❌ **No real APIs** — All data is static mock data
- ❌ **No authentication** — No login or access control
- ❌ **No cluster mutation** — Pure read-only visualization; no create/update/delete operations
- ❌ **No backend** — 100% frontend-only implementation

## Tech Stack

| Technology         | Purpose                         |
| ------------------ | ------------------------------- |
| **Next.js 14**     | React framework with App Router |
| **TypeScript**     | Type-safe development           |
| **Flowbite React** | UI component library            |
| **Tailwind CSS**   | Utility-first styling           |

## Pages

| Page          | Description                                            |
| ------------- | ------------------------------------------------------ |
| **Overview**  | Summary cards + cluster distribution + workload status |
| **Clusters**  | Table of 8 mock clusters with status, nodes, regions   |
| **Workloads** | Table of 10 mock workloads with target clusters        |
| **Policies**  | Table of 8 mock policies with match scopes             |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
cd apps/web
npm run dev

# Build for production
npm run build
```

## Project Origin

Derived from [Flowbite React](https://github.com/themesberg/flowbite-react), refactored as a demo-focused Kubernetes operator dashboard for proposal evaluation and screenshots.

---

_Frontend-only UX exploration — no backend integration_
