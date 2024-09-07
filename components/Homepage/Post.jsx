"use client";

import { useEffect, useState, useContext } from "react";
import React from "react";
import dynamic from "next/dynamic";
import { SessionContext } from "@/context/SessionProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = dynamic(() => import("@/components/Homepage/Card.jsx"));

const Post = ({ query }) => {
    const [posts, setPosts] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const { session } = useContext(SessionContext);

    const fetchPost = async () => {
        try {
            const response = await fetch("/api/feed");
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
                setFiltered(data);
            } else {
                console.log("Error in fetching the feed");
            }
        } catch (error) {
            console.log("Error in the fetching the api", error);
        }
    };

    console.log(posts);

    const handleCopy = (prompt) => {
        navigator.clipboard
            .writeText(prompt)
            .then(() => {
                toast.success("Text copied to clipboard", {
                    position: "bottom-center",
                    autoClose: 2000,
                });
            })
            .catch(() => {
                toast.error("Text not copied to clipboard", {
                    position: "bottom-center",
                    autoClose: 2000,
                });
            });
    };

    useEffect(() => {
        fetchPost();
    }, []);

    console.log(posts);

    useEffect(() => {
        if (query) {
            const filtered = posts.filter((post) => post.user.name.toLowerCase().includes(query.toLowerCase()) || post.tag.toLowerCase().includes(query.toLowerCase()));
            setFiltered(filtered);
        } else {
            setFiltered(posts);
        }
    }, [query]);

    return (
        <>
            {session ? (
                <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full items-center justify-center gap-8 ssm:px-4 sm:px-8">
                    {posts.map((item, index) => (
                        <Card key={index} item={item} handleCopy={() => handleCopy(item.prompt)} />
                    ))}
                </section>
            ) : (
                <></>
            )}
        </>
    );
};

export default Post;
