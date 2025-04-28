import Markdown from "@/component/markdown";
import { fetchRemotePost } from "@/lib/post";
import { DBIdType } from "@/types";
type ParamsType=Record<'id',DBIdType>
interface Props{
    params:Promise<ParamsType>
}
export default async function Page(props:Props) {
    const {params}=props
    const {id}=await params
    const {content} = await fetchRemotePost(id);
    return (
     <Markdown source={content}/>
    );
};