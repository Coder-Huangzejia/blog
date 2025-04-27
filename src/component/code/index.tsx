import { codeToHtml } from "shiki";
interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>{
    children?: any;
}
// 借鉴了 https://www.jynxio.com/post/build-an-interactive-blog-with-mdx
export default async function Code(props:Props){
    const code = props.children.props.children;
    const lang = props.children.props.className?.split("language-")[1] ?? "";
    const html = await codeToHtml(code, { lang, theme: "github-dark-dimmed" });

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }