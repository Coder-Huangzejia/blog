import Markdown from "@/component/markdown";
import { SQL } from "@/lib/db";
import { DBIdType } from "@/types";
import { Post } from "@/types/post";

type ParamsType = Record<"id", DBIdType>;
interface Props {
  params: Promise<ParamsType>;
}
// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths
export async function generateStaticParams() {
  const posts = await SQL<Post>("SELECT id FROM `post`");
  return posts.map(({ id }) => ({
    id: String(id),
  }));
}
export default async function Page(props: Props) {
  const { params } = props;
  const { id } = await params;
  const [{ content }] = await SQL<Post>(
    `SELECT content FROM post WHERE id=${id}`
  );
  return <Markdown source={content} />;
}
