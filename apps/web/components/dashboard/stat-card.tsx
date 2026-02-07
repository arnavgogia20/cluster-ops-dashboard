import type { ReactNode } from "react";
import type { IconType } from "react-icons";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: IconType;
  variant?: "default" | "success" | "warning" | "info";
}

const variantStyles = {
  default: {
    iconBg: "bg-gray-100 dark:bg-gray-700",
    iconColor: "text-gray-600 dark:text-gray-300",
  },
  success: {
    iconBg: "bg-emerald-50 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  warning: {
    iconBg: "bg-amber-50 dark:bg-amber-900/20",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  info: {
    iconBg: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
};

export function StatCard({ title, value, icon: Icon, variant = "default" }: StatCardProps) {
  const styles = variantStyles[variant];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-4">
        <div className={`rounded-lg p-3 ${styles.iconBg}`}>
          <Icon className={`h-6 w-6 ${styles.iconColor}`} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}
