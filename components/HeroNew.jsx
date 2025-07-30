'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Padel Ball Component
function PadelBall({ position }) {
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      const animate = () => {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position}>
      <MeshDistortMaterial
        color="#E3FD72"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
}

// Grid Floor Component
function GridFloor() {
  return (
    <gridHelper args={[50, 50, '#E3FD72', '#1a1a1a']} rotation={[0, 0, 0]} position={[0, -5, 0]} />
  );
}

export default function HeroNew() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#E3FD72" />
          
          {/* Animated Padel Balls */}
          <PadelBall position={[5, 2, -2]} />
          <PadelBall position={[-5, -2, -1]} />
          <PadelBall position={[3, -3, 0]} />
          
          {/* Grid Floor */}
          <GridFloor />
          
          {/* Padel Court Outline */}
          <Box args={[10, 0.1, 20]} position={[0, -5, 0]}>
            <meshStandardMaterial color="#E3FD72" wireframe />
          </Box>
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          
          {/* Fog effect */}
          <fog attach="fog" args={['#000000', 10, 30]} />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Glowing Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#E3FD72] blur-xl opacity-50 animate-pulse" />
              <div className="relative px-6 py-3 bg-black border border-[#E3FD72] rounded-full">
                <span className="text-[#E3FD72] text-sm font-medium uppercase tracking-wider">
                  Beta 2025 • Solo 4 Clubes
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight font-display">
              <span className="block">El futuro del padel</span>
              <span className="block text-[#E3FD72] relative">
                es ciencia pura
                <motion.span
                  className="absolute inset-0 text-[#E3FD72]"
                  style={{ clipPath: 'inset(0 0 0 0)' }}
                  animate={{
                    clipPath: [
                      'inset(0 0 0 0)',
                      'inset(0 100% 0 0)',
                      'inset(0 0 0 0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                >
                  es ciencia pura
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Computer Vision + IA + Biomecánica = Tu evolución garantizada
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#E3FD72] transition-transform group-hover:scale-110" />
              <span className="relative text-black font-bold text-lg font-display">
                Unirse a la Beta
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#E3FD72] text-[#E3FD72] hover:bg-[#E3FD72] hover:text-black transition-all font-bold text-lg"
            >
              Ver Demo en Vivo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '0€', label: 'Comisiones' },
              { value: '15+', label: 'Golpes IA' },
              { value: '99.9%', label: 'Precisión' },
              { value: '24/7', label: 'Analytics' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#E3FD72] mb-2 font-display">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#E3FD72] text-center"
        >
          <div className="w-6 h-10 border-2 border-[#E3FD72] rounded-full mx-auto mb-2">
            <div className="w-1 h-3 bg-[#E3FD72] rounded-full mx-auto mt-2 animate-bounce" />
          </div>
          <span className="text-xs uppercase tracking-wider">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}