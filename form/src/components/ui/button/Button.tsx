import * as React from 'react';
import { Button as MantineButton } from '@mantine/core';
import { ButtonProps } from './types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = 'neutral',
      variant = 'filled',
      radius = 'md',
      ...props
    },
    ref
  ) => {
    return (
      <MantineButton
        ref={ref}
        color={color}
        variant={variant}
        radius={radius}
        {...props}
      >
        {children}
      </MantineButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
