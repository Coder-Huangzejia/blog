import Markdown from "@/component/markdown";
import { SQL } from "@/lib/db";
import { DBIdType } from "@/types";
import { Post } from "@/types/post";


export const revalidate = 60;
export const dynamicParams = true


type ParamsType = Record<"id", DBIdType>
interface Props {
  params: Promise<ParamsType>
}

export async function generateStaticParams() {
  const posts = await SQL<Post>("SELECT id FROM `post`")
  return posts.map(({ id }) => ({
    id: String(id)
  }))
}
export default async function Page(props: Props) {
  const { params } = props
  const { id } = await params
  const [{ content }] = await SQL<Post>(
    `SELECT content FROM post WHERE id=${id}`
  )
  return <Markdown source={content} />
}
