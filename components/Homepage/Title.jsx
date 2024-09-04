"use client";

import { motion } from "framer-motion";
import React from "react";

const Title = () => {
    return (
        <section className="flex  flex-col gap-6 items-center px-4">
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:text-6xl sm:text-5xl ssm:text-4xl text-center font-[850]"
            >
                Discover & Share <span className="gradient">AI-Powered Prompts</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="lg:max-w-[60vw]  md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[95vw] text-center text-gray-500 md:text-xl sm:text-lg"
            >
                Share Your Valuable Prompts With Other&apos;s And Get To Know Other&apos;s Prompts By Exploring!
            </motion.p>
        </section>
    );
};

export default Title;
