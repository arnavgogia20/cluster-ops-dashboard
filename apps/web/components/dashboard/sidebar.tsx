"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { usePathname } from "next/navigation";
import {
  HiOutlineViewGrid,
  HiOutlineServer,
  HiOutlineCube,
  HiOutlineClipboardList,
} from "react-icons/hi";

const navItems = [
  { href: "/overview", label: "Overview", icon: HiOutlineViewGrid },
  { href: "/clusters", label: "Clusters", icon: HiOutlineServer },
  { href: "/workloads", label: "Workloads", icon: HiOutlineCube },
  { href: "/policies", label: "Policies", icon: HiOutlineClipboardList },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      aria-label="ClusterOps Dashboard Navigation"
      className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <SidebarLogo href="/overview" img="/favicon.svg" imgAlt="ClusterOps">
        <span className="text-xl font-semibold tracking-tight">ClusterOps</span>
      </SidebarLogo>
      <div className="px-3 py-2">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
          Multi-Cluster Overview
        </p>
      </div>
      <SidebarItems>
        <SidebarItemGroup>
          {navItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              active={pathname === item.href}
              className={
                pathname === item.href
                  ? "bg-gray-100 dark:bg-gray-700"
                  : ""
              }
            >
              {item.label}
            </SidebarItem>
          ))}
        </SidebarItemGroup>
      </SidebarItems>
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Frontend-only demo
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            No backend integration
          </p>
        </div>
      </div>
    </Sidebar>
  );
}
