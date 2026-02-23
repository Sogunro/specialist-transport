import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/specialist-transport",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
