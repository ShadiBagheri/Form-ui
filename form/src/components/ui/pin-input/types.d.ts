import { ElementProps, MantineSpacing } from "@mantine/core";
import { HTMLInputTypeAttribute } from "react";
import { RadiusVariant, SizeVariant, Variants } from "../types";


export type PinInputProps = {
    variant?: Extract<Variants, "filled" | "default" | "outline" | "unstyled">,
    radius?: RadiusVariant,
    size?: SizeVariant,
    ariaLababel?: string,
    autoFocus?: boolean,
    defaultValue?: string,
    disabled?: boolean,
    error?: boolean,
    form?: string,
    gap?: MantineSpacing,
    getInputProps?: ((index: number) => InputProps & ElementProps<"input", "size">),
    hiddenInputProps?: React.ComponentPropsWithoutRef<"input">,
    id?; string,
    inputMode?: "search" | "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal",
    inputType?: HTMLInputTypeAttribute,
    length?: number,
    mask?: boolean,
    manageFocus?: boolean,
    name?: string,
    onChange?: ((value: string) => void),
    onComplete?: ((value: string) => void),
    onTimeCode?: boolean,
    placeholder?: string,
    type?: "number" | RegExp | "alphanumeric",
    value?: string,
} 