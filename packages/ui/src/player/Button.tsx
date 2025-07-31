import React from 'react';
import { clsx } from 'clsx';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from '../shared/Button';

export interface PlayerButtonProps extends BaseButtonProps {}

export const PlayerButton = React.forwardRef<HTMLButtonElement, PlayerButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={clsx(
          {
            // Player-specific variants
            'bg-player-accent hover:bg-player-accent-hover text-black': variant === 'primary',
            'border-2 border-player-accent text-player-accent hover:bg-player-accent hover:text-black': variant === 'secondary',
            'text-player-text-secondary hover:text-player-accent': variant === 'ghost',
          },
          'focus:ring-player-accent',
          className
        )}
        variant={variant}
        {...props}
      />
    );
  }
);

PlayerButton.displayName = 'PlayerButton';