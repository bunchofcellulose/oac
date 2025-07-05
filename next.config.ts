import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/oac' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/oac' : '',
};

export default nextConfig;
