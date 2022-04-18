import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Content from 'components/layout/Content';

const NotFound: NextPage = () => {
  return (
    <Content title="Not found">
      <Box display="flex" flexDirection="column" alignItems="center" gap="20px">
        <Box
          display="flex"
          flexDirection="column"
          gap="10px"
          borderBottom="1px solid text.primary"
          color="text.secondary"
        >
          <Typography variant="h4" fontWeight="700" width="100%">
            NOT FOUND
          </Typography>
          <Typography variant="body1" fontWeight="500">
            Oops!!! The page you looking for might have been removed, name
            changed or is temporarily unavailable.
          </Typography>
        </Box>
        <Divider
          sx={{
            width: '100%',
          }}
        />
        <Link href="/">
          <a>
            <Button
              variant="contained"
              color="error"
              sx={{
                minWidth: 'max-content',
                width: 'max-content',
                fontWeight: 600,
              }}
            >
              Back to home
            </Button>
          </a>
        </Link>
      </Box>
    </Content>
  );
};

export default NotFound;
