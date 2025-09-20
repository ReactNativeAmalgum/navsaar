// next.config.mjs
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
};



export default nextConfig;
