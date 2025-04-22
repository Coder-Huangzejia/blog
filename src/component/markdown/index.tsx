import { fetchPost } from "@/helper/post";
 import { MDXRemote } from "next-mdx-remote/rsc";
import Code from "../code";
 export default async function Markdown(props:{title:string}) {
    const {title}=props
    const post = await fetchPost(`post/${title}.md`);
    const components = { pre: Code };

    return <MDXRemote source={post.content} components={components} />;
  }
  

