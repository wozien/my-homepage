import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com',
      },
    ],
  },
};

export default nextConfig;
