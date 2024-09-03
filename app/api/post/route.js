import connectToDb from "@/lib/db.js";
import Post from "@/models/PostModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const { user, prompt, tag } = await req.json();
    try {
        await connectToDb();
        const newPost = new Post({
            user: user,
            prompt: prompt,
            tag: tag,
        });
        const savedPost = await newPost.save();
        return NextResponse.json(savedPost, { status: 200 });
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ error: "An Error Occurred" }, { status: 500 });
    }
};
