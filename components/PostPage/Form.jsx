"use client";

import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";

const Form = () => {
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });

    console.log(post);

    const handleSubmit = () => {};

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center border-[1px] border-gray-400  justify-center rounded-lg xl:max-w-[50vw] lg:max-w-[60vw] md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[90vw] p-12 gap-12"
        >
            <div className="flex flex-col items-start w-full gap-4">
                <label htmlFor="prompt" className="text-lg">
                    Your AI Prompt
                </label>
                <Textarea
                    id="prompt"
                    value={post.prompt}
                    onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                    placeholder="Share Your Prompts"
                    className="xl:max-w-[50vw] lg:max-w-[60vw] md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[90vw] border-gray-600"
                />
            </div>
            <div className="flex flex-col items-start w-full gap-4">
                <label htmlFor="tag" className="text-lg">
                    Tag
                </label>
                <Input
                    id="tag"
                    value={post.tag}
                    onChange={(e) => setPost({ ...post, tag: e.target.value })}
                    placeholder="Enter Your Tag"
                    className=" text-md xl:max-w-[50vw] lg:max-w-[60vw] md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[90vw] border-gray-600"
                />
            </div>
            <Button className="text-xl rounded-full">Submit</Button>
        </form>
    );
};

export default Form;
