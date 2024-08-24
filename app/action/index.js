"use server"

import { signIn, signOut } from "@/auth"

export const doLogin = async(formData)=>{
    const action = formData.get('action')
    await signIn(action, {redirectTo: '/'})
}

export const doLogOut = async()=>{
    await signOut({redirectTo: '/'})
}