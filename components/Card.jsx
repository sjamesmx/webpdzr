import React from 'react';

export default function Card({ 
  title, 
  description, 
  icon, 
  highlight = false,
  className = '' 
}) {
  return (
    <div className={`
      group relative overflow-hidden
      ${highlight 
        ? 'bg-gradient-to-br from-[#E3FD72] to-[#d5ed62] text-black' 
        : 'bg-white dark:bg-gray-900 text-black dark:text-white'
      }
      rounded-3xl p-8 transition-all duration-500
      hover:scale-[1.02] hover:shadow-2xl
      ${!highlight && 'border border-gray-100 dark:border-gray-800'}
      ${className}
    `}>
      {/* Animated background gradient */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        highlight ? 'bg-gradient-to-br from-white/20 to-transparent' : 'bg-gradient-to-br from-[#E3FD72]/10 to-transparent'
      }`} />
      
      {/* Icon */}
      {icon && (
        <div className={`
          relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6
          ${highlight 
            ? 'bg-black/10' 
            : 'bg-gradient-to-br from-[#E3FD72]/20 to-[#E3FD72]/10 dark:from-[#E3FD72]/30 dark:to-[#E3FD72]/20'
          }
          group-hover:scale-110 transition-transform duration-500
        `}>
          <span className="text-3xl">{icon}</span>
        </div>
      )}

      {/* Title */}
      <h3 className={`text-2xl font-bold mb-4 ${highlight ? 'text-black' : ''}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`
        text-base leading-relaxed
        ${highlight 
          ? 'text-black/80' 
          : 'text-gray-600 dark:text-gray-400'
        }
      `}>
        {description}
      </p>

      {/* Decorative element */}
      <div className={`
        absolute -bottom-8 -right-8 w-24 h-24 rounded-full
        ${highlight ? 'bg-black/5' : 'bg-[#E3FD72]/5'}
        group-hover:scale-150 transition-transform duration-700
      `} />
    </div>
  );
}

// Feature Card Component
export function FeatureCard({ feature }) {
  return (
    <Card
      icon={feature.icon}
      title={feature.title}
      description={feature.description}
      highlight={feature.highlight}
    />
  );
}

// Crypto Stats Card Component
export function StatsCard({ stat, value, change, icon }) {
  const isPositive = change > 0;
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600 dark:text-gray-400">{stat}</span>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      
      <div className="text-3xl font-bold text-black dark:text-white mb-2">
        {value}
      </div>
      
      {change !== undefined && (
        <div className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(change)}%
        </div>
      )}
    </div>
  );
}