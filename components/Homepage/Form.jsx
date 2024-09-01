"use client";

import { motion } from "framer-motion";
import React from "react";
import { Input } from "../ui/input";

const Form = () => {
    return (
        <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeInOut" }}
            className="w-full flex items-center justify-center"
        >
            <Input className="lg:max-w-[50vw] md:max-w-[60vw] sm:max-w-[70vw] ssm:max-w-[80vw] border-gray-600" placeholder="Search For Tag&nbsp;/&nbsp;Username" />
        </motion.form>
    );
};

export default Form;
