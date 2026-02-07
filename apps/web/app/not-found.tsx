import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-sm px-4 py-8 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-300 dark:text-gray-700">404</h1>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Page Not Found
        </h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/overview"
          className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
