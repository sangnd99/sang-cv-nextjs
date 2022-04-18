import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import SunIcon from 'components/icons/SunIcon';
import MoonIcon from 'components/icons/MoonIcon';
import { ColorModeContext } from 'pages/_app';

const DarkThemeToggle: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colorMode = useContext(ColorModeContext);
  return (
    <IconButton
      aria-label="toggle theme"
      color="primary"
      onClick={colorMode.toggleColorMode}
      style={{
        color: theme.palette.text.secondary,
      }}
    >
      {mode === 'light' ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};

export default DarkThemeToggle;
