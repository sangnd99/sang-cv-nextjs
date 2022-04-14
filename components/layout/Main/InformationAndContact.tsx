import { Container, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import TabNavigation from 'components/TabNavigation';
import { motion } from 'framer-motion';

import DownloadCV from 'components/DownloadCV';

import { contactLists, tabLists } from './helper';
import { hex2rgba, randomId } from 'utils';

const InformationAndContact: React.FC = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: 'easeInOut' }}
        >
          <Box
            sx={{
              width: 135,
              height: 135,
              border: `3.5px solid ${theme.palette.primary.main}`,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <Avatar
              alt="Nguyen Dinh Sang"
              src="assets/images/avatar.png"
              sx={{
                'width': 120,
                'height': 120,
                'background': `linear-gradient(180deg, ${
                  theme.palette.primary.main
                } 0%, ${hex2rgba(theme.palette.primary.main, 0.2)} 100%)`,
                '& img': {
                  objectPosition: 10,
                },
              }}
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: 'easeInOut', delay: 0.1 }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 600,
              color: 'text.secondary',
            }}
          >
            Nguyen Dinh Sang
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: 'easeInOut', delay: 0.15 }}
        >
          <Typography variant="body2" fontWeight="500" marginBottom="20px">
            Web developer
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: 'easeInOut', delay: 0.2 }}
        >
          <Box marginBottom="30px">
            {contactLists.map(({ Icon, link }) => (
              <a href={link} key={`contact-${randomId()}`}>
                <IconButton
                  size="small"
                  sx={{
                    'color': 'text.secondary',
                    'transition': 'color 0.3s',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              </a>
            ))}
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: 'easeInOut', delay: 0.25 }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap="20px"
            color="text.default"
            marginBottom="30px"
          >
            <DownloadCV />
            <Box>
              <a href="tel:0987541132">
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    'padding': '12px',
                    'width': 'max-content',
                    'minWidth': 'max-content',
                    'marginRight': '8px',
                    'boxShadow': `0 4px 8px ${hex2rgba(
                      theme.palette.text.primary,
                      0.25,
                    )}`,
                    '&:hover': {
                      boxShadow: `0 4px 12px ${hex2rgba(
                        theme.palette.text.primary,
                        0.25,
                      )}`,
                    },
                  }}
                >
                  <CallIcon />
                </Button>
              </a>
              <a href="mailto:sangnd12.99@gmail.com">
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    'padding': '12px',
                    'width': 'max-content',
                    'minWidth': 'max-content',
                    'boxShadow': `0 4px 8px ${hex2rgba(
                      theme.palette.text.primary,
                      0.25,
                    )}`,
                    '&:hover': {
                      boxShadow: `0 4px 12px ${hex2rgba(
                        theme.palette.text.primary,
                        0.25,
                      )}`,
                    },
                  }}
                >
                  <MailIcon />
                </Button>
              </a>
            </Box>
          </Box>
        </motion.div>
        <TabNavigation data={tabLists} />
      </Box>
    </Container>
  );
};

export default InformationAndContact;
