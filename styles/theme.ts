import { PaletteMode } from '@mui/material';

export const typography = {
  fontFamily: [
    'Poppins',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
};

const darkPalette = {
  background: {
    default: '#0c151d',
  },
  grey: {
    50: 'rgba(255,255,255,0.08)',
  },
  text: {
    default: '#0c151d',
    primary: '#b8c0c7',
    secondary: '#fafdff',
  },
};

const lightPalette = {
  background: {
    default: '#fafdff',
  },
  grey: {
    50: 'rgba(0,0,0,0.08)',
  },
  text: {
    default: '#0c151d',
    primary: '#657481',
    secondary: '#0c151d',
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  typography,
  palette: {
    mode,
    ...(mode === 'light' ? lightPalette : darkPalette),
  },
});
