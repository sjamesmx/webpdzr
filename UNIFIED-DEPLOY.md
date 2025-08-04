# 🚀 Deployment Unificado - Un Solo Proyecto en Vercel

## Beneficios de esta arquitectura:

1. **Un solo proyecto en Vercel** = Más fácil de mantener
2. **Routing automático por dominio** = No necesitas configurar branches
3. **Deployments más rápidos** = Un solo build process
4. **Menor costo** = Un proyecto en lugar de tres

## Cómo funciona:

El middleware detecta el dominio y sirve la app correcta:
- `play.padelyzer.com` → App de Jugadores
- `pro.padelyzer.com` → App de Clubes  
- `www.padelyzer.com` → Router principal

## Pasos para migrar:

### 1. Crear nuevo proyecto en Vercel

```bash
# En la raíz del proyecto
vercel

# Cuando pregunte:
# - Set up and deploy? Y
# - Which scope? (selecciona tu equipo)
# - Link to existing project? N
# - What's your project's name? padelyzer-unified
# - In which directory is your code located? ./
```

### 2. Configurar dominios

En Vercel Dashboard del nuevo proyecto:
1. Settings → Domains
2. Agregar:
   - `padelyzer.com`
   - `www.padelyzer.com`
   - `play.padelyzer.com`
   - `pro.padelyzer.com`

### 3. Eliminar proyectos antiguos

Una vez que el nuevo funcione, puedes eliminar:
- web-player
- web-club  
- web-router

## Estructura del proyecto unificado:

```
/
├── app/                    # App principal (maneja routing)
│   ├── layout.tsx
│   └── page.tsx
├── apps/
│   ├── web-player/        # App de jugadores
│   ├── web-club/          # App de clubes
│   └── router/            # Router principal
├── middleware.ts          # Routing por dominio
├── next.config.js         # Configuración unificada
└── vercel.json           # Config de Vercel
```

## Ventajas adicionales:

- Comparte componentes entre apps más fácilmente
- Un solo pipeline de CI/CD
- Gestión centralizada de variables de entorno
- Caché compartido entre apps