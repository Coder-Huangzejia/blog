import { query } from "./db";
import { Category } from "@/types/category";
import { Post } from "@/types/post";
import { DBIdType } from "@/types";

export async function fetchRemotePost(id: DBIdType): Promise<Post> {
  const post = await query<Post>(
    `SELECT title,content FROM post WHERE id=${id}`
  );
  return post?.[0];
}
export async function fetchPostsFromDataBase() {
  const [categories, posts] = await Promise.all([
    query<Category>("SELECT id,title FROM category"),
    query<Post>("SELECT id,title,pid FROM post"),
  ]);
  return categories.map((group) => {
    group.children = posts.filter((v) => v.pid === group.id);
    return group;
  });
}
