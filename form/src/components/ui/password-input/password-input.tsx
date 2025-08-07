import * as React from 'react';
import { PasswordInput as MantineInput } from '@mantine/core';
import { InputProps } from './types';

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ required, size = 'sm', variant = 'default', ...props }, ref) => {
    return (
      <MantineInput ref={ref} variant={variant} size={size} withAsterisk={required} {...props} />
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
