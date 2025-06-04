/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lipsum.app",
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
