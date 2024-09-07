import connectToDb from "@/lib/db";
import Post from "@/models/PostModel";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectToDb();
        const response = await Post.find({});
        console.log("Fetched posts:", response);
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error.message);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
};
