/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/assets",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
