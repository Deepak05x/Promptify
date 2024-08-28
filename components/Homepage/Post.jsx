import React from "react";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/components/Homepage/Card.jsx"));

const Post = () => {
    return (
        <section>
            <Card />
        </section>
    );
};

export default Post;
