import connectToDb from "@/lib/db"
import Post from "@/models/PostModel"

export const GET = async()=>{
    try {
        await connectToDb()
        const response = await Post.find({}).populate("user")
        return new Response(JSON.stringify(response),{status:201})
    } catch (error) {
        console.log(error.message)
        return new Response(JSON.stringify("Error in the GET request"), {status:500})
    }
}