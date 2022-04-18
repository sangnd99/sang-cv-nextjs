import Head from 'next/head';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';

const Content: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const t = `${title} - Sang's CV`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Container
        maxWidth="sm"
        sx={{
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <Head>
          <meta name="og:title" content={t} />
          <title>{t}</title>
        </Head>
        {children}
      </Container>
    </motion.div>
  );
};

export default Content;
