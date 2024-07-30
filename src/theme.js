// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      100: '#3d5cb8',
      200: '#334c99',
    },
    text: {
      dark: '#0f172a',
      light: '#64748b',
      extraLight: '#f1f5f9',
      white: '#ffffff',
    },
  },
  fonts: {
    body: 'Poppins, sans-serif',
  },
});

export default theme;
