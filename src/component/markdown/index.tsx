import { MDXRemote } from "next-mdx-remote/rsc";
import component from '@/component/mdx';
import remarkGfm from 'remark-gfm';
import Code from "../code";
interface Props{
  source:string
}
// 借鉴了 https://github.com/jynxio/build-an-interactive-blog-with-mdx
 export default async function Markdown(props:Props) {
    const {source}=props
    const components = { ...component,pre: Code };
    return <MDXRemote source={source} components={components}  options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}/>;
  }
  

