import React from 'react';

export default function Philosophy() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E3FD72]/10 backdrop-blur-sm rounded-full border border-[#E3FD72]/20 mb-6">
            <span className="text-[#E3FD72] text-sm font-medium uppercase tracking-wider">Nuestra Filosofía</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
            Transparencia radical en cada píxel
          </h2>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-display text-gray-900 dark:text-white">
                🧬 Ciencia, no marketing
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mientras otros venden suscripciones con niveles autodeclarados y métricas inventadas, 
                nosotros invertimos en I+D real. Cada algoritmo está respaldado por papers científicos, 
                cada métrica validada por biomecánica deportiva.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 font-display text-gray-900 dark:text-white">
                💚 El modelo justo
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Los clubes no deberían pagar por digitalizar sus reservas. Por eso nuestro módulo base 
                es 100% gratuito, para siempre. Sin letra pequeña, sin comisiones ocultas. Pagás solo 
                por los módulos avanzados que realmente usás.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 font-display text-gray-900 dark:text-white">
                🎯 Padel IQ real
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tu nivel no es lo que creés, es lo que la ciencia dice. Nuestro Padel IQ analiza 
                +15 tipos de golpes con Computer Vision, mide velocidad, precisión, consistencia y 
                táctica. Es la primera vez que podés saber objetivamente tu nivel.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 font-display text-gray-900 dark:text-white">
                🚀 Beta con propósito
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No somos otra app más. Somos 4 clubes en Puebla probando que el padel puede ser 
                diferente. Cada club beta nos ayuda a construir el futuro, y a cambio obtiene 
                tecnología que sus competidores tardarán años en alcanzar.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 font-display text-gray-900 dark:text-white">
                🌎 Tecnología sin fronteras
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Usamos MCP y Ollama porque creemos que la IA debe ser accesible. No dependemos 
                de APIs caras ni modelos propietarios. Tu data es tuya, tu club es tuyo, tu 
                mejora es tuya.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-black dark:bg-white rounded-2xl">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-medium text-white dark:text-black font-display mb-4">
              "No competimos con Playtomic. Ellos cobran comisiones, 
              nosotros regalamos libertad. Son modelos incompatibles."
            </p>
            <footer className="text-[#E3FD72] dark:text-gray-600 font-medium">
              — Equipo Padelyzer
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}