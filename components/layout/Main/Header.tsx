import { Box, Container } from '@mui/material';
import DarkThemeToggle from 'components/DarkThemeToggle';
import Logo from './Logo';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        backdropFilter: 'blur(10px)',
        padding: '5px 0',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '768px',
        }}
      >
        <Logo />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <a>
            <Button
              startIcon={<GitHubIcon />}
              sx={{
                color: 'text.secondary',
              }}
            >
              <Typography variant="caption" fontWeight="600">
                Source
              </Typography>
            </Button>
          </a>
          <DarkThemeToggle />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
