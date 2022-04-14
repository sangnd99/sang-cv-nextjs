import { useTheme } from '@mui/material';

export const useColorModeValue = (lightMode: string, darkMode: string) => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  if (mode === 'light') {
    return lightMode;
  }
  return darkMode;
};
