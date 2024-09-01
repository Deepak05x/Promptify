"use client";

import React, { useEffect, useState } from "react";
import { FaClipboard, FaTrash } from "react-icons/fa";

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
                <section className="flex flex-col items-start w-full bg-white/50 gap-8 rounded-md p-8">
                    <h2 className=" text-start text-black/70">{item.prompt}</h2>
                    <div className="flex items-center justify-between w-full">
                        <h3 className=" cursor-pointer underline-offset-2 ">#{item.tag}</h3>
                        <div className="flex items-center gap-4">
                            <FaClipboard className="text-lg cursor-pointer text-green-800 hover:scale-110 transition-all ease-in-out" />
                            <FaTrash className="text-lg cursor-pointer text-red-500 hover:scale-110 transition-all ease-in-out" />
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default Card;
