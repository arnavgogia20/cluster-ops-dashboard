import { ThemeModeScript } from "flowbite-react";
import { Inter as InterFont } from "next/font/google";
import type { Metadata, Viewport } from "next/types";
import type { PropsWithChildren } from "react";
// import { ThemeInit } from "../.flowbite-react/init";

import "~/styles/globals.css";

const interFont = InterFont({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  description: "Multi-Cluster Resource & Health Overview — A frontend-only UX exploration for Kubernetes operators.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    charSet: "utf-8",
    lang: "en",
  },
  title: "ClusterOps Dashboard",
  openGraph: {
    description: "Multi-Cluster Resource & Health Overview — A frontend-only UX exploration for Kubernetes operators.",
    title: "ClusterOps Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClusterOps Dashboard",
    description: "Multi-Cluster Resource & Health Overview — A frontend-only UX exploration for Kubernetes operators.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${interFont.variable} font-sans`} suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className="bg-gray-50 text-gray-700 antialiased dark:bg-gray-900 dark:text-gray-300">
        {/* <ThemeInit /> */}
        {children}
      </body>
    </html>
  );
}
