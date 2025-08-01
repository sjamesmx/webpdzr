import React from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';

export interface LogoProps {
  className?: string;
  variant?: 'default' | 'player' | 'club';
  size?: 'sm' | 'md' | 'lg';
  type?: 'logo' | 'isotipo';
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  variant = 'default',
  size = 'md',
  type = 'logo'
}) => {
  const sizeClasses = {
    sm: type === 'logo' ? 'h-6' : 'h-8',
    md: type === 'logo' ? 'h-8' : 'h-10', 
    lg: type === 'logo' ? 'h-10' : 'h-12'
  };

  const getLogoSrc = () => {
    const isWhite = variant === 'player';
    const prefix = type === 'logo' ? 'Padelyzer-Logo' : 'Padelyzer-Isotipo';
    const color = isWhite ? 'Blanco' : 'Negro';
    return `/${prefix}-${color}.png`;
  };

  return (
    <div className={clsx('relative', className)}>
      <Image
        src={getLogoSrc()}
        alt="Padelyzer"
        height={type === 'logo' ? 40 : 48}
        width={type === 'logo' ? 160 : 48}
        className={clsx('object-contain', sizeClasses[size])}
        priority
      />
    </div>
  );
};