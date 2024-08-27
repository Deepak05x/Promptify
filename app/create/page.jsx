import React from "react";
import dynamic from "next/dynamic";

const Title = dynamic(() => import("@/components/PostPage/Title.jsx"));

const Create = () => {
    return (
        <section className="flex items-center w-full justify-center h-full py-24">
            <Title />
        </section>
    );
};

export default Create;
