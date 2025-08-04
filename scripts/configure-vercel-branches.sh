#!/bin/bash

# Script para configurar los branches de producción en Vercel usando CLI
# Requiere: vercel CLI instalado y autenticado

set -e

echo "🔧 Configurando branches de producción en Vercel..."

# Función para configurar un proyecto
configure_project() {
    local project_name=$1
    local branch=$2
    
    echo "📦 Configurando $project_name para usar branch: $branch"
    
    # Primero hacemos link al proyecto si no está linkeado
    vercel link --project=$project_name --yes || true
    
    # Luego configuramos el production branch
    vercel git connect --production-branch=$branch
    
    echo "✅ $project_name configurado correctamente"
}

# Verificar si Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Error: Vercel CLI no está instalado"
    echo "Instálalo con: npm i -g vercel"
    exit 1
fi

# Verificar autenticación
echo "🔐 Verificando autenticación..."
vercel whoami || {
    echo "❌ No estás autenticado. Ejecuta: vercel login"
    exit 1
}

# Configurar cada proyecto
echo ""
echo "🚀 Iniciando configuración de proyectos..."

# Proyecto de Jugadores
read -p "¿Nombre del proyecto de Jugadores en Vercel? [padelyzer-player-app]: " player_project
player_project=${player_project:-padelyzer-player-app}
configure_project "$player_project" "deploy-jugadores"

# Proyecto de Clubes  
read -p "¿Nombre del proyecto de Clubes en Vercel? [padelyzer-club-app]: " club_project
club_project=${club_project:-padelyzer-club-app}
configure_project "$club_project" "deploy-clubes"

# Proyecto Router
read -p "¿Nombre del proyecto Router en Vercel? [web-router]: " router_project
router_project=${router_project:-web-router}
configure_project "$router_project" "main"

echo ""
echo "🎉 Configuración completada!"
echo ""
echo "📋 Resumen:"
echo "- $player_project → deploy-jugadores"
echo "- $club_project → deploy-clubes"
echo "- $router_project → main"
echo ""
echo "Los deployments deberían activarse automáticamente en unos momentos."