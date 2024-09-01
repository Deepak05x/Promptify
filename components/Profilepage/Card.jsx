"use client";

import React, { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { IoClipboardOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = () => {
    const [profilePost, setProfilePost] = useState([]);

    const fetchProfilePost = async () => {
        try {
            const response = await fetch("/api/profile");
            if (response.ok) {
                const data = await response.json();
                setProfilePost(data);
            } else {
                console.error("Failed to fetch profile post");
            }
        } catch (error) {
            console.error("Error fetching profile post:", error);
        }
    };

    useEffect(() => {
        fetchProfilePost();
    }, []);

    console.log(profilePost);

    return (
        <>
            {profilePost.map((item, index) => (
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    key={index}
                    className="flex flex-col items-start w-full bg-white/50 gap-8 rounded-md p-8"
                >
                    <h2 className=" text-start text-black/70">{item.prompt}</h2>
                    <div className="flex items-center justify-between w-full">
                        <h3 className=" cursor-pointer underline-offset-2 ">#{item.tag}</h3>
                        <div className="flex items-center gap-4">
                            <IoClipboardOutline className="text-xl cursor-pointer text-green-800 hover:scale-110 transition-all ease-in-out" />
                            <CiTrash className="text-2xl cursor-pointer text-red-500 hover:scale-110 transition-all ease-in-out" />
                        </div>
                    </div>
                </motion.section>
            ))}
        </>
    );
};

export default Card;
