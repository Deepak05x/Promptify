import React from "react";
import dynamic from "next/dynamic";

const Title = dynamic(() => import("@/components/Homepage/Title"));
const Form = dynamic(() => import("@/components/Homepage/Form"));

const Home = () => {
    return (
        <section className="flex flex-col items-center justify-center py-24 h-full gap-12 w-full">
            <Title />
            <Form />
        </section>
    );
};

export default Home;
