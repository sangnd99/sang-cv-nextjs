import Typography from '@mui/material/Typography';

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        textIndent: '20px',
      }}
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
