"use client";

import { useEffect, useState } from "react";
import React from "react";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/components/Homepage/Card.jsx"));

const Post = () => {
    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
        const response = await fetch("/api/feed");
        const data = await response.json();
        setPosts(data);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    console.log(posts);

    return (
        <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full items-center justify-center gap-8 ssm:px-4 sm:px-8">
            {posts.map((item, index) => (
                <Card key={index} item={item} />
            ))}
        </section>
    );
};

export default Post;
