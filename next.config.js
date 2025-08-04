/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para monorepo
  transpilePackages: ['@padelyzer/ui', '@padelyzer/config'],
  
  // Rewrites basados en el dominio
  async rewrites() {
    return {
      beforeFiles: [
        // Play.padelyzer.com -> web-player app
        {
          source: '/:path*',
          destination: '/apps/web-player/:path*',
          has: [
            {
              type: 'host',
              value: 'play.padelyzer.com',
            },
          ],
        },
        // Pro.padelyzer.com -> web-club app
        {
          source: '/:path*',
          destination: '/apps/web-club/:path*',
          has: [
            {
              type: 'host',
              value: 'pro.padelyzer.com',
            },
          ],
        },
        // Default (www.padelyzer.com) -> router app
        {
          source: '/:path*',
          destination: '/apps/router/:path*',
          has: [
            {
              type: 'host',
              value: '(www\\.)?padelyzer\\.com',
            },
          ],
        },
      ],
    };
  },

  // Optimizaciones
  images: {
    domains: ['padelyzer.com'],
  },
  
  // Configuración de build
  experimental: {
    outputFileTracingIncludes: {
      '/apps/web-player': ['./apps/web-player/**/*'],
      '/apps/web-club': ['./apps/web-club/**/*'],
      '/apps/router': ['./apps/router/**/*'],
    },
  },
};

module.exports = nextConfig;