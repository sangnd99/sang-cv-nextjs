import type { NextPage } from 'next';
import { Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';

import Content from 'components/layout/Content';
import { randomId } from 'utils';

const Skills: NextPage = () => {
  return (
    <Content title="Skills">
      <Box
        sx={{
          display: 'grid',
          gap: '30px',
        }}
      >
        {listSkills.map(({ heading, childrens }) => (
          <Box key={`skills-${randomId()}`}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: '600',
                color: 'text.secondary',
                mb: '10px',
              }}
            >
              {heading}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                rowGap: '10px',
              }}
            >
              {childrens.map((item) => (
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontWeight: '500',
                  }}
                  variant="body2"
                  key={`skill-item-${randomId()}`}
                >
                  <CheckCircleIcon
                    color="primary"
                    sx={{ width: '20px', height: '20px' }}
                  />
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Content>
  );
};

export default Skills;

const listSkills = [
  {
    heading: 'Programing languages',
    childrens: ['Javascript', 'Typescript', 'HTML/CSS', 'SASS'],
  },
  {
    heading: 'Frontend frameworks',
    childrens: ['Reactjs', 'Nextjs', 'Tailwindcss'],
  },
  {
    heading: 'Version control',
    childrens: ['Git (Github, Gitlab)'],
  },
  {
    heading: 'Text editor & Tools',
    childrens: ['Visual studio code', 'Neovim', 'Figma'],
  },
];
