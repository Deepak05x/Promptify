import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import User from '@/models/UserModel'
import connectToDb from "./lib/db";


export const {handlers : {GET, POST}, signIn, signOut, auth} = 
NextAuth({
    session:{
        strategy: "jwt"
    },
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization:{
                params:{
                    prompt:"consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }

        })
    ],
    callbacks: {
        async signIn({user}){
            await connectToDb()

            const existingUser = await User.findOne({email : user.email})
            if(!existingUser){
                await User.create({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                })
            }
            return true
        },
        async session({session}){
            const dbUser = await User.findOne({email : session.user.email})
            session.user.id = dbUser._id;
            return session
        }
    }
})