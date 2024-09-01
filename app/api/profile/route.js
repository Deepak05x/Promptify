import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import connectToDb from '@/lib/db';
import Post from '@/models/PostModel';

export const GET = async () => {
    try {
   
const session = await auth();

        if (!session || !session.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        await connectToDb();            
        const posts = await Post.find({ user: session.user.id });
        return NextResponse.json(posts, {status: 200});
    } catch (error) {
        console.error('Error while fetching the posts:', error.message);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
};
