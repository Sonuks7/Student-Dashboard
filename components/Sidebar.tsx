"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Activity",
    icon: BarChart3,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <aside className="hidden md:flex min-h-screen w-24 flex-col items-center border-r border-gray-800 bg-[#111827] py-6">

      <h1 className="mb-10 text-2xl font-bold text-white">
        LMS
      </h1>

      <nav className="flex flex-col gap-5">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <motion.button
              key={item.name}
              onClick={() => setActive(item.name)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-xl p-4 transition ${
                active === item.name
                  ? "bg-indigo-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon size={24} />
            </motion.button>
          );
        })}

      </nav>

    </aside>
  );
}