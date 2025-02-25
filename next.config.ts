import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.pexels.com", "images.unsplash.com"],
    // remotePatterns: [
    //   {
    //     protocol: ['https'],
    //     hostname: ['images.pexels.com', 'images.unsplash.com'],
    //   },
      
    // ],
  },
};

export default nextConfig;
