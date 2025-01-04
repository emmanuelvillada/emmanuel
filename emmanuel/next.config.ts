import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-slick': 'react-slick/dist/react-slick.min.js',
    }
    return config
  }
};

export default nextConfig;
