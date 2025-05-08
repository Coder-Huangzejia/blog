import { SQL } from "./db";
import { Category } from "@/types/category";
import { Post } from "@/types/post";


export async function fetchPostsFromDataBase() {
  const [categories, posts] = await Promise.all([
    SQL<Category>("SELECT id,title FROM category"),
    SQL<Post>("SELECT id,title,pid FROM post"),
  ]);
  return categories.map((group) => {
    group.children = posts.filter((v) => v.pid === group.id);
    return group;
  });
}
