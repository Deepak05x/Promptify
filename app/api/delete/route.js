import connectToDb from "@/lib/db"
import { NextResponse } from "next/server"
import Post from "@/models/PostModel"


export const DELETE = async(req)=>{
    try {
    const { id } = await req.json()
       await connectToDb()
       await Post.findOneAndDelete({_id: id}) 
       return NextResponse.json({message: "Post deleted successfully"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Failed to delete"}, {status: 500})
    }
}