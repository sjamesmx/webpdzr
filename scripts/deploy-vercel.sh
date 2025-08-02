#!/bin/bash

# Script para desplegar desde v2-monorepo
echo "Desplegando router desde rama v2-monorepo..."

# Instalar Vercel CLI si no existe
if ! command -v vercel &> /dev/null; then
    echo "Instalando Vercel CLI..."
    npm i -g vercel
fi

# Navegar al directorio del router
cd apps/router

# Desplegar a producción
vercel --prod --yes

echo "Despliegue completado!"