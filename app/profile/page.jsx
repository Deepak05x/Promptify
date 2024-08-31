import React from "react";
import dynamic from "next/dynamic";

const Title = dynamic(() => import("@/components/Profilepage/Title.jsx"));

const Profile = () => {
    return (
        <section className="flex flex-col items-center justify-center py-12 h-full w-full">
            <Title />
        </section>
    );
};

export default Profile;
