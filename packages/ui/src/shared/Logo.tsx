import React from 'react';
import { clsx } from 'clsx';

export interface LogoProps {
  className?: string;
  variant?: 'default' | 'player' | 'club';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  variant = 'default',
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const colorClasses = {
    default: 'text-current',
    player: 'text-white',
    club: 'text-club-text-primary'
  };

  return (
    <div className={clsx(
      'font-display font-bold tracking-tight',
      sizeClasses[size],
      colorClasses[variant],
      className
    )}>
      Padelyzer
      {variant === 'club' && (
        <span className="text-club-accent ml-1">Pro</span>
      )}
    </div>
  );
};