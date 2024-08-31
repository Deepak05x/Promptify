import React from "react";
import Image from "next/image";

const Card = ({ item }) => {
    return (
        <section className="flex flex-col items-start w-full bg-white gap-8 rounded-md p-8">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-xl font-medium  cursor-pointer underline-offset-2">Deepak</h1>
                <Image src={"/logo.svg"} alt="dummy" width={25} height={25} className="cursor-pointer" />
            </div>
            <h2 className=" text-start text-black/60">{item.prompt}</h2>
            <h3 className=" cursor-pointer underline-offset-2">{item.tag}</h3>
        </section>
    );
};

export default Card;
