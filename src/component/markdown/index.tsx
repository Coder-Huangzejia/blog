import { fetchPost } from "@/lib/post";
 import { MDXRemote } from "next-mdx-remote/rsc";
import Code from "../code";
// 借鉴了 https://www.jynxio.com/post/build-an-interactive-blog-with-mdx
 export default async function Markdown(props:{pathArray:string[]}) {
    const {pathArray}=props
    const path='post/'+pathArray.map(decodeURIComponent).join('/')+'.md'
    const post = await fetchPost(path);
    const components = { pre: Code };

    return <MDXRemote source={post.content} components={components} />;
  }
  

