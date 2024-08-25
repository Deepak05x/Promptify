import React from "react";
import Title from "@/components/Homepage/Title";
import Form from "@/components/Homepage/Form";

const Home = () => {
    return (
        <section className="flex flex-col items-center justify-center py-12 gap-12 w-full">
            <Title />
            <Form />
        </section>
    );
};

export default Home;
