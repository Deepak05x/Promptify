"use client";

import { useState, useEffect, createContext } from "react";

import React from "react";
import { doLogOut } from "@/app/action";

export const SessionContext = createContext();

const SessionProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const fetchSession = async () => {
            const response = await fetch("/api/session");
            const sessionData = await response.json();
            setSession(sessionData);
        };
        fetchSession();
    }, []);

    const handleLogOut = async () => {
        await doLogOut();
        setSession(null);
        window.location.reload();
    };

    return <SessionContext.Provider value={{ session, handleLogOut }}>{children}</SessionContext.Provider>;
};

export default SessionProvider;
