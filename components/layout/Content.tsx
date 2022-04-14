import Container from '@mui/material/Container';
import { motion } from 'framer-motion';

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
        {children}
      </Container>
    </motion.div>
  );
};

export default Content;
