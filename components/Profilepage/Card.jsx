"use client";

import React, { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { IoClipboardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    const handleDelete = async (id) => {
        try {
            const response = await fetch("/api/delete", {
                method: "DELETE",
                body: JSON.stringify({ id }),
            });
            if (response.ok) {
                setProfilePost((prevItem) => prevItem.filter((post) => post._id !== id));
            } else {
                console.log("Failed to delete post");
            }
        } catch (error) {
            console.log("Error in the delete function : ", error);
        }
    };

    const handleCopy = (prompt) => {
        navigator.clipboard
            .writeText(prompt)
            .then(() => {
                toast.success("Text Copied To Clipboard", {
                    position: "bottom-center",
                    autoClose: 2000,
                });
            })
            .catch(() => {
                toast.error("Text Did Not Copied To Clipboard", {
                    position: "bottom-center",
                    autoClose: 2000,
                });
            });
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
                    className="flex flex-col justify-between items-start h-full w-full bg-white/50 gap-8 rounded-md p-8"
                >
                    <h2 className=" text-start text-black/70">{item.prompt}</h2>
                    <div className="flex items-center justify-between w-full">
                        <h3 className=" cursor-pointer underline-offset-2 ">#{item.tag}</h3>
                        <div className="flex items-center gap-4">
                            <IoClipboardOutline className="text-xl cursor-pointer text-green-800 hover:scale-110 transition-all ease-in-out" onClick={() => handleCopy(item.prompt)} />
                            <ToastContainer />
                            <CiTrash className="text-2xl cursor-pointer text-red-500 hover:scale-110 transition-all ease-in-out" onClick={() => handleDelete(item._id)} />
                        </div>
                    </div>
                </motion.section>
            ))}
        </>
    );
};

export default Card;
