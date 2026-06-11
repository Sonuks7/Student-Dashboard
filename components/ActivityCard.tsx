"use client";

import { motion } from "framer-motion";

export default function ActivityCard() {
  const activity = [
    1, 3, 0, 4, 1, 2, 4,
    3, 2, 1, 4, 3, 2, 1,
    4, 0, 2, 1, 4, 2, 3,
    1, 2, 4, 3, 2, 1, 4,
    3, 2, 1, 4, 2, 0, 0,
  ];

  const colors = [
    "bg-gray-700",
    "bg-green-900",
    "bg-green-700",
    "bg-green-500",
    "bg-green-400",
  ];

  return (
    <motion.article
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-gray-800 bg-[#1A1A1A] p-6 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Activity
        </h2>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
          Last 35 Days
        </span>
      </div>

      <p className="mt-2 text-gray-400">
        Your learning consistency
      </p>

      <div className="mt-8 grid grid-cols-5 sm:grid-cols-7 gap-3">
        {activity.map((level, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            className={`h-5 w-5 rounded ${colors[level]}`}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-between text-sm text-gray-400">
        <span>Less</span>

        <div className="flex gap-2">
          <div className="h-4 w-4 rounded bg-gray-700"></div>
          <div className="h-4 w-4 rounded bg-green-900"></div>
          <div className="h-4 w-4 rounded bg-green-700"></div>
          <div className="h-4 w-4 rounded bg-green-500"></div>
          <div className="h-4 w-4 rounded bg-green-400"></div>
        </div>

        <span>More</span>
      </div>
    </motion.article>
  );
}