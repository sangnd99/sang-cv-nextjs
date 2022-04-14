import type { NextPage } from 'next';
import { useTheme, Typography, Box } from '@mui/material';

import Heading from 'components/Heading';
import Content from 'components/layout/Content';
import Paragraph from 'components/Paragraph';

import { CVSection, CVYear, CVName, CVParagraph } from 'components/CV';

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <Content>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Box
          sx={{
            background: theme.palette.grey[50],
            padding: '15px',
            borderRadius: '10px',
          }}
        >
          <Typography variant="body2" fontWeight="600" textAlign="center">
            Hello!!! I&apos;m a front-end developer with a year of experience
          </Typography>
        </Box>
        <Box>
          <Heading>Summary</Heading>
          <Paragraph>
            I&apos;m Sang, currently i&apos;m working as a Front-end developer.
            Learning new front-end framework, language and technologies is what
            i am passionate about.
          </Paragraph>
          <Paragraph>
            My goal is to become a Full-stack developer so firstly, i have to
            master the knowledge of Front-end Web developer. I also want to find
            a company that match my goals and abilities, so that i can develop
            more in the future.
          </Paragraph>
        </Box>
        <Box>
          <Heading>Education</Heading>
          <CVSection>
            <CVYear>September 2017 - Present</CVYear>
            <CVName>Ho Chi Minh city University of Education</CVName>
            <CVParagraph>Bachelor of Computer Science</CVParagraph>
            <CVParagraph>4th year student</CVParagraph>
          </CVSection>
        </Box>
      </Box>
    </Content>
  );
};

export default Home;
