import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Badge } from "flowbite-react";
import { PageHeader, StatusBadge } from "~/components/dashboard";
import { workloads } from "~/data/mock-data";

const typeColors: Record<string, "gray" | "indigo" | "purple"> = {
  Deployment: "indigo",
  StatefulSet: "purple",
  DaemonSet: "gray",
};

export default function WorkloadsPage() {
  return (
    <div>
      <PageHeader
        title="Workloads"
        subtitle="View workloads distributed across your clusters"
      />

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Type</TableHeadCell>
              <TableHeadCell>Namespace</TableHeadCell>
              <TableHeadCell>Target Clusters</TableHeadCell>
              <TableHeadCell>Replicas</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
              {workloads.map((workload) => (
                <TableRow
                  key={workload.id}
                  className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {workload.name}
                  </TableCell>
                  <TableCell>
                    <Badge color={typeColors[workload.type]} size="sm">
                      {workload.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                      {workload.namespace}
                    </code>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">
                    <span className="font-mono text-sm">{workload.targetClusters}</span>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">
                    {workload.replicas}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={workload.status} />
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
