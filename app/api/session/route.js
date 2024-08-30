
import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export const GET = async()=>{
    try {
        const session = await auth();
        return NextResponse.json(session);
    } catch (error) {
        return NextResponse.error();
    }
}
    

