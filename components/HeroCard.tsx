"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white shadow-lg"
    >
      <h2 className="text-4xl font-bold">
        Welcome Back 👋
      </h2>

      <p className="mt-2 text-lg text-indigo-100">
        Keep learning! You're doing great.
      </p>

      <p className="mt-4 text-xl font-medium">
        🔥 Daily Streak: <span className="font-bold">7 Days</span>
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <h3 className="text-3xl font-bold">4</h3>
          <p className="mt-1 text-sm text-indigo-100">
            Total Courses
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <h3 className="text-3xl font-bold">69%</h3>
          <p className="mt-1 text-sm text-indigo-100">
            Avg Progress
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <h3 className="text-3xl font-bold">12h</h3>
          <p className="mt-1 text-sm text-indigo-100">
            Study Time
          </p>
        </div>
      </div>
    </motion.article>
  );
}