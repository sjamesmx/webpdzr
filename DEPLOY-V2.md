# Instrucciones de Deploy para Vercel - V2 Monorepo

## 🚀 Deploy Rápido en Vercel

### Opción 1: Deploy del Monorepo Completo (Recomendado)

1. Ve a https://vercel.com/new
2. Importa el repositorio: `sjamesmx/webpdzr`
3. **IMPORTANTE**: Selecciona la rama `v2-monorepo`
4. Vercel detectará automáticamente que es un monorepo con Turborepo
5. Click en "Deploy"

### Opción 2: Deploy Individual de cada App

#### 🎾 App Jugadores (padelyzer.com):
1. En Vercel, importa el repositorio `sjamesmx/webpdzr`
2. Rama: `v2-monorepo`
3. Root Directory: `apps/web-player`
4. Framework Preset: Next.js (auto-detectado)
5. Environment Variables: Ninguna por ahora

#### 🏢 App Clubes (pro.padelyzer.com):
1. En Vercel, importa el repositorio `sjamesmx/webpdzr`
2. Rama: `v2-monorepo`
3. Root Directory: `apps/web-club`
4. Framework Preset: Next.js (auto-detectado)
5. Environment Variables: Ninguna por ahora

#### 🔀 Router (padelyzer.com/inicio):
1. En Vercel, importa el repositorio `sjamesmx/webpdzr`
2. Rama: `v2-monorepo`
3. Root Directory: `apps/router`
4. Framework Preset: Next.js (auto-detectado)
5. Environment Variables: Ninguna por ahora

## 🌐 Configuración de Dominios Post-Deploy

Una vez deployadas, configura los dominios:

1. **Router**: 
   - Dominio: `router-padelyzer.vercel.app` → `padelyzer.com/inicio`

2. **Web Player**: 
   - Dominio: `player-padelyzer.vercel.app` → `padelyzer.com`

3. **Web Club**: 
   - Dominio: `club-padelyzer.vercel.app` → `pro.padelyzer.com`

## 📁 Estructura del Proyecto

```
webpdzr (rama: v2-monorepo)
├── apps/
│   ├── web-player/      # B2C - Jugadores (fondo oscuro #0B0F19)
│   ├── web-club/        # B2B - Clubes (fondo blanco)
│   └── router/          # Selector inteligente con cookies
├── packages/
│   ├── ui/              # Componentes compartidos
│   └── config/          # Configuraciones Tailwind/TS
└── turbo.json          # Configuración monorepo
```

## 🎨 Paletas de Colores

### Jugadores (B2C)
- Background: `#0B0F19` (azul muy oscuro)
- Accent: `#B8FF00` (verde lima)
- Text: `#FFFFFF` (blanco)

### Clubes (B2B)
- Background: `#FFFFFF` (blanco)
- Accent: `#0EA5E9` (azul cielo)
- Text: `#0F172A` (casi negro)

## 🔧 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar todas las apps
npm run dev

# O ejecutar individualmente
npm run dev:player  # http://localhost:3000
npm run dev:club    # http://localhost:3001
npm run dev:router  # http://localhost:3002
```

## ✅ Checklist Pre-Deploy

- [x] Estructura monorepo creada
- [x] 3 apps Next.js funcionando
- [x] Paletas de colores configuradas
- [x] Componentes UI compartidos
- [x] Router con lógica de cookies
- [x] Push a rama `v2-monorepo`
- [ ] Deploy en Vercel
- [ ] Configurar dominios custom

## 📝 Notas Importantes

1. **Monorepo**: Usamos Turborepo para manejar las 3 apps
2. **Separación Total**: Cada app tiene su propia paleta y diseño
3. **Cookies**: El router guarda la preferencia por 30 días
4. **Mobile First**: La app de jugadores está optimizada para móvil
5. **Desktop First**: La app de clubes está optimizada para desktop