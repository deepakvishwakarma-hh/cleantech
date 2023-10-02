/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["customcleansolutions.com", "cleansolutions.tech"],
  },
};
module.exports = nextConfig;
