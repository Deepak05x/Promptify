"use client";

import { useState } from "react";
import React from "react";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/components/Homepage/Card.jsx"));

const Post = () => {
    return (
        <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full items-center justify-center gap-8 px-12 ">
            <Card />
        </section>
    );
};

export default Post;
