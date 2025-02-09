import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          value: '#334195',
        },
        main: {
          white_1: {
            value: '#ffffff',
          },
          black_1: {
            value: '#000000',
          },
          gray_1: {
            value: '#666666',
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
