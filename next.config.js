/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/",
          destination: "/login",
        },
        {
          source: "/index",
          destination: "/home",
        },
      ];
    },
  };
  
  module.exports = nextConfig;