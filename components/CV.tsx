import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

export const CVYear: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Typography
    variant="subtitle2"
    color="primary.main"
    textAlign="right"
    width="100%"
    fontWeight="600"
  >
    {children}
  </Typography>
);

export const CVSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CVName: React.FC<{
  children: React.ReactNode;
  primary?: boolean;
  value?: string;
}> = ({ children, primary, value = '' }) => (
  <Box
    sx={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}
  >
    <Typography
      variant="body1"
      fontWeight="bold"
      color={primary ? 'primary.main' : 'text.secondary'}
    >
      {children}
    </Typography>
    <Typography variant="body2" fontWeight="600">
      {value}
    </Typography>
  </Box>
);

export const CVParagraph: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <Typography variant="body2">{children}</Typography>;
