"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
    value: number;
};

export default function ProgressBar({ value }: ProgressBarProps) {
    return (
        <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-700">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                }}
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
            />
        </div>
    );
}