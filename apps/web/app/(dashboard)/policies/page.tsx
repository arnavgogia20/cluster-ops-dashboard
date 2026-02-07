import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Badge } from "flowbite-react";
import { PageHeader } from "~/components/dashboard";
import { policies } from "~/data/mock-data";

const policyTypeColors: Record<string, "blue" | "purple" | "cyan"> = {
  PropagationPolicy: "blue",
  OverridePolicy: "purple",
  ClusterPropagationPolicy: "cyan",
};

const policyTypeLabels: Record<string, string> = {
  PropagationPolicy: "Propagation",
  OverridePolicy: "Override",
  ClusterPropagationPolicy: "Cluster Propagation",
};

export default function PoliciesPage() {
  return (
    <div>
      <PageHeader
        title="Policies"
        subtitle="Manage propagation and override policies for multi-cluster deployments"
      />

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Type</TableHeadCell>
              <TableHeadCell>Match Scope</TableHeadCell>
              <TableHeadCell>Applied Clusters</TableHeadCell>
              <TableHeadCell>Created</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
              {policies.map((policy) => (
                <TableRow
                  key={policy.id}
                  className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {policy.name}
                  </TableCell>
                  <TableCell>
                    <Badge color={policyTypeColors[policy.type]} size="sm">
                      {policyTypeLabels[policy.type]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                      {policy.matchScope}
                    </code>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">
                    {policy.appliedClusters} {policy.appliedClusters === 1 ? "cluster" : "clusters"}
                  </TableCell>
                  <TableCell className="text-gray-500 dark:text-gray-400">
                    {policy.createdAt}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
