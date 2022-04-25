import Head from 'next/head';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';

import InformationAndContact from './components/InformationAndContact';
import Header from './components/Header';
import Particles from 'components/Particles';
import { useColorModeValue } from 'utils';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <Particles
        particleColor={grey[500]}
        particleLine={useColorModeValue(grey[800], grey[50])}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          minHeight: '100vh',
        }}
      >
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta name="og:title" content="Sang's CV" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://sang-cv-nextjs.vercel.app/og-image.jpg"
          />
        </Head>
        <Box paddingTop="70px">
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
    </>
  );
};

export default Main;
