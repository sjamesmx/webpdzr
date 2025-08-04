/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@padelyzer/ui', '@padelyzer/config'],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;