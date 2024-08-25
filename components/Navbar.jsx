"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { doLogin } from "@/app/action";
import { SessionContext } from "@/context/SessionProvider";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
    const { session, handleLogOut } = useContext(SessionContext);
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu((prevItem) => !prevItem);
    };

    return (
        <section className="flex items-center justify-between lg:px-[3rem] sm:px-[2rem]  py-[2rem]">
            <div className="flex items-center gap-4">
                <Image src={"/logo.svg"} alt="logo" width={40} height={40} priority />
                <h1 className="text-2xl tracking-wide font-medium">Promptify</h1>
            </div>
            {session ? (
                <div className="hidden items-center gap-8  md:flex">
                    <Button className="text-lg p-4 rounded-full">Create Post</Button>
                    <Button onClick={handleLogOut} variant="outline" className="text-lg p-4 rounded-full">
                        Sign out
                    </Button>
                    <Image src={session?.user?.image || "/logo.svg"} alt="profile" width={50} height={50} priority className="rounded-full" />
                </div>
            ) : (
                <form action={doLogin} className="hidden md:flex">
                    <Button name="action" value="google" type="submit" variant="outline" className="text-lg p-4 rounded-full">
                        Sign In
                    </Button>
                </form>
            )}
            {menu ? (
                <div className="md:hidden flex ">
                    <div className="absolute bg-gray-300  w-[40vw] h-[100%] top-0 right-0">
                        <IoIosClose className="text-4xl " onClick={() => toggleMenu()} />
                    </div>
                </div>
            ) : (
                <IoIosMenu className="text-4xl relative" onClick={() => toggleMenu()} />
            )}
        </section>
    );
};

export default Navbar;
