"use client";

import {BookOpen, Code, Database, Globe,  Sparkles,} from "lucide-react";
import { motion } from "framer-motion";
import type { Course } from "@/types/course";
import ProgressBar from "./ProgressBar";

const icons={
    BookOpen,
    Code,
    Database,
    Globe,
    Sparkles,
};
type Props = {
    course: Course;
};

export default function CourseCard({ course }: Props) {
    const Icon=
    icons[course.icon_name as keyof typeof icons] || BookOpen;
    return (
        <motion.article
            whileHover={{
                scale: 1.03,
                y: -5,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="rounded-2xl border border-gray-800 bg-[#1A1A1A] p-6 shadow-lg"
        >
            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 text-2xl">
                <Icon size={30}/>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white">
                {course.title}
            </h3>

            {/* Progress */}
            <p className="mt-4 text-gray-400">
                Progress <span className="font-semibold text-white">{course.progress}%</span>
            </p>

            <ProgressBar value={course.progress} />

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full bg-indigo-600/20 px-3 py-1 text-sm text-indigo-300">
                    In Progress
                </span>

                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                    Continue
                </button>
            </div>
        </motion.article>
    );
}