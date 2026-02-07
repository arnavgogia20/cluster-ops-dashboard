// ClusterOps Dashboard - Mock Data
// Frontend-only demonstration with realistic Kubernetes data

export interface Cluster {
  id: string;
  name: string;
  status: "Healthy" | "Degraded";
  nodeCount: number;
  lastHeartbeat: string;
  region: string;
  version: string;
}

export interface Workload {
  id: string;
  name: string;
  namespace: string;
  targetClusters: string;
  status: "Running" | "Pending" | "Degraded" | "Stopped";
  replicas: number;
  type: "Deployment" | "StatefulSet" | "DaemonSet";
}

export interface Policy {
  id: string;
  name: string;
  type: "PropagationPolicy" | "OverridePolicy" | "ClusterPropagationPolicy";
  matchScope: string;
  appliedClusters: number;
  createdAt: string;
}

export const clusters: Cluster[] = [
  {
    id: "c1",
    name: "prod-us-east-1",
    status: "Healthy",
    nodeCount: 12,
    lastHeartbeat: "2 min ago",
    region: "US East",
    version: "v1.28.4",
  },
  {
    id: "c2",
    name: "prod-us-west-2",
    status: "Healthy",
    nodeCount: 8,
    lastHeartbeat: "1 min ago",
    region: "US West",
    version: "v1.28.4",
  },
  {
    id: "c3",
    name: "prod-eu-west-1",
    status: "Healthy",
    nodeCount: 10,
    lastHeartbeat: "3 min ago",
    region: "EU West",
    version: "v1.28.3",
  },
  {
    id: "c4",
    name: "prod-ap-south-1",
    status: "Healthy",
    nodeCount: 6,
    lastHeartbeat: "1 min ago",
    region: "Asia Pacific",
    version: "v1.28.4",
  },
  {
    id: "c5",
    name: "staging-us-east-1",
    status: "Healthy",
    nodeCount: 4,
    lastHeartbeat: "2 min ago",
    region: "US East",
    version: "v1.29.0",
  },
  {
    id: "c6",
    name: "dev-eu-west-1",
    status: "Degraded",
    nodeCount: 3,
    lastHeartbeat: "15 min ago",
    region: "EU West",
    version: "v1.29.1",
  },
  {
    id: "c7",
    name: "dev-us-west-2",
    status: "Healthy",
    nodeCount: 3,
    lastHeartbeat: "4 min ago",
    region: "US West",
    version: "v1.29.0",
  },
  {
    id: "c8",
    name: "edge-ap-northeast-1",
    status: "Degraded",
    nodeCount: 2,
    lastHeartbeat: "22 min ago",
    region: "Asia Pacific",
    version: "v1.27.8",
  },
];

export const workloads: Workload[] = [
  {
    id: "w1",
    name: "api-gateway",
    namespace: "production",
    targetClusters: "prod-*",
    status: "Running",
    replicas: 3,
    type: "Deployment",
  },
  {
    id: "w2",
    name: "user-service",
    namespace: "production",
    targetClusters: "prod-us-*, prod-eu-*",
    status: "Running",
    replicas: 2,
    type: "Deployment",
  },
  {
    id: "w3",
    name: "order-processor",
    namespace: "production",
    targetClusters: "prod-us-east-1",
    status: "Running",
    replicas: 4,
    type: "Deployment",
  },
  {
    id: "w4",
    name: "cache-cluster",
    namespace: "infrastructure",
    targetClusters: "prod-*",
    status: "Running",
    replicas: 3,
    type: "StatefulSet",
  },
  {
    id: "w5",
    name: "log-collector",
    namespace: "monitoring",
    targetClusters: "*",
    status: "Running",
    replicas: 1,
    type: "DaemonSet",
  },
  {
    id: "w6",
    name: "metrics-agent",
    namespace: "monitoring",
    targetClusters: "*",
    status: "Running",
    replicas: 1,
    type: "DaemonSet",
  },
  {
    id: "w7",
    name: "batch-worker",
    namespace: "batch",
    targetClusters: "dev-*, staging-*",
    status: "Pending",
    replicas: 2,
    type: "Deployment",
  },
  {
    id: "w8",
    name: "notification-service",
    namespace: "production",
    targetClusters: "prod-us-*",
    status: "Running",
    replicas: 2,
    type: "Deployment",
  },
  {
    id: "w9",
    name: "search-indexer",
    namespace: "production",
    targetClusters: "prod-us-east-1",
    status: "Degraded",
    replicas: 3,
    type: "Deployment",
  },
  {
    id: "w10",
    name: "cdn-origin",
    namespace: "edge",
    targetClusters: "edge-*",
    status: "Stopped",
    replicas: 0,
    type: "Deployment",
  },
];

export const policies: Policy[] = [
  {
    id: "p1",
    name: "production-propagation",
    type: "PropagationPolicy",
    matchScope: "namespace=production",
    appliedClusters: 4,
    createdAt: "14 days ago",
  },
  {
    id: "p2",
    name: "monitoring-global",
    type: "ClusterPropagationPolicy",
    matchScope: "namespace=monitoring",
    appliedClusters: 8,
    createdAt: "30 days ago",
  },
  {
    id: "p3",
    name: "frontend-override",
    type: "OverridePolicy",
    matchScope: "label:tier=frontend",
    appliedClusters: 6,
    createdAt: "7 days ago",
  },
  {
    id: "p4",
    name: "staging-resources",
    type: "OverridePolicy",
    matchScope: "cluster:staging-*",
    appliedClusters: 1,
    createdAt: "21 days ago",
  },
  {
    id: "p5",
    name: "batch-propagation",
    type: "PropagationPolicy",
    matchScope: "namespace=batch",
    appliedClusters: 3,
    createdAt: "5 days ago",
  },
  {
    id: "p6",
    name: "edge-config",
    type: "ClusterPropagationPolicy",
    matchScope: "label:topology=edge",
    appliedClusters: 1,
    createdAt: "45 days ago",
  },
  {
    id: "p7",
    name: "dev-resources-override",
    type: "OverridePolicy",
    matchScope: "cluster:dev-*",
    appliedClusters: 2,
    createdAt: "10 days ago",
  },
  {
    id: "p8",
    name: "infrastructure-propagation",
    type: "PropagationPolicy",
    matchScope: "namespace=infrastructure",
    appliedClusters: 4,
    createdAt: "60 days ago",
  },
];

// Summary statistics
export const dashboardStats = {
  totalClusters: clusters.length,
  healthyClusters: clusters.filter((c) => c.status === "Healthy").length,
  degradedClusters: clusters.filter((c) => c.status === "Degraded").length,
  activePolicies: policies.length,
  totalWorkloads: workloads.length,
  runningWorkloads: workloads.filter((w) => w.status === "Running").length,
};
