"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { IoClipboardOutline } from "react-icons/io5";
import { ToastContainer } from "react-toastify";

const Card = ({ item, handleCopy }) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-start h-full justify-between w-full bg-white/50 gap-8 rounded-md p-8"
        >
            <div className="flex items-center gap-4 w-full">
                <Image src={item.user.image} alt="dummy" width={40} height={40} className="cursor-pointer rounded-full" />
                <div>
                    <h1 className="text-lg font-medium  cursor-pointer underline-offset-2">{item.user.name}</h1>
                    <h2 className="text-md text-gray-500">{item.user.email}</h2>
                </div>
            </div>
            <h2 className=" text-start text-black/70">{item.prompt}</h2>
            <div className="flex items-center w-full justify-between">
                <h3 className=" cursor-pointer underline-offset-2 ">#{item.tag}</h3>
                <ToastContainer />
                <IoClipboardOutline className="text-xl cursor-pointer text-green-800 hover:scale-110 transition-all ease-in-out" onClick={() => handleCopy()} />
            </div>
        </motion.section>
    );
};

export default Card;
