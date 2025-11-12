import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/curly-octo-winner',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
