import { getServerSidePostTree } from "@/lib/post";
import "./index.css";
import Link from 'next/link';
async function RootLayout({ children }: { children: React.ReactNode }) {
    const posts = await getServerSidePostTree()
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css" />
                <title>南山搬砖靓仔</title>
            </head>
            <body>
                <div className="flex h-screen w-screen">
                    <div className="w-1/5 bg-base-200 p-4">
                        <h2 className="text-2xl font-bold mb-4">菜单</h2>
                        {posts.map((category, index) => (
                            <div key={index}>
                                <ul className="pl-4">
                                    {category.children.map((post, i) => (
                                        <li key={i} className="mb-2">
                                            <Link href={post.path} className="btn btn-ghost btn-block">
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

export default RootLayout;
