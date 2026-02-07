interface StatusBadgeProps {
  status: "Healthy" | "Degraded" | "Running" | "Pending" | "Stopped";
}

const statusStyles = {
  Healthy: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Running: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Degraded: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Pending: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400",
  Stopped: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
