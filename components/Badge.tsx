import Typography from '@mui/material/Typography';
import { grey, lightBlue } from '@mui/material/colors';
import { useColorModeValue } from 'utils/hooks';
import { hex2rgba } from 'utils';

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography
      variant="body2"
      component="span"
      sx={{
        background: useColorModeValue(
          lightBlue[200],
          hex2rgba(lightBlue[300], 0.3),
        ),
        display: 'inline-block',
        width: 'max-content',
        height: 'max-content',
        padding: '2px 5px',
        mr: '10px',
        color: useColorModeValue(grey[700], lightBlue[300]),
        fontWeight: 600,
      }}
    >
      {children}
    </Typography>
  );
};

export default Badge;
