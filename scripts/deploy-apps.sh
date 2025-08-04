#!/bin/bash

# Script para facilitar el deployment de las apps a Vercel
# Uso: ./scripts/deploy-apps.sh [clubes|jugadores|router|all]

set -e

echo "🚀 Iniciando proceso de deployment..."

deploy_clubes() {
    echo "🏢 Desplegando app de Clubes..."
    git checkout deploy-clubes
    git merge main --no-edit
    git push origin deploy-clubes
    echo "✅ Clubes: Push completado a deploy-clubes"
}

deploy_jugadores() {
    echo "🎾 Desplegando app de Jugadores..."
    git checkout deploy-jugadores
    git merge main --no-edit
    git push origin deploy-jugadores
    echo "✅ Jugadores: Push completado a deploy-jugadores"
}

deploy_router() {
    echo "🔀 Desplegando Router..."
    git checkout main
    git push origin main
    echo "✅ Router: Push completado a main"
}

case "$1" in
    clubes)
        deploy_clubes
        ;;
    jugadores)
        deploy_jugadores
        ;;
    router)
        deploy_router
        ;;
    all)
        deploy_clubes
        deploy_jugadores
        deploy_router
        ;;
    *)
        echo "Uso: $0 [clubes|jugadores|router|all]"
        exit 1
        ;;
esac

git checkout main
echo "🎉 Deployment completado! Verifica los deployments en Vercel."