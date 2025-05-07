<h1 align="center">Welcome to my blog</h1>
<p align="center">
    <strong>English</strong> |
    <a href="./README.zh-CN.md">简体中文</a>  
    <p align="center">This is a modern and performant blog portal built with cutting-edge technologies</p>
</p>




## ✨ Features

*   **Clean and Responsive Design:** Provides a seamless user experience across all devices.
*   **SEO Optimized:** Built with Next.js for excellent search engine visibility.
*   **Type-Safe Development:** Leverages TypeScript for enhanced code maintainability and fewer runtime errors.
*   **Database Driven:** Stores blog content in a MySQL database for efficient content management.
*   **Easy Deployment:** One-click packaging and deployment with Docker


## 🛠️ Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) - A React framework for building performant and SEO-friendly web applications
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds static typing
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development
*   **Database:** [MySQL](https://www.mysql.com/) - A popular open-source relational database management system
*   **Containerization**: [Docker](https://www.docker.com/) - A platform for building, publishing, and running applications. 

## 🚀 Getting Started

Follow these steps to get the blog portal running locally:

1.  **Database Setup:**
    *   Ensure you have a MySQL database instance running.
    *   Configure the database connection details (host, username, password, database name) in either the `.env` or `.env.local` file
    *   exec the sql at `db/init.sql`

2.  **Install Dependencies:**

    ```bash
    pnpm i
    ```

3.  **Run Development Server:**

    ```bash
    pnpm dev
    ```

    This will start the development server, typically accessible at `http://localhost:3000`.

## 📦 Deployment

This project is designed for easy deployment using platforms like Vercel. Refer to the official Next.js documentation for detailed deployment instructions:

[Next.js with Docker Example](https://github.com/vercel/next.js/tree/canary/examples/with-docker)

This example provides a Dockerfile and configuration that can be used to containerize and deploy the application.

**By the way, do not forget to edit the real database url at `.env` because of the production ! ! !**

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements or report bugs.



