"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { doLogin } from "@/app/action";
import { SessionContext } from "@/context/SessionProvider";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    const { session, handleLogOut } = useContext(SessionContext);
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu((prevItem) => !prevItem);
    };

    return (
        <section className="flex items-center justify-between lg:px-[3rem] sm:px-[2rem] ssm:px-[2rem]  py-[2rem]">
            <Link href={"/"} className="flex items-center gap-4">
                <Image src={"/logo.svg"} alt="logo" width={40} height={40} priority />
                <h1 className="text-2xl tracking-wide sm:flex ssm:hidden font-medium">Promptify</h1>
            </Link>
            {session ? (
                <div className="hidden items-center gap-8  md:flex">
                    <Link href={"/create"}>
                        <Button className="text-lg p-4 rounded-full">Create Post</Button>
                    </Link>

                    <Button onClick={handleLogOut} variant="outline" className="text-lg p-4 bg-white/50 rounded-full">
                        Sign out
                    </Button>
                    <Link href={"/profile"}>
                        <Image
                            src={session?.user?.image || "/logo.svg"}
                            alt="profile"
                            width={50}
                            height={50}
                            priority
                            className="rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out"
                        />
                    </Link>
                </div>
            ) : (
                <form action={doLogin} className="hidden md:flex">
                    <Button name="action" value="google" type="submit" variant="outline" className="text-lg bg-white/50 p-4 rounded-full">
                        Sign In
                    </Button>
                </form>
            )}
            <AnimatePresence>
                {menu ? (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 150 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute bg-white flex flex-col items-center py-24 gap-12  ssm:w-[100vw] sm:w-[50vw] h-[100%] top-0 right-0"
                    >
                        <IoIosClose className="text-6xl " onClick={() => toggleMenu()} />
                        {session ? (
                            <div className="md:hidden items-center gap-12 flex-col  flex">
                                <Link href={"/create"}>
                                    <Button className="text-lg p-4 rounded-full">Create Post</Button>
                                </Link>
                                <Button onClick={handleLogOut} variant="outline" className="text-lg p-4 rounded-full bg-white/50">
                                    Sign out
                                </Button>
                                <Image src={session?.user?.image || "/logo.svg"} alt="profile" width={50} height={50} priority className="rounded-full" />
                            </div>
                        ) : (
                            <form action={doLogin} className="md:hidden flex">
                                <Button name="action" value="google" type="submit" variant="outline" className="text-lg p-4 rounded-full bg-white/50">
                                    Sign In
                                </Button>
                            </form>
                        )}
                    </motion.div>
                ) : (
                    <IoIosMenu className="text-4xl md:hidden flex relative" onClick={() => toggleMenu()} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Navbar;
