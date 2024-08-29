import React from "react";

const Title = () => {
    return (
        <section className="flex flex-col gap-6 items-center px-4">
            <h1 className="flex flex-col items-center md:text-6xl sm:text-5xl ssm:text-4xl text-center font-[850]">
                Discover & Share <span className="gradient">AI-Powered Prompts</span>
            </h1>
            <p className="lg:max-w-[60vw]  md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[95vw] text-center text-gray-500 md:text-xl sm:text-lg">
                Share Your Valuable Prompts With Other&apos;s And Get To Know Other&apos;s Prompts By Exploring!
            </p>
        </section>
    );
};

export default Title;
