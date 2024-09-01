"use client";

import { useEffect, useState, useContext } from "react";
import React from "react";
import dynamic from "next/dynamic";
import { SessionContext } from "@/context/SessionProvider";

const Card = dynamic(() => import("@/components/Homepage/Card.jsx"));

const Post = () => {
    const [posts, setPosts] = useState([]);

    const { session } = useContext(SessionContext);

    const fetchPost = async () => {
        try {
            const response = await fetch("/api/feed");
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
            } else {
                console.log("Error in fetching the feed");
            }
        } catch (error) {
            console.log("Error in the fetching the api", error);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <>
            {session ? (
                <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full items-center justify-center gap-8 ssm:px-4 sm:px-8">
                    {posts.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </section>
            ) : (
                <></>
            )}
        </>
    );
};

export default Post;
