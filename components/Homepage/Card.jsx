import React from "react";
import Image from "next/image";

const Card = () => {
    return (
        <section className="flex flex-col items-center">
            <div>
                <h1>Deepak</h1>
                <Image src={"/logo.svg"} alt="dummy" width={30} height={30} />
            </div>
            <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium numquam dolorem, deleniti vitae laboriosam voluptas unde nulla eius sapiente odit, iure molestiae repellat
                quae cumque amet consequatur velit distinctio.
            </h2>
            <h3>Coding</h3>
        </section>
    );
};

export default Card;
