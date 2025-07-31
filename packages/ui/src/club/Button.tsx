import React from 'react';
import { clsx } from 'clsx';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from '../shared/Button';

export interface ClubButtonProps extends BaseButtonProps {}

export const ClubButton = React.forwardRef<HTMLButtonElement, ClubButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={clsx(
          {
            // Club-specific variants
            'bg-club-accent hover:bg-club-accent-hover text-white shadow-sm': variant === 'primary',
            'border-2 border-club-accent text-club-accent hover:bg-club-accent hover:text-white': variant === 'secondary',
            'text-club-text-secondary hover:text-club-accent': variant === 'ghost',
          },
          'focus:ring-club-accent',
          className
        )}
        variant={variant}
        {...props}
      />
    );
  }
);

ClubButton.displayName = 'ClubButton';