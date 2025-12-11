"use client";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 space-y-4">
      {/* Spinner */}
      <div className="w-20 h-20 rounded-full border-4 border-transparent border-t-blue-500 border-b-purple-500 animate-spin"></div>

      {/* Animated Loading text */}
      <p className="text-lg font-medium flex space-x-1">
        <span className="text-blue-700 dark:text-blue-400">Loading</span>
        <span className="text-blue-700 dark:text-blue-400 animate-bounce animation-delay-75">
          .
        </span>
        <span className="text-blue-700 dark:text-blue-400 animate-bounce animation-delay-150">
          .
        </span>
        <span className="text-blue-700 dark:text-blue-400 animate-bounce animation-delay-225">
          .
        </span>
      </p>
    </div>
  );
}
