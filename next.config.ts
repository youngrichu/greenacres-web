import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@greenacres/ui", "@greenacres/db", "@greenacres/auth", "@greenacres/types"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
