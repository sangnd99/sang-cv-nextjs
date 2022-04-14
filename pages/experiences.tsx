import type { NextPage } from 'next';

import Content from 'components/layout/Content';
import Heading from 'components/Heading';
import Box from '@mui/material/Box';

import Paragraph from 'components/Paragraph';
import Badge from 'components/Badge';
import { CVYear, CVName } from 'components/CV';

const Experiences: NextPage = () => {
  return (
    <Content>
      <Heading>Work</Heading>
      <Box sx={{ display: 'grid', gap: '10px' }}>
        <CVYear>March 2021 - April 2022</CVYear>
        <CVName value="(Intern & official staff)">
          USUM Software Co., Ltd
        </CVName>
        <Box sx={{ display: 'grid', gap: '5px' }}>
          <CVName primary value="Everplay">
            Project:
          </CVName>
          <Paragraph>
            A website can help every user booking sport field online, organizing
            tournaments and manage their sport team
          </Paragraph>
        </Box>
      </Box>
    </Content>
  );
};

export default Experiences;
