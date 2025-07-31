# Instrucciones de Deploy para Vercel

## 1. Push a GitHub

Una vez que hayas creado el repositorio en GitHub, ejecuta:

```bash
git remote set-url origin https://github.com/sjamesmx/padelyzer-v2.git
git branch -M main
git push -u origin main
```

## 2. Deploy en Vercel

### Opción A: Importar todo el monorepo

1. Ve a https://vercel.com/new
2. Importa el repositorio `padelyzer-v2`
3. Vercel detectará automáticamente que es un monorepo con Turborepo

### Opción B: Deploy individual de cada app

Para deployar cada app por separado:

#### App Jugadores (web-player):
1. En Vercel, importa el repositorio
2. En "Root Directory", selecciona: `apps/web-player`
3. Framework Preset: Next.js
4. Build Command: `cd ../.. && npm run build --workspace=@padelyzer/web-player`
5. Output Directory: `apps/web-player/.next`

#### App Clubes (web-club):
1. En Vercel, importa el repositorio
2. En "Root Directory", selecciona: `apps/web-club`
3. Framework Preset: Next.js
4. Build Command: `cd ../.. && npm run build --workspace=@padelyzer/web-club`
5. Output Directory: `apps/web-club/.next`

#### Router:
1. En Vercel, importa el repositorio
2. En "Root Directory", selecciona: `apps/router`
3. Framework Preset: Next.js
4. Build Command: `cd ../.. && npm run build --workspace=@padelyzer/router`
5. Output Directory: `apps/router/.next`

## 3. Configuración de Dominios

Una vez deployadas las apps:

- **Router**: Asignar a `padelyzer.com/inicio`
- **Web Player**: Asignar a `padelyzer.com`
- **Web Club**: Asignar a `pro.padelyzer.com`

## URLs de las apps en desarrollo local:

- http://localhost:3000 - App Jugadores
- http://localhost:3001 - App Clubes
- http://localhost:3002 - Router

## Estructura del proyecto:

```
padelyzer-v2/
├── apps/
│   ├── web-player/      # App para jugadores (B2C)
│   ├── web-club/        # App para clubes (B2B)
│   └── router/          # Selector de perfil
├── packages/
│   ├── ui/              # Componentes compartidos
│   └── config/          # Configuraciones
└── turbo.json          # Configuración monorepo
```