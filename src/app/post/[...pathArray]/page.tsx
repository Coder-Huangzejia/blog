import Markdown from "@/component/markdown";
type ParamsType=Record<'pathArray',string[]>
interface Props{
    params:Promise<ParamsType>
}
export default async function Page(props:Props) {
    const {params}=props
    const {pathArray}=await params
    return (
     <Markdown pathArray={pathArray}/>
    );
};