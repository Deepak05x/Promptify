import React from "react";
import dynamic from "next/dynamic";

const Title = dynamic(() => import("@/components/Profilepage/Title.jsx"));
const Card = dynamic(() => import("@/components/Profilepage/Card.jsx"));

const Profile = () => {
    return (
        <section className="flex flex-col items-center justify-center py-12 h-full w-full gap-16">
            <Title />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full items-center justify-center gap-8 ssm:px-4 sm:px-8">
                <Card />
            </div>
        </section>
    );
};

export default Profile;
