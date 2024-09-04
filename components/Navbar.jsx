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
import { usePathname } from "next/navigation";

const Navbar = () => {
    const { session, handleLogOut } = useContext(SessionContext);
    const [menu, setMenu] = useState(false);

    const pathname = usePathname();

    const toggleMenu = () => {
        setMenu((prevItem) => !prevItem);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            key={pathname}
            className="flex items-center relative justify-between lg:px-[3rem] sm:px-[2rem] ssm:px-[2rem]  py-[2rem]"
        >
            <Link href={"/"} className="flex items-center gap-4">
                <Image src={"/cool_logo.png"} alt="logo" width={50} height={50} priority className="h-[3rem] rounded-full" />
                <h1 className="text-2xl tracking-wide sm:flex ssm:hidden font-medium">Promptify</h1>
            </Link>
            {session ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="hidden items-center gap-8  md:flex"
                >
                    <Link href={"/create"}>
                        <Button className="text-lg p-4 rounded-full">Create Post</Button>
                    </Link>

                    <Button onClick={handleLogOut} variant="outline" className="text-lg p-4 bg-white/50 rounded-full">
                        Sign out
                    </Button>
                    <Link href={"/profile"}>
                        <Image
                            src={session?.user?.image || "/cool_logo.png"}
                            alt="profile"
                            width={50}
                            height={50}
                            priority
                            className="rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out"
                        />
                    </Link>
                </motion.div>
            ) : (
                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    action={doLogin}
                    className="hidden md:flex"
                >
                    <Button name="action" value="google" type="submit" variant="outline" className="text-lg bg-white/50 p-4 rounded-full">
                        Sign In
                    </Button>
                </motion.form>
            )}
            <AnimatePresence>
                {menu ? (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed rounded-[20px] z-30 backdrop-blur-3xl md:min-w-[60vw] sm:min-w-[80vw] ssm:min-w-[90vw] py-12 top-[30%] md:left-[20%] sm:left-[10%] ssm:left-[5%] flex flex-col items-center gap-16 translate-x-1/2 translate-y-1/2 bg-black/20"
                    >
                        <IoIosClose className="text-6xl " onClick={() => toggleMenu()} />
                        {session ? (
                            <div className="md:hidden items-center gap-12 flex-col  flex">
                                <Link href={"/create"}>
                                    <Button className="text-lg p-4 rounded-full" onClick={() => toggleMenu(false)}>
                                        Create Post
                                    </Button>
                                </Link>
                                <Button onClick={handleLogOut} variant="outline" className="text-lg p-4 rounded-full bg-white/50">
                                    Sign out
                                </Button>
                                <Image src={session?.user?.image || "/cool_logo.png"} alt="profile" width={50} height={50} priority className="rounded-full" />
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
                    <IoIosMenu className="text-4xl md:hidden flex" onClick={() => toggleMenu()} />
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Navbar;
