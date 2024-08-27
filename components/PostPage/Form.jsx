import React from "react";
import { Input } from "../ui/input";

const Form = () => {
    return (
        <form action="" className="w-full flex flex-col items-center border-2 border-black max-w-[50vw] p-8 gap-12">
            <div className="flex flex-col items-start w-full gap-4">
                <label htmlFor="prompt">Your AI Prompt</label>
                <Input id="prompt" placeholder="Share Your Prompts" className="lg:max-w-[50vw] md:max-w-[60vw] sm:max-w-[70vw] ssm:max-w-[80vw] border-gray-600" />
            </div>
            <div className="flex flex-col items-start w-full gap-4">
                <label htmlFor="tag">Tag</label>
                <Input id="tag" className="lg:max-w-[50vw] md:max-w-[60vw] sm:max-w-[70vw] ssm:max-w-[80vw] border-gray-600" />
            </div>
        </form>
    );
};

export default Form;
