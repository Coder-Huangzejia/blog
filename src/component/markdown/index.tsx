import { MDXRemote } from "next-mdx-remote/rsc";
import Code from "../code";
interface Props{
  source:string
}
// 借鉴了 https://github.com/jynxio/build-an-interactive-blog-with-mdx
 export default async function Markdown(props:Props) {
    const {source}=props
    const components = { pre: Code };
    return <MDXRemote source={source} components={components} />;
  }
  

