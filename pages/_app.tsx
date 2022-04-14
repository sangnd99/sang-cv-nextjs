import type { AppProps } from 'next/app';
import {
  PaletteMode,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import { useMemo, useState, createContext, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.css';
import { getDesignTokens } from 'styles/theme';
import Main from 'components/layout/Main';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          prevMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', prevMode);
          return prevMode;
        });
      },
    }),
    [],
  );

  useEffect(() => {
    const theme = (localStorage.getItem('theme') as PaletteMode) || 'light';
    setMode(theme);
  }, []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence>
          <Main>
            <Component {...pageProps} key={router.route} />
          </Main>
        </AnimatePresence>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
