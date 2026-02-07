import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { PageHeader, StatusBadge } from "~/components/dashboard";
import { clusters } from "~/data/mock-data";

export default function ClustersPage() {
  return (
    <div>
      <PageHeader
        title="Clusters"
        subtitle="Manage and monitor your connected Kubernetes clusters"
      />

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell>Node Count</TableHeadCell>
              <TableHeadCell>Region</TableHeadCell>
              <TableHeadCell>Version</TableHeadCell>
              <TableHeadCell>Last Heartbeat</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
              {clusters.map((cluster) => (
                <TableRow
                  key={cluster.id}
                  className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {cluster.name}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={cluster.status} />
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">
                    {cluster.nodeCount} nodes
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">
                    {cluster.region}
                  </TableCell>
                  <TableCell>
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                      {cluster.version}
                    </code>
                  </TableCell>
                  <TableCell className="text-gray-500 dark:text-gray-400">
                    {cluster.lastHeartbeat}
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
