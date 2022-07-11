import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import Content from 'components/layout/Content';
import Heading from 'components/Heading';

import Paragraph from 'components/Paragraph';
import Badge from 'components/Badge';
import { CVYear, CVName } from 'components/CV';
import { randomId } from 'utils';

const Experiences: NextPage = () => {
  return (
    <Content title="Experiences">
      <Heading>Work</Heading>
      <Box sx={{ display: 'grid', gap: '10px' }}>
        <CVYear>March 2021 - July 2022</CVYear>
        <CVName value="(Intern & official staff)">
          USUM Software Co., Ltd
        </CVName>
        <Box display="grid" gap="30px">
          {listProjects.map(
            ({
              name,
              primaryColor,
              icon,
              width,
              height,
              description,
              responsibility,
              accomplishment,
              technologies,
            }) => (
              <Box
                sx={{ display: 'grid', gap: '10px' }}
                key={`${name}-${randomId()}`}
              >
                <CVName
                  primary
                  value={name}
                  Icon={
                    <Image
                      src={`/assets/svg/projects/${icon}.svg`}
                      width={width || 20}
                      height={height || 20}
                      alt="everplay"
                    />
                  }
                  color={primaryColor}
                >
                  Project:
                </CVName>
                <Box marginBottom="10px">
                  <Paragraph>{description}</Paragraph>
                </Box>

                <Typography variant="body2">
                  <Badge>Responsibility</Badge> {responsibility}
                </Typography>
                <Typography variant="body2">
                  <Badge>Accomplishment</Badge>
                  {accomplishment}
                </Typography>
                <Typography variant="body2">
                  <Badge>Technologies</Badge> {technologies}
                </Typography>
              </Box>
            ),
          )}
        </Box>
      </Box>
    </Content>
  );
};

export default Experiences;

const listProjects = [
  {
    name: 'Everplay',
    primaryColor: '#D80B0C',
    icon: 'everplay',
    description:
      'A website can help user book sport field online, organize tournaments and manage their sport team.',
    responsibility: 'Make admin website in reactjs.',
    accomplishment:
      'Learn how to structure folder in react project and improve reactjs coding skill.',
    technologies: 'Reactjs, material ui, tailwindcss,apollo-graphql.',
  },
  {
    name: 'Reality estate',
    primaryColor: '#AC2C2C',
    icon: 'reality-estate',
    description:
      'A website can help user buy or rent a house, apartment...etc. Also, broker can sell their real estate by posting a real estate news which can be searched by user.',
    responsibility:
      'Refactore admin website, make user website and connect api in nextjs.',
    accomplishment:
      'Improve reactjs coding skill, learn nextjs (reactjs framework), connect api using apollo-graphql, learn redux and redux-saga.',
    technologies: 'Reactjs, Nextjs, tailwindcss, headless ui, apollo-graphql.',
  },
  {
    name: 'Ktv app',
    primaryColor: '#36C4FF',
    icon: 'ktv-app',
    description:
      'A website for manage ktv room and customer booking information.',
    responsibility: 'Refactore admin website, manager website and fix bug.',
    accomplishment: 'Improve analytics and problem solving skills.',
    technologies: 'Reactjs, tailwindcss, material ui, apollo-graphql.',
  },
  {
    name: 'TuyendungVn',
    primaryColor: '#4A2C72',
    width: 100,
    height: 20,
    icon: 'tuyendung',
    description:
      'A website help user find their suitable job and help employers find candidates.',
    responsibility: 'Make user and employer website.',
    accomplishment: 'Improve Nextjs skill.',
    technologies: 'Nextjs, tailwindcss, headless ui, apollo-graphql.',
  },
  {
    name: 'Kingify',
    primaryColor: '#33CCCC',
    width: 20,
    height: 22,
    icon: 'kingify',
    description:
      'An ecommerce website for selling and buying products, user can also design their own products',
    responsibility: 'Refactor user website and add new feture to admin website',
    accomplishment: 'Improve Reactjs and Nextjs skill.',
    technologies: 'Reactjs ,Nextjs, tailwindcss, headless ui, apollo-graphql.',
  },
];
