import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonProps as MantineButtonProps } from '@mantine/core';
import { ColorVariant, RadiusVariant, SizeVariant, Variants } from '@/components/ui/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: SizeVariant;
  startIcon?: ReactNode | null;
  endIcon?: ReactNode | null;
  color?: ColorVariant;
  variant?: Variants;
  fullWidth?: boolean;
  radius?: RadiusVariant;
  component?: MantineButtonProps['component'];
  href?: string;
}
