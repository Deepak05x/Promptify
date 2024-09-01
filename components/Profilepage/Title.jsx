"use client";

import React from "react";
import { motion } from "framer-motion";

const Title = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 text-center"
        >
            <h1 className="md:text-6xl sm:text-5xl ssm:text-4xl font-[850] gradient">Profile</h1>
            <p className="lg:max-w-[60vw]  md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[95vw] text-center text-gray-500 md:text-xl sm:text-lg">
                Your Personal Space Where You Can See All Your Prompts And Remove It As Per Your Desire
            </p>
        </motion.section>
    );
};

export default Title;
