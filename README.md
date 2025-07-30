# Padelyzer Website

Este es el sitio web oficial de Padelyzer, la primera plataforma que combina IA, computer vision y ciencia para revolucionar cómo juegas y gestionas el padel.

## 🚀 Características

- **Diseño moderno**: Basado en el diseño crypto con colores negro, blanco y #E3FD72
- **Dark/Light mode**: Soporte completo para temas claro y oscuro
- **Responsive**: Diseño adaptable para móviles, tablets y desktop
- **Componentes modulares**: Arquitectura basada en componentes reutilizables
- **SEO optimizado**: Meta tags y estructura optimizada para motores de búsqueda

## 🛠️ Stack Tecnológico

- **Next.js 15**: Framework de React con App Router
- **TypeScript**: Type safety y mejor DX
- **Tailwind CSS**: Estilos utilitarios y diseño responsive
- **React**: UI reactiva y componentes

## 📦 Estructura del Proyecto

```
padelyzer-website/
├── app/
│   ├── globals.css      # Estilos globales y configuración de Tailwind
│   ├── layout.tsx       # Layout principal con metadata SEO
│   └── page.tsx         # Página principal con todos los componentes
├── components/
│   ├── Header.jsx       # Navegación con theme toggle
│   ├── Hero.jsx         # Sección hero con CTAs diferenciados
│   ├── Features.jsx     # Características y comparación con competencia
│   ├── PricingSection.jsx # Precios para jugadores y clubes
│   ├── CTASection.jsx   # Call to action con FOMO strategy
│   ├── Footer.jsx       # Footer completo con newsletter
│   ├── Button.jsx       # Componente de botón reutilizable
│   ├── Card.jsx         # Componente de tarjeta
│   └── ThemeProvider.jsx # Context para manejo de temas
└── public/              # Assets estáticos
```

## 🎨 Sistema de Diseño

### Colores
- **Primary**: #E3FD72 (lime/neon yellow)
- **Primary Dark**: #d5ed62
- **Background Light**: #ffffff
- **Background Dark**: #000000
- **Text Light**: #171717
- **Text Dark**: #ffffff

### Tipografía
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, con tamaños responsive
- **Body**: Regular, optimizado para lectura

## 🚀 Cómo ejecutar

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000)

## 📱 Secciones del Sitio

1. **Header**: Navegación sticky con theme toggle
2. **Hero**: Mensaje principal con CTAs diferenciados para clubes y jugadores
3. **Features**: 6 características principales y tabla comparativa
4. **Pricing**: Planes separados para jugadores (Free, Pro, Star) y módulos para clubes
5. **CTA**: Beta exclusiva con estrategia FOMO (4 clubes en Puebla)
6. **Footer**: Links completos y formulario de newsletter

## 🎯 Próximos Pasos

- [ ] Implementar formularios funcionales
- [ ] Conectar con backend/API
- [ ] Añadir animaciones y transiciones
- [ ] Optimizar imágenes y assets
- [ ] Implementar analytics
- [ ] Crear páginas adicionales (blog, tecnología, etc.)

## 🤝 Contribuir

Este proyecto está en beta privada. Para más información sobre cómo contribuir, contactar al equipo de desarrollo.

---

🎾 Hecho con amor para revolucionar el padel en México
