// import type { Preview } from '@storybook/nextjs-vite';
// import { MantineProvider } from '@mantine/core';
// import { theme } from '../theme';
// // import { Story } from '@storybook/react';


// export const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
    
//     a11y: {
//       // 'todo' - show a11y violations in the test UI only
//       // 'error' - fail CI on a11y violations
//       // 'off' - skip a11y checks entirely
//       test: 'todo'
//     }
//   },
// };

// export const decorators = [
//   (Story) => (
//     <MantineProvider theme={theme}><Story/></MantineProvider>
//   )
// ];


import type { Preview } from "@storybook/nextjs-vite";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import React from "react"; // Don't forget to import React

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <MantineProvider theme={theme}>
        <Story />
      </MantineProvider>
    ),
  ],
};

export default preview;