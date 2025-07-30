'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 bg-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#E3FD72]/10 via-transparent to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E3FD72]/10 backdrop-blur-sm rounded-full border border-[#E3FD72]/20 mb-6">
            <span className="text-[#E3FD72] text-sm font-medium uppercase tracking-wider">Nuestra Filosofía</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Transparencia radical en cada píxel
          </h2>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              icon: '🧬',
              title: 'Ciencia, no marketing',
              content: 'Mientras otros venden suscripciones con niveles autodeclarados y métricas inventadas, nosotros invertimos en I+D real. Cada algoritmo está respaldado por papers científicos, cada métrica validada por biomecánica deportiva.'
            },
            {
              icon: '💚',
              title: 'El modelo justo',
              content: 'Los clubes no deberían pagar por digitalizar sus reservas. Por eso nuestro módulo base es 100% gratuito, para siempre. Sin letra pequeña, sin comisiones ocultas. Pagás solo por los módulos avanzados que realmente usás.'
            },
            {
              icon: '🎯',
              title: 'Padel IQ real',
              content: 'Tu nivel no es lo que creés, es lo que la ciencia dice. Nuestro Padel IQ analiza +15 tipos de golpes con Computer Vision, mide velocidad, precisión, consistencia y táctica. Es la primera vez que podés saber objetivamente tu nivel.'
            },
            {
              icon: '🚀',
              title: 'Beta con propósito',
              content: 'No somos otra app más. Somos 4 clubes en Puebla probando que el padel puede ser diferente. Cada club beta nos ayuda a construir el futuro, y a cambio obtiene tecnología que sus competidores tardarán años en alcanzar.'
            },
            {
              icon: '🌎',
              title: 'Tecnología sin fronteras',
              content: 'Usamos MCP y Ollama porque creemos que la IA debe ser accesible. No dependemos de APIs caras ni modelos propietarios. Tu data es tuya, tu club es tuyo, tu mejora es tuya.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#E3FD72]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#E3FD72]/20 transition-colors">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 font-display text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#E3FD72]/20 to-[#E3FD72]/20 blur-3xl" />
          <div className="relative p-8 bg-black border border-[#E3FD72]/30 rounded-3xl">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl font-medium text-white font-display mb-4">
                "No competimos con Playtomic. Ellos cobran comisiones, 
                nosotros regalamos libertad. Son modelos incompatibles."
              </p>
              <footer className="text-[#E3FD72] font-medium">
                — Equipo Padelyzer
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}