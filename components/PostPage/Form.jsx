import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Form = () => {
    return (
        <form action="" className="w-full flex flex-col items-center bg-gray-100 rounded-sm max-w-[50vw] p-12 gap-12">
            <div className="flex flex-col items-start w-full gap-4">
                <label htmlFor="prompt" className="text-xl font-medium">
                    Your AI Prompt
                </label>
                <Textarea id="prompt" placeholder="Share Your Prompts" className="lg:max-w-[50vw] md:max-w-[60vw] sm:max-w-[70vw] ssm:max-w-[80vw] border-gray-600" />
            </div>
            <div className="flex flex-col items-start w-full gap-4">
                <label htmlFor="tag" className="text-xl font-medium">
                    Tag
                </label>
                <Input id="tag" placeholder="Enter Your Tag" className=" text-md lg:max-w-[50vw] md:max-w-[60vw] sm:max-w-[70vw] ssm:max-w-[80vw] border-gray-600" />
            </div>
            <Button className="text-xl rounded-full">Submit</Button>
        </form>
    );
};

export default Form;
