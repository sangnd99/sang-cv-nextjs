import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import { hex2rgba } from 'utils';

const DownloadCV: React.FC = () => {
  const theme = useTheme();
  return (
    <a href="assets/pdf/NguyenDinhSang-CV.pdf" download>
      <Button
        variant="contained"
        endIcon={<FileDownloadOutlinedIcon />}
        sx={{
          'padding': '18px 24px',
          'textTransform': 'capitalize',
          'fontWeight': 600,
          'boxShadow': `0 8px 24px ${hex2rgba(
            theme.palette.primary.main,
            0.25,
          )}`,
          '&:hover': {
            boxShadow: `0 4px 18px ${hex2rgba(
              theme.palette.primary.main,
              0.25,
            )}`,
          },
        }}
      >
        Download CV
      </Button>
    </a>
  );
};

export default DownloadCV;
