import React from "react";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { theme } from "../../../theme";
import classes from "./styles.module.css";

type Props = { children: React.ReactNode };

export const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={classes.container}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
};
