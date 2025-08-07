import { InputHTMLAttributes, ReactNode } from 'react';
import { RadiusVariant, SizeVariant, Variants } from '@/components/ui/types';

export type InputProps = {
  variant?: Extract<Variants, 'default' | 'filled' | 'outline' | 'unstyled'>;
  size?: SizeVariant;
  radius?: RadiusVariant;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  leftSectionWidth?: number | string;
  rightSectionWidth?: number | string;
  required?: boolean;
  className?: string;
  label?: string;
  description?: string;
  error?: ReactNode | boolean;
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
