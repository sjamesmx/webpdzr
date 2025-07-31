/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // JUGADORES (B2C) - Colores exactos del sitio actual
        player: {
          bg: {
            primary: '#0B0F19',      // Fondo azul muy oscuro
            secondary: '#141924',     // Fondo secundario
          },
          accent: {
            DEFAULT: '#B8FF00',       // Verde lima vibrante (CTAs)
            hover: '#9FE300',         // Verde lima hover
          },
          text: {
            primary: '#FFFFFF',       // Texto blanco
            secondary: '#94A3B8',     // Texto gris claro
          },
          border: '#1E293B',          // Bordes sutiles
        },
        
        // CLUBES (B2B) - Nueva paleta profesional
        club: {
          bg: {
            primary: '#FFFFFF',       // Fondo blanco
            secondary: '#F8FAFC',     // Fondo gris muy claro
          },
          accent: {
            DEFAULT: '#0EA5E9',       // Azul cielo vibrante
            hover: '#0284C7',         // Azul hover
          },
          text: {
            primary: '#0F172A',       // Texto casi negro
            secondary: '#64748B',     // Texto gris medio
          },
          border: '#E2E8F0',          // Bordes claros
          success: '#10B981',         // Verde éxito/dinero
        },
        
        // ROUTER - Minimalista
        router: {
          bg: '#FFFFFF',              // Fondo blanco puro
          text: '#000000',            // Texto negro puro
          hover: '#F5F5F5',           // Hover muy sutil
          border: '#E5E5E5',          // Bordes mínimos
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}