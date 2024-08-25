"use client";

import { useContext } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { doLogin } from "@/app/action";
import { SessionContext } from "@/context/SessionProvider";

const Navbar = () => {
    const { session, handleLogOut } = useContext(SessionContext);

    return (
        <section className="flex items-center justify-between px-[5rem] py-[2rem]">
            <div className="flex items-center gap-4">
                <Image src={"/logo.svg"} alt="logo" width={40} height={40} priority />
                <h1 className="text-2xl tracking-wide font-medium">Promptify</h1>
            </div>
            {session ? (
                <div className="flex items-center gap-8">
                    <Button className="text-lg p-6 rounded-full">Create Post</Button>
                    <Button onClick={handleLogOut} variant="outline" className="text-lg p-6 rounded-full">
                        Sign out
                    </Button>
                    <Image src={session?.user?.image || "/logo.svg"} alt="profile" width={50} height={50} priority className="rounded-full" />
                </div>
            ) : (
                <form action={doLogin}>
                    <Button name="action" value="google" type="submit" variant="outline" className="text-lg p-6 rounded-full">
                        Sign In
                    </Button>
                </form>
            )}
        </section>
    );
};

export default Navbar;
