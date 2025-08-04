# 🚀 Configuración de Vercel para Padelyzer

## 📋 Proyectos en Vercel

Necesitas configurar 3 proyectos separados en Vercel:

### 1. Proyecto Clubes (pro.padelyzer.com)
- **Production Branch**: `deploy-clubes`
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `cd apps/web-club && npm run build`
- **Output Directory**: `apps/web-club/.next`

### 2. Proyecto Jugadores (play.padelyzer.com)
- **Production Branch**: `deploy-jugadores`
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `cd apps/web-player && npm run build`
- **Output Directory**: `apps/web-player/.next`

### 3. Proyecto Router (www.padelyzer.com)
- **Production Branch**: `main`
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build --workspace=apps/router`
- **Output Directory**: `apps/router/.next`

## 🔧 Configuración en Vercel Dashboard

Para cada proyecto:

1. Ve a **Settings → Git**
2. En **Production Branch**, configura el branch correspondiente
3. En **Build & Development Settings**:
   - Asegúrate de que el Framework Preset sea "Next.js"
   - Los comandos de build y output directory se tomarán del `vercel.json`

## 🌐 Dominios

- `pro.padelyzer.com` → Proyecto Clubes
- `play.padelyzer.com` → Proyecto Jugadores  
- `www.padelyzer.com` → Proyecto Router

## 📦 Características de cada Branch

### deploy-clubes
- Contiene configuración específica para la app de clubes
- `.vercelignore` excluye las otras apps
- `vercel.json` con build command específico
- Menú móvil con fondo oscuro implementado

### deploy-jugadores
- Contiene configuración específica para la app de jugadores
- `.vercelignore` excluye las otras apps
- `vercel.json` con build command específico
- Menú móvil con fondo oscuro implementado

### main
- Contiene el router principal
- Configuración para deployar solo la app router

## 🚨 Importante

- **NO** cambies manualmente los archivos `vercel.json` en los branches de deploy
- Siempre desarrolla en `main` y usa el script `deploy-apps.sh` para desplegar
- Los deployments deberían ser automáticos una vez configurados los branches correctos