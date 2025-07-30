'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Comparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const comparisons = [
    {
      feature: 'Módulo de Reservas',
      padelyzer: { value: 'GRATIS', highlight: true },
      playtomic: '€250/mes + fees',
      otros: '€150-300/mes'
    },
    {
      feature: 'Análisis con IA',
      padelyzer: { value: '✓ Avanzado', highlight: true },
      playtomic: '✗',
      otros: '✗'
    },
    {
      feature: 'Comisiones por Reserva',
      padelyzer: { value: '0%', highlight: true },
      playtomic: '1-3%',
      otros: '2-5%'
    },
    {
      feature: 'Business Intelligence',
      padelyzer: { value: '✓ Completo', highlight: true },
      playtomic: 'Básico',
      otros: '✗'
    },
    {
      feature: 'Coach IA Personal',
      padelyzer: { value: '✓ 15+ golpes', highlight: true },
      playtomic: '✗',
      otros: '✗'
    },
    {
      feature: 'Verificación de Nivel',
      padelyzer: { value: 'Científica', highlight: true },
      playtomic: 'Autodeclarado',
      otros: 'Autodeclarado'
    },
    {
      feature: 'Tecnología',
      padelyzer: { value: 'Open Source', highlight: true },
      playtomic: 'Propietaria',
      otros: 'Propietaria'
    },
    {
      feature: 'Lock-in',
      padelyzer: { value: 'Sin ataduras', highlight: true },
      playtomic: 'Contrato anual',
      otros: 'Variable'
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E3FD72]/5 via-transparent to-transparent" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #E3FD72 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 backdrop-blur-sm rounded-full border border-red-500/20 mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 text-sm font-medium uppercase tracking-wider">
              La verdad duele
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display">
            No hay comparación
            <span className="block text-[#E3FD72]">
              Solo hay evolución
            </span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#E3FD72]/20 via-transparent to-[#E3FD72]/20 blur-3xl opacity-50" />
          
          <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-6 text-gray-400 font-medium">
                      Característica
                    </th>
                    <th className="text-center p-6">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-2xl font-bold text-[#E3FD72] font-display">
                          Padelyzer
                        </span>
                        <span className="text-xs text-gray-500 uppercase">Beta 2025</span>
                      </div>
                    </th>
                    <th className="text-center p-6 text-gray-500">
                      Playtomic
                    </th>
                    <th className="text-center p-6 text-gray-500">
                      Otros
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                      className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors"
                    >
                      <td className="p-6 text-gray-300 font-medium">
                        {item.feature}
                      </td>
                      <td className="p-6 text-center">
                        {item.padelyzer.highlight ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#E3FD72]/20 rounded-full"
                          >
                            <span className="text-[#E3FD72] font-bold">
                              {item.padelyzer.value}
                            </span>
                          </motion.div>
                        ) : (
                          <span className="text-[#E3FD72] font-bold">
                            {item.padelyzer.value}
                          </span>
                        )}
                      </td>
                      <td className="p-6 text-center text-gray-500">
                        {item.playtomic}
                      </td>
                      <td className="p-6 text-center text-gray-500">
                        {item.otros}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 mb-4">
            "No competimos. <span className="text-[#E3FD72] font-bold">Evolucionamos</span>."
          </blockquote>
          <p className="text-gray-500">
            — La diferencia entre cobrar comisiones y regalar libertad
          </p>
        </motion.div>
      </div>
    </section>
  );
}