"use client";

import React from "react";
import Image from "next/image";
import { SessionContext } from "@/context/SessionProvider";
import { useContext } from "react";

const Title = () => {
    const { session } = useContext(SessionContext);
    return (
        <section className="flex flex-col items-center gap-6 text-center">
            <h1 className="md:text-6xl sm:text-5xl ssm:text-4xl font-[850] gradient">Profile</h1>
            <p className="lg:max-w-[60vw]  md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[95vw] text-center text-gray-500 md:text-xl sm:text-lg">
                Your Personal Space Where You Can See All Your Prompts And Remove It As Per Your Desire
            </p>
        </section>
    );
};

export default Title;
