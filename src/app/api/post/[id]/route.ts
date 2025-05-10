import { SQL } from '@/lib/db';
import { Post } from '@/types/post';
import { NextResponse } from 'next/server';

interface RouteContext {
    params: Promise<{
      id: string
    }>;
  }
export async function GET(_: Request,context: RouteContext) {
  const params=context.params
  const {id} = await params;
  try {
    const post = await SQL<Post>(
        `SELECT title,content FROM post WHERE id=${id}`
      );
    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { message: `Failed to fetch post with id ${id}`, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
