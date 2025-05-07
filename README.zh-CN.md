<h1 align="center">欢迎光临</h1>
<p align="center">
    <a href="./README.md">English</a> |
     <strong>简体中文</strong> 
     <p align="center">这是一个采用前沿技术构建的现代化高性能博客门户</p>
</p>




## ✨ 功能特性

*   **简洁响应式设计:** 为所有设备提供无缝用户体验
*   **SEO优化:** 基于Next.js构建，具有出色的搜索引擎可见性
*   **类型安全开发:** 使用TypeScript增强代码可维护性，减少运行时错误
*   **数据库驱动:** 将博客内容存储在MySQL数据库中实现高效内容管理
*   **轻松部署:** Docker一键打包部署

## 🛠️ 技术栈

*   **框架:** [Next.js](https://nextjs.org/) - 用于构建高性能SEO友好Web应用的React框架
*   **语言:** [TypeScript](https://www.typescriptlang.org/) - 为JavaScript添加静态类型的超集
*   **样式:** [Tailwind CSS](https://tailwindcss.com/) - 优先使用实用程序的CSS框架，可快速开发UI
*   **数据库:** [MySQL](https://www.mysql.com/) - 流行的开源关系型数据库管理系统

## 🚀 快速开始

按照以下步骤在本地运行博客门户:

1.  **数据库设置:**
    *   确保MySQL数据库实例正在运行
    *   在`.env`或`.env.local`文件中配置数据库连接信息(主机、用户名、密码、数据库名)
    *   执行`db/init.sql`中的SQL脚本

2.  **安装依赖:**

    ```bash
    pnpm i
    ```

3.  **运行开发服务器:**

    ```bash
    pnpm dev
    ```

    这将启动开发服务器，通常可通过`http://localhost:3000`访问

## 📦 部署

本项目专为使用Vercel等平台轻松部署而设计。参考Next.js官方文档获取详细部署说明:

[Next.js with Docker示例](https://github.com/vercel/next.js/tree/canary/examples/with-docker)

此示例提供了可用于容器化和部署应用程序的Dockerfile和配置。

**重要提示: 生产环境请务必修改`.env`中的真实数据库URL! ! !**

## 🤝 参与贡献

欢迎贡献! 请随时提交pull request或创建issue来提出改进建议或报告错误。

<div align="right">
  <small>
    <a href="#readme-header">Back to English</a>
  </small>
</div>