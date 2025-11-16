// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allows all hostnames
      },
    ],
  },
  eslint: {
    dirs: ["src"], // Only lint your source code
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
};

export default nextConfig;
