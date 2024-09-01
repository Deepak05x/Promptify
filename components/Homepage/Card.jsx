"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Card = ({ item }) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-start w-full bg-white/50 gap-8 rounded-md p-8"
        >
            <div className="flex items-center justify-between w-full">
                <h1 className="text-xl font-medium  cursor-pointer underline-offset-2">{item.user.name}</h1>
                <Image src={item.user.image} alt="dummy" width={30} height={30} className="cursor-pointer rounded-full" />
            </div>
            <h2 className=" text-start text-black/70">{item.prompt}</h2>
            <h3 className=" cursor-pointer underline-offset-2 ">#{item.tag}</h3>
        </motion.section>
    );
};

export default Card;
