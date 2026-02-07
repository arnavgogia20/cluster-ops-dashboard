import {
  HiOutlineServer,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { PageHeader, StatCard } from "~/components/dashboard";
import { dashboardStats } from "~/data/mock-data";

export default function OverviewPage() {
  return (
    <div>
      <PageHeader
        title="Overview"
        subtitle="Monitor your multi-cluster Kubernetes environment"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Clusters"
          value={dashboardStats.totalClusters}
          icon={HiOutlineServer}
          variant="info"
        />
        <StatCard
          title="Healthy Clusters"
          value={dashboardStats.healthyClusters}
          icon={HiOutlineCheckCircle}
          variant="success"
        />
        <StatCard
          title="Degraded Clusters"
          value={dashboardStats.degradedClusters}
          icon={HiOutlineExclamationCircle}
          variant="warning"
        />
        <StatCard
          title="Active Policies"
          value={dashboardStats.activePolicies}
          icon={HiOutlineClipboardList}
          variant="default"
        />
      </div>

      {/* Quick Stats Section */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
            Cluster Distribution
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Production</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">4 clusters</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
              <div className="h-2 rounded-full bg-blue-500" style={{ width: "50%" }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Staging</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">1 cluster</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
              <div className="h-2 rounded-full bg-purple-500" style={{ width: "12.5%" }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Development</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">2 clusters</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
              <div className="h-2 rounded-full bg-amber-500" style={{ width: "25%" }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Edge</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">1 cluster</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
              <div className="h-2 rounded-full bg-emerald-500" style={{ width: "12.5%" }} />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
            Workload Status
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Running</span>
              <span className="ml-auto text-sm font-medium text-gray-900 dark:text-white">
                {dashboardStats.runningWorkloads} workloads
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Pending</span>
              <span className="ml-auto text-sm font-medium text-gray-900 dark:text-white">1 workload</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Degraded</span>
              <span className="ml-auto text-sm font-medium text-gray-900 dark:text-white">1 workload</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Stopped</span>
              <span className="ml-auto text-sm font-medium text-gray-900 dark:text-white">1 workload</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
