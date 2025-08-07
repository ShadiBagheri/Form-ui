import { createTheme, Button, TextInput , PasswordInput, type MantineColorsTuple } from "@mantine/core";
import "@mantine/core/styles.css";
import overrideMantineButtonClassNames from '@/styles/overrides/mantine-button.module.css';
import overrideMantineInputLabelClassNames from '@/styles/overrides/mantine-input-label.module.css';


const primary: MantineColorsTuple = [
  "#d1f4e5",
  "#b2ecd4",
  "#8ce3bf",
  "#65daa9",
  "#3ed094",
  "#18c77e",
  "#14a669",
  "#108554",
  "#0c643f",
  "#08422a",
  "#052819",
];

const neutral: MantineColorsTuple = [
  "#FFFFFF",
  "#F6F6F6",
  "#DEDEDE",
  "#CDCDCD",
  "#BABABA",
  "#888888",
  "#4C4C4C",
  "#2F2F2F",
  "#1F1F1F",
  "#121212",
  "#090909",
];

const success: MantineColorsTuple = [
  "#EEFBF3",
  "#b7eccf",
  "#94E3B7",
  "#70da9f",
  "#4cd087",
  "#28c76f",
  "#21a65d",
  "#1b854a",
  "#146438",
  "#0d4225",
  "#082816",
];

const error: MantineColorsTuple = [
  "#FDF1F1",
  "#F8C6C6",
  "#F5AAAA",
  "#F18D8E",
  "#EE7171",
  "#EA5455",
  "#C34647",
  "#9C3839",
  "#752A2B",
  "#4E1C1C",
  "#2F1111",
];

const warning: MantineColorsTuple = [
  "#FFF7F0",
  "#FFDFC0",
  "#FFCFA1",
  "#FFBF82",
  "#FFAF62",
  "#FF9F43",
  "#D58538",
  "#AA6A2D",
  "#805022",
  "#553516",
  "#33200D",
];

const info: MantineColorsTuple = [
  "#E9FDF8",
  "#AAEFF7",
  "#80E7F4",
  "#55DFF0",
  "#2AD7EC",
  "#00CCF8",
  "#00B4D1",
  "#009CB4",
  "#008498",
  "#006C7B",
  "#00292E",
];

export const theme = createTheme({
  colors: {
    primary,
    neutral,
    success,
    error,
    warning,
    info,
  },
  components: {
    Button: {
      defaultProps: {
        classNames: {...overrideMantineButtonClassNames},
      },
    },
    TextInput: {
      defaultProps: {
        classNames: {...overrideMantineInputLabelClassNames},
      },
    },
    PasswordInput: {
      defaultProps: {
        classNames: {...overrideMantineInputLabelClassNames},
      },
    },
  },
  primaryColor: "primary",
  radius: {
    xs: "0.175rem",
    sm: "0.3rem",
    md: "0.6rem",
    lg: "1.2rem",
    xl: "2.4rem",
  },
  fontSizes: {
    xs: "0.55rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  defaultRadius: "md",
});
