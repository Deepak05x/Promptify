import React from "react";
import { Input } from "../ui/input";

const Form = () => {
    return (
        <form action="" className="w-full flex items-center justify-center">
            <Input className="lg:max-w-[50vw] md:max-w-[60vw] sm:max-w-[70vw] ssm:max-w-[80vw] border-gray-600" placeholder="Search For Tag&nbsp;/&nbsp;Username" />
        </form>
    );
};

export default Form;
