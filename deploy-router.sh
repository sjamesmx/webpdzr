#!/bin/bash

echo "🚀 Desplegando Router de Padelyzer a Vercel..."

# Navegar al directorio del router
cd apps/router

# Verificar si existe el token
if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ Error: VERCEL_TOKEN no está configurado"
    echo "Por favor ejecuta: export VERCEL_TOKEN='tu-token-aqui'"
    exit 1
fi

# Desplegar a producción
echo "📦 Construyendo y desplegando..."
vercel --prod --yes --token $VERCEL_TOKEN

echo "✅ Deployment completado!"