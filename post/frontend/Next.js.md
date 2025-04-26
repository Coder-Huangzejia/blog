# Next.js 文档

## 什么是 Next.js？

Next.js 是一个用于 React 应用程序的轻量级框架，提供了服务器端渲染（SSR）、静态网站生成（SSG）、API 路由等功能，使得构建高性能的 Web 应用变得更加简单。

## 特性

- **服务器端渲染**：支持服务器端渲染，提升 SEO 和首屏加载速度。
- **静态生成**：可以在构建时生成静态页面，适合内容不常变化的页面。
- **API 路由**：可以在同一项目中创建 API 路由，方便处理后端请求。
- **自动代码分割**：只加载当前页面所需的 JavaScript，提升性能。
- **支持 TypeScript**：内置支持 TypeScript，方便开发者使用类型检查。

## 安装 Next.js

要创建一个新的 Next.js 项目，你可以使用以下命令：

```bash
npx create-next-app@latest my-next-app --typescript
```

这将创建一个名为 `my-next-app` 的新项目，并自动配置 TypeScript。

## 创建一个简单的页面

在 Next.js 中，每个页面都是一个 React 组件。你可以在 `pages` 目录中创建新的文件来定义页面。

### 示例：创建一个首页

在 `pages/index.tsx` 中添加以下代码：

```tsx
import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>欢迎来到我的 Next.js 应用</h1>
            <p>这是一个使用 TypeScript 的示例页面。</p>
        </div>
    );
};

export default Home;
```

### 示例：创建一个关于页面

在 `pages/about.tsx` 中添加以下代码：

```tsx
import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <h1>关于我们</h1>
            <p>这是关于页面的内容。</p>
        </div>
    );
};

export default About;
```

## 使用 API 路由

Next.js 允许你在 `pages/api` 目录中创建 API 路由。以下是一个简单的 API 示例：

在 `pages/api/hello.ts` 中添加以下代码：

```tsx
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ message: 'Hello from Next.js API!' });
};

export default handler;
```

你可以通过访问 `/api/hello` 来调用这个 API。

## 结论

Next.js 是一个强大的框架，适合构建现代 Web 应用。它的服务器端渲染和静态生成特性使得开发者能够轻松创建高性能的应用。通过使用 TypeScript，开发者可以享受类型安全的开发体验。

## 参考资料

- [Next.js 官方文档](https://nextjs.org/docs)
- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
