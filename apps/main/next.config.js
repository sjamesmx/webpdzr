/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Router app - inicio
      {
        source: '/inicio',
        destination: `${process.env.ROUTER_URL || 'http://localhost:3002'}/`,
      },
      // Player app - root
      {
        source: '/',
        destination: `${process.env.PLAYER_URL || 'http://localhost:3000'}/`,
      },
      // Club app - pro subdomain simulation
      {
        source: '/pro',
        destination: `${process.env.CLUB_URL || 'http://localhost:3001'}/`,
      },
      {
        source: '/pro/:path*',
        destination: `${process.env.CLUB_URL || 'http://localhost:3001'}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;