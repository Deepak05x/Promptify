"use client";

import React, { useContext, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { SessionContext } from "@/context/SessionProvider";
import { useRouter } from "next/navigation";

const Form = () => {
    const router = useRouter();

    const { session } = useContext(SessionContext);

    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!post.prompt || !post.tag) {
            alert("The Prompt and the Tag cannot be empty");
        }
        try {
            const response = await fetch("/api/post", {
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                    user: session?.user.id,
                }),
            });
            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center border-[1px]  bg-white/50 justify-center rounded-lg xl:max-w-[50vw] lg:max-w-[60vw] md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[90vw] p-12 gap-12"
        >
            <div className="flex flex-col items-start w-full gap-2">
                <label htmlFor="prompt" className="text-md">
                    Prompt
                </label>
                <Textarea
                    id="prompt"
                    value={post.prompt}
                    onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                    placeholder="Share Your Prompts"
                    className="xl:max-w-[50vw] lg:max-w-[60vw] md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[90vw] border-black/20 border-[1px]"
                />
            </div>
            <div className="flex flex-col items-start w-full gap-2">
                <label htmlFor="tag" className="text-md">
                    Tag
                </label>
                <Input
                    id="tag"
                    value={post.tag}
                    onChange={(e) => setPost({ ...post, tag: e.target.value })}
                    placeholder="Enter Your Tag"
                    className=" text-md xl:max-w-[50vw] lg:max-w-[60vw] md:max-w-[70vw] sm:max-w-[80vw] ssm:max-w-[90vw] border-black/20 border-[1px]"
                />
            </div>
            <Button className="text-xl rounded-full">Submit</Button>
        </form>
    );
};

export default Form;
