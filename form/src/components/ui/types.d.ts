export type SizeVariant = "xs" | "sm" | "md" | "lg" | "xl";

export type ColorVariant =
  | "primary"
  | "neutral"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "dark"
  | "gray"
  | "red"
  | "pink"
  | "grape"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "green"
  | "lime"
  | "yellow"
  | "orange"
  | "teal"
  | (string & {});

export type RadiusVariant = SizeVariant | number;

export type Variants =
  | "filled"
  | "light"
  | "outline"
  | "default"
  | "white"
  | "transparent"
  | "unstyled";
