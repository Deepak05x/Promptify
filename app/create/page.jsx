import React from "react";
import dynamic from "next/dynamic";

const Title = dynamic(() => import("@/components/PostPage/Title.jsx"));
const Form = dynamic(() => import("@/components/PostPage/Form.jsx"));

const Create = () => {
    return (
        <section className="flex flex-col items-center w-full justify-center h-full py-12 gap-16">
            <Title />
            <Form />
        </section>
    );
};

export default Create;
