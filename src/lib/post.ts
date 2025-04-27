import path from "node:path";
import fs from "node:fs/promises";
import matter from "gray-matter";
import type{DirectoryNode} from '@/types/tree'

type Post = {
    slug: string;
    date: string;
    hero: string;
    title: string;
    abstract: string;
    content: string;
};
// 借鉴了 https://www.jynxio.com/post/build-an-interactive-blog-with-mdx
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

export async function getPostsTree(directory: string): Promise<DirectoryNode[]> {
    const rootDir = path.join(process.cwd(), directory);
    const tree: DirectoryNode[] = [];
    
    // 递归遍历目录
    async function traverse(currentDir: string) {
        const dirents = await fs.readdir(currentDir, { withFileTypes: true });
        const mdFiles: string[] = [];
        
        // 1. 收集当前目录的md文件
        for (const dirent of dirents) {
            if (dirent.isFile() && path.extname(dirent.name) === ".md") {
                mdFiles.push(path.basename(dirent.name, ".md"));
            }
        }
        
        // 2. 如果有md文件则生成树节点
        if (mdFiles.length > 0) {
            const relativePath = path.relative(rootDir, currentDir);
            // 根目录时显示目录名，子目录显示相对路径
            const group = relativePath;
            tree.push({ group, children: mdFiles.map(v=>({title:v,path:`/post/${(group?group+'/':'/')+v}`})) });
        }
        
        // 3. 递归处理子目录
        for (const dirent of dirents) {
            if (dirent.isDirectory()) {
                await traverse(path.join(currentDir, dirent.name));
            }
        }
    }
    
    await traverse(rootDir);
    return tree;
}

export async function getServerSidePostTree() {
    const posts = await getPostsTree('post');
    return posts;
  }