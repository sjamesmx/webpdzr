# 🚀 Guía de Deployment - Sistema Robusto

## 📋 Estructura de Branches

Este proyecto usa **3 branches específicos** para deployments, cada uno configurado para una app específica:

### 🎾 `deploy-jugadores`
- **App**: Jugadores (B2C)
- **Deployment**: `apps/web-player/.next`
- **Tema**: Fondo oscuro (#0B0F19) + Logo blanco
- **Badge**: "APP JUGADORES" (verde)

### 🏢 `deploy-clubes`  
- **App**: Clubes (B2B)
- **Deployment**: `apps/web-club/.next`
- **Tema**: Fondo blanco + Logo negro
- **Badge**: "APP CLUBES" (azul)

### 🔀 `deploy-router`
- **App**: Router/Selector
- **Deployment**: `apps/router/.next`  
- **Tema**: Fondo blanco + Logo negro
- **Badge**: "ROUTER APP" (negro)

## 🔄 Workflow de Deployment

### Para desplegar cambios:

1. **Desarrolla en `v2-monorepo`** (branch principal)
2. **Merge a branch específico**:
   ```bash
   git checkout deploy-jugadores
   git merge v2-monorepo
   git push origin deploy-jugadores
   ```
3. **Vercel automáticamente despliega** la app correspondiente

### Para deployments iniciales:

1. **Ve a Vercel Dashboard**
2. **Configura cada proyecto**:
   - Proyecto "Padelyzer Jugadores" → Branch: `deploy-jugadores`
   - Proyecto "Padelyzer Clubes" → Branch: `deploy-clubes`  
   - Proyecto "Padelyzer Router" → Branch: `deploy-router`

## ✅ Beneficios

- **Sin confusión**: Cada branch = Una app específica
- **Deployments predecibles**: No más cambios manuales de vercel.json
- **Identificación clara**: Badges y títulos específicos
- **Workflow limpio**: Desarrolla en v2-monorepo, despliega en branches específicos

## 🎯 Identificación de Apps

Cada app tiene identificadores únicos:

| App | Título | Badge | Fondo | Logo |
|-----|--------|--------|--------|------|
| Jugadores | "Padelyzer JUGADORES" | Verde "APP JUGADORES" | Oscuro | Blanco |
| Clubes | "Padelyzer CLUBES" | Azul "APP CLUBES" | Blanco | Negro |
| Router | "Padelyzer ROUTER" | Negro "ROUTER APP" | Blanco | Negro |

## 🚨 Importante

- **NO cambies vercel.json** en v2-monorepo
- **Cada branch de deploy** tiene su vercel.json específico
- **Solo mergea** de v2-monorepo a branches de deploy
- **Nunca hagas cambios directos** en branches de deploy