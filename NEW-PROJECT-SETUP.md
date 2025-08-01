# 🚀 SETUP DE NUEVOS PROYECTOS EN VERCEL

## ⚠️ IMPORTANTE: CREAR 3 PROYECTOS NUEVOS

**NO usar los proyectos existentes que están causando confusión.**

## 📋 PASO A PASO

### 🎾 Proyecto 1: PADELYZER JUGADORES

1. **Ve a**: https://vercel.com/new
2. **Importa repositorio**: `sjamesmx/webpdzr`
3. **Configuración**:
   - **Project Name**: `padelyzer-jugadores`
   - **Framework**: Next.js (auto-detectado)
   - **Root Directory**: DEJAR VACÍO (usar root)
   - **Build Command**: `npm run build` (auto-detectado)
   - **Install Command**: `npm install` (auto-detectado)
   - **Output Directory**: Automático
4. **IMPORTANTE - Git Configuration**:
   - **Production Branch**: `deploy-jugadores` ⚠️ **CAMBIAR ESTO**
   - NO usar `main` o `v2-monorepo`
5. **Deploy**

**Resultado esperado**: Fondo oscuro, logo blanco, badge verde "APP JUGADORES"

---

### 🏢 Proyecto 2: PADELYZER CLUBES

1. **Ve a**: https://vercel.com/new
2. **Importa repositorio**: `sjamesmx/webpdzr`
3. **Configuración**:
   - **Project Name**: `padelyzer-clubes`
   - **Framework**: Next.js (auto-detectado)
   - **Root Directory**: DEJAR VACÍO (usar root)
   - **Build Command**: `npm run build` (auto-detectado)
   - **Install Command**: `npm install` (auto-detectado)
   - **Output Directory**: Automático
4. **IMPORTANTE - Git Configuration**:
   - **Production Branch**: `deploy-clubes` ⚠️ **CAMBIAR ESTO**
   - NO usar `main` o `v2-monorepo`
5. **Deploy**

**Resultado esperado**: Fondo blanco, logo negro, badge azul "APP CLUBES"

---

### 🔀 Proyecto 3: PADELYZER ROUTER

1. **Ve a**: https://vercel.com/new
2. **Importa repositorio**: `sjamesmx/webpdzr`
3. **Configuración**:
   - **Project Name**: `padelyzer-router`
   - **Framework**: Next.js (auto-detectado)
   - **Root Directory**: DEJAR VACÍO (usar root)
   - **Build Command**: `npm run build` (auto-detectado)
   - **Install Command**: `npm install` (auto-detectado)
   - **Output Directory**: Automático
4. **IMPORTANTE - Git Configuration**:
   - **Production Branch**: `deploy-router` ⚠️ **CAMBIAR ESTO**
   - NO usar `main` o `v2-monorepo`
5. **Deploy**

**Resultado esperado**: Fondo blanco, logo negro, badge negro "ROUTER APP", 2 opciones

---

## 🔍 VERIFICACIÓN

Después de crear los 3 proyectos, deberías ver:

| Proyecto | Branch | App | Identificación |
|----------|--------|-----|----------------|
| `padelyzer-jugadores` | `deploy-jugadores` | Jugadores | Badge verde + fondo oscuro |
| `padelyzer-clubes` | `deploy-clubes` | Clubes | Badge azul + fondo blanco |
| `padelyzer-router` | `deploy-router` | Router | Badge negro + selector |

## 🚨 PUNTOS CRÍTICOS

1. **Production Branch** debe ser el específico, NO `v2-monorepo`
2. **Root Directory** debe estar vacío (usar root del repo)
3. **Cada proyecto** debe tener un nombre único
4. **NO reutilizar** proyectos existentes

## 🔧 Si algo sale mal

1. Verifica que el **Production Branch** esté correcto
2. Ve a Project Settings → Git → Production Branch
3. Cambia a: `deploy-jugadores`, `deploy-clubes`, o `deploy-router`
4. Redeploy

## ✅ TEST FINAL

Cada URL debería mostrar:
- **Título correcto** en la pestaña del browser
- **Badge identificador** en la página
- **Tema correcto** (oscuro para jugadores, blanco para clubes/router)
- **Logo correcto** (blanco para jugadores, negro para clubes/router)