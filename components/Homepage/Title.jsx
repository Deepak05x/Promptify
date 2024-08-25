import React from "react";

const Title = () => {
    return (
        <section className="flex flex-col gap-4 items-center px-4">
            <h1 className="flex flex-col items-center md:text-6xl sm:text-5xl ssm:text-4xl text-center font-[850] gap-4">
                Discover & Share <span className="gradient">AI-Powered Prompts</span>
            </h1>
            <p className="lg:max-w-[60vw] md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[95vw] text-center text-gray-500 md:text-2xl sm:text-xl md:leading-[3rem] sm:leading-10 ssm:leading-8  mt-10">
                Share Your Valuable Prompts With Other&apos;s And Get To Know Other&apos;s Prompts By Exploring!
            </p>
        </section>
    );
};

export default Title;
