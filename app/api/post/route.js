import  connectToDb  from "@/lib/db.js"
import Post from "@/models/PostModel"

export const POST = async(req)=>{
    const {user, prompt, tag} = await req.json()
    try{
        await connectToDb()
        const newPost = new Post({
            user: user,
            prompt: prompt,
            tag: tag,
        })


        await newPost.save()
        return new Response(JSON.stringify(newPost), {status: 201})
    }catch(error){
        console.log(error.message)
        return new Response(JSON.stringify({error: "A Error Occured"}), {status: 500})
    }
}

