"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";

const Post = dynamic(() => import("@/components/Homepage/Post"));
const Title = dynamic(() => import("@/components/Homepage/Title"));
const Form = dynamic(() => import("@/components/Homepage/Form"));

const Home = () => {
    const [query, setQuery] = useState("");

    return (
        <section className="flex flex-col items-center justify-center py-12 h-full gap-16 w-full">
            <Title />
            <Form setQuery={setQuery} />
            <Post query={query} />
        </section>
    );
};

export default Home;
