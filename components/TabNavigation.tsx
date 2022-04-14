import Link from 'next/link';
import { useTheme, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

import { randomId } from 'utils';

const LinkButton: React.FC<{
  children: React.ReactNode;
  path: string;
  active?: boolean;
}> = ({ children, path, active = false }) => {
  const theme = useTheme();
  return (
    <Link href={path}>
      <a>
        <Button
          size="small"
          sx={{
            borderBottom: `${
              active ? `2px solid ${theme.palette.primary.main}` : 'none'
            }`,
            color: `${active ? 'primary.main' : 'text.primary'}`,
            borderRadius: '0',
            fontWeight: `${active ? 700 : 500}`,
          }}
        >
          {children}
        </Button>
      </a>
    </Link>
  );
};

const TabNavigation: React.FC<{ data: any[] }> = ({ data }) => {
  const router = useRouter();
  return (
    <Box display="flex" gap="10px" width="max-content" marginRight="auto">
      {data.map(({ path, name }) => (
        <LinkButton
          path={path}
          active={router.route === path}
          key={`${path}-${randomId()}`}
        >
          {name}
        </LinkButton>
      ))}
    </Box>
  );
};

export default TabNavigation;
