import type { PropsWithChildren } from "react";
import { DashboardSidebar } from "~/components/dashboard";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="ml-64 flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
