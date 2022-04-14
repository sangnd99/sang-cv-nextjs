import Header from './Header';
import InformationAndContact from './InformationAndContact';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        minHeight: '100vh',
      }}
    >
      <Box>
        <Header />
        <InformationAndContact />
      </Box>
      {children}
      <Typography
        variant="body2"
        width="100%"
        textAlign="center"
        padding="5px 0"
      >
        &copy; Nguyen Dinh Sang. All right reserved
      </Typography>
    </Box>
  );
};

export default Main;
