import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    reactStrictMode: true,
    experimental: {
        reactCompiler: true,
    },
};

export default nextConfig;
