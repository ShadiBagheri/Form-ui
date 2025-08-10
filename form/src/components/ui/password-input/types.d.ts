import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { RadiusVariant, SizeVariant, Variants } from '@/components/ui/types';

export type InputProps = {
  variant?: Extract<Variants, 'default' | 'filled' | 'unstyled' | 'outline'>;
  size?: SizeVariant;
  radius?: RadiusVariant;
  required?: boolean;
  className?: string;
  label?: string;
  error?: ReactNode | boolean;
  defaultVisible?: boolean;
  visibilityToggleIcon?: FC<{ reveal: boolean }>;
  classNames?: {
    input?: string;
    section?: string;
    wrapper?: string;
    description?: string;
    error?: string;
    label?: string;
    required?: string;
    root?: string;
  };
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
