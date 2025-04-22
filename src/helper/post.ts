import path from "node:path";
import fs from "node:fs/promises";
import matter from "gray-matter";

type Post = {
    slug: string;
    date: string;
    hero: string;
    title: string;
    abstract: string;
    content: string;
};
export async function fetchPost(url: string): Promise<Post> {
    const raw = await readFile(url);
    const { data: metadata, content } = matter(raw);
    const post: Post = {
        content,
        slug: "",
        hero: metadata.hero,
        date: metadata.date,
        title: metadata.title,
        abstract: metadata.abstract,
    };

    return post;
}


function readFile(targetPath: string) {
    return fs.readFile(path.join(process.cwd(), targetPath), "utf8");
}

