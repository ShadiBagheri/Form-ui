import React, { ButtonHTMLAttributes } from 'react';
import { ButtonProps as MantineButtonProps } from '@mantine/core';
import { ColorVariant, RadiusVariant, SizeVariant, Variants } from '@/components/ui/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: SizeVariant;
  color?: ColorVariant;
  variant?: Variants;
  fullWidth?: boolean;
  radius?: RadiusVariant;
  component?: MantineButtonProps['component'];
  href?: string;
  children?: React.ReactNode;
}
