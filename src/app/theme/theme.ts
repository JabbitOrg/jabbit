import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          value: '#334195',
        },
        white: {
          value: '#ffffff',
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
