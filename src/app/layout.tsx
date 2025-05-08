import { fetchPostsFromDataBase } from "@/lib/post";
import Link from 'next/link';
import "@/asset/css/index.css";
export const revalidate = 60;
export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const groups = await fetchPostsFromDataBase()
    return (
        <html lang="en">
            <head>
                <title>南山搬砖靓仔</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
            </head>
            <body>
                <div className="flex h-screen w-screen">
                    <div className="w-1/5 bg-base-200 p-4">
                        <h2 className="text-2xl font-bold mb-4">目录</h2>
                        {groups.map((category, index) => (
                            <div key={index}>
                                <div>{category.title}</div>
                                <ul className="pl-4">
                                    {category.children.map((post, i) => (
                                        <li key={i} className="mb-2">
                                            <Link href={'/post/'+post.id} className="btn btn-ghost btn-block">
                                                {post.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="w-4/5 p-8">
                        {children}
                    </div>
                </div></body>
        </html>
    );
}
