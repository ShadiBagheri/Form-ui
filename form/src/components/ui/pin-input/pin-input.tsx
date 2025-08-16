import { PinInput as Pin } from '@mantine/core';
import React from 'react';
import { PinInputProps } from './types';

export const PinInput = React.forwardRef<HTMLInputElement, PinInputProps>(({ size = "md", variant = "default", placeholder = "", type = "number", ...props }, ref) => {
    return (
        <Pin size={size} variant={variant} placeholder={placeholder} type={type} ref={ref} {...props}/>
    )
})

PinInput.displayName = "PinInput";