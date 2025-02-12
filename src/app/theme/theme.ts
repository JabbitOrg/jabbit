import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          value: '#334195',
        },
        primary_2: {
          value: '#7c83b0',
        },
        primary_3: {
          value: '#a8adcd',
        },
        primary_4: {
          value: '#f8f9fc',
        },
        secondary: {
          value: '#4d8b31',
        },
        secondary_2: {
          value: '#ffc800',
        },
        main: {
          white_1: {
            value: '#ffffff',
          },
          black_1: {
            value: '#000000',
          },
          black_2: {
            value: '#666666',
          },
          black_3: {
            value: '#868686',
          },
          black_4: {
            value: '#a3a3a3',
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
