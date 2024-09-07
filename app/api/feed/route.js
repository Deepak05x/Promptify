import connectToDb from "@/lib/db";
import Post from "@/models/PostModel";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectToDb();
        const response = await Post.find({}).populate("user");
        console.log("Fetched posts:", response);
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ error: "The fetching of the feed was failed" }, { status: 500 });
    }
};
