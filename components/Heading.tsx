import Typography from '@mui/material/Typography';

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography
      variant="h6"
      fontWeight="600"
      color="text.secondary"
      width="max-content"
      borderBottom="3.5px solid"
      marginBottom="10px"
    >
      {children}
    </Typography>
  );
};

export default Heading;
