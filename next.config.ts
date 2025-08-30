import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove standalone for Windows compatibility
  experimental: {
    // Enable server components
  },
};

export default nextConfig;
