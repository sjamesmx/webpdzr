# 🚀 Solución Manual para Configurar Branches en Vercel

## Opción 1: Usar Vercel CLI (Recomendado)

1. **Autenticarse en Vercel CLI:**
   ```bash
   vercel login
   ```

2. **Configurar cada proyecto:**
   ```bash
   # Para proyecto de Jugadores
   cd /Users/ja/Desktop/PZRWeb/padelyzer-website
   vercel link --project=padelyzer-player-app
   vercel git connect --production-branch=deploy-jugadores

   # Para proyecto de Clubes
   vercel link --project=padelyzer-club-app
   vercel git connect --production-branch=deploy-clubes

   # Para proyecto Router
   vercel link --project=web-router
   vercel git connect --production-branch=main
   ```

## Opción 2: Forzar Deploy Manual desde CLI

Si la configuración automática no funciona:

```bash
# Deploy Jugadores
git checkout deploy-jugadores
vercel --prod --build-env NEXT_PUBLIC_APP_TYPE=PLAYER

# Deploy Clubes
git checkout deploy-clubes
vercel --prod --build-env NEXT_PUBLIC_APP_TYPE=CLUB

# Deploy Router
git checkout main
vercel --prod
```

## Opción 3: Usar la API de Vercel

Si tienes un token de Vercel, puedes usar curl:

```bash
# Obtén tu token desde: https://vercel.com/account/tokens

# Configurar branch para proyecto
curl -X PATCH https://api.vercel.com/v9/projects/[PROJECT_ID] \
  -H "Authorization: Bearer [TOKEN]" \
  -H "Content-Type: application/json" \
  -d '{
    "git": {
      "productionBranch": "deploy-jugadores"
    }
  }'
```

## Opción 4: Dashboard de Vercel (Más Simple)

1. Ve a https://vercel.com/dashboard
2. Para cada proyecto:
   - Click en el proyecto
   - Settings → Git
   - Production Branch → Editar
   - Cambiar al branch correcto:
     - `padelyzer-player-app` → `deploy-jugadores`
     - `padelyzer-club-app` → `deploy-clubes`
     - `web-router` → `main`
   - Guardar cambios

## Verificación

Después de configurar, verifica que los deployments se activen:

```bash
# Ver últimos commits en cada branch
git log --oneline -1 deploy-jugadores
git log --oneline -1 deploy-clubes
git log --oneline -1 main
```

Los deployments deberían aparecer en:
- https://vercel.com/[tu-usuario]/[proyecto]/deployments