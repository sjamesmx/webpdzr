import React from 'react';
import Button from './Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    producto: [
      { name: 'Para Clubes', href: '/clubes' },
      { name: 'Para Jugadores', href: '/jugadores' },
      { name: 'Tecnología', href: '/tecnologia' },
      { name: 'Pricing', href: '/pricing' },
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Carreras', href: '/careers' },
      { name: 'Contacto', href: '/contact' },
    ],
    recursos: [
      { name: 'Centro de Ayuda', href: '/help' },
      { name: 'API Docs', href: '/api' },
      { name: 'Status', href: '/status' },
      { name: 'Changelog', href: '/changelog' },
    ],
    legal: [
      { name: 'Privacidad', href: '/privacy' },
      { name: 'Términos', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              {/* Padelyzer Logo */}
              <svg className="h-8 w-auto mr-3" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Padel Ball Icon */}
                <circle cx="20" cy="20" r="18" stroke="#E3FD72" strokeWidth="2"/>
                <path d="M20 2 Q20 20 20 38 M2 20 Q20 20 38 20" stroke="#E3FD72" strokeWidth="1.5"/>
                <circle cx="14" cy="14" r="1.5" fill="#E3FD72"/>
                <circle cx="26" cy="14" r="1.5" fill="#E3FD72"/>
                <circle cx="14" cy="26" r="1.5" fill="#E3FD72"/>
                <circle cx="26" cy="26" r="1.5" fill="#E3FD72"/>
              </svg>
              <span className="text-2xl font-bold text-black dark:text-white">Padelyzer</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              La primera plataforma que combina IA, computer vision y ciencia para 
              revolucionar cómo juegas y gestionas el padel.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#E3FD72] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E3FD72] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E3FD72] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E3FD72] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:col-span-3">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-4">Producto</h3>
              <ul className="space-y-3">
                {footerLinks.producto.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#E3FD72] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-4">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#E3FD72] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-4">Recursos</h3>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#E3FD72] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#E3FD72] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                Únete a la revolución del padel
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Recibe tips, novedades y acceso anticipado a nuevas funciones.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E3FD72] focus:border-transparent"
              />
              <Button variant="primary" size="md">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Padelyzer. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Hecho con 🎾 en México
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-2 h-2 bg-[#E3FD72] rounded-full"></span>
                Todos los sistemas operativos
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}