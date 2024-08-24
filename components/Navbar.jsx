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
                <Image src={"/logo.svg"} alt="logo" width={50} height={50} priority />
                <h1 className="text-3xl tracking-wide font-medium">Promptify</h1>
            </div>
            {session ? (
                <div className="flex items-center gap-8">
                    <Image src={session?.user?.image || "/logo.svg"} alt="profile" width={50} height={50} priority className="rounded-full" />
                    <Button onClick={handleLogOut} className="text-lg px-8 py-6">
                        Sign out
                    </Button>
                </div>
            ) : (
                <form action={doLogin}>
                    <Button name="action" value="google" type="submit" className="text-lg px-8 py-6">
                        Sign In
                    </Button>
                </form>
            )}
        </section>
    );
};

export default Navbar;
