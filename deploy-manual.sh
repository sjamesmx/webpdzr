#!/bin/bash

echo "🚀 Iniciando deployment manual..."

# Deploy Club App
echo "🏢 Deploying Club App..."
cd apps/web-club
vercel --prod --name padelyzer-club-app --yes

# Deploy Player App  
echo "🎾 Deploying Player App..."
cd ../web-player
vercel --prod --name padelyzer-player-app --yes

echo "✅ Deployments iniciados. Verifica en el dashboard de Vercel."