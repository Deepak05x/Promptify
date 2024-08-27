import React from "react";

const Title = () => {
    return (
        <section className="flex flex-col items-center gap-12 text-center">
            <h1 className="md:text-6xl sm:text-5xl ssm:text-4xl font-[850] gradient">Create Post</h1>
            <p className="lg:max-w-[60vw] md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[95vw] text-center text-gray-500 md:text-2xl sm:text-xl md:leading-[3rem] sm:leading-10 ssm:leading-8">
                Create and share amazing prompts with the world and let other&apos;s see your imagination
            </p>
        </section>
    );
};

export default Title;
