import { NextResponse } from 'next/server';
import { fetchPostsFromDataBase } from '@/lib/post'; 

export async function GET() {
  try {
    const groups = await fetchPostsFromDataBase();
    return NextResponse.json(groups);
  } catch (error) {
    console.error('Error in /api/post/list GET handler:', error);
    return NextResponse.json(
      { message: 'Failed to fetch posts list', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
