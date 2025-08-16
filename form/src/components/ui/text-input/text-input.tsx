import * as React from 'react';
import { TextInput as MantineInput } from '@mantine/core';
import { InputProps } from './types';

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ required, size = 'sm', variant = 'default', ...props }, ref) => {
    return (
      <MantineInput ref={ref} size={size} withAsterisk={required} variant={variant} {...props} />
    );
  }
);

TextInput.displayName = 'TextInput';
