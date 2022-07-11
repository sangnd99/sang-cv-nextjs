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
        {listSkills.map(({ heading, children }) => (
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
              {children.map((item) => (
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
    children: ['Javascript', 'Typescript', 'HTML5/CSS3', 'SASS'],
  },
  {
    heading: 'Frontend frameworks & libraries',
    children: ['Reactjs', 'Nextjs', 'Tailwindcss'],
  },
  {
    heading: 'Source control',
    children: ['Git (Github, Gitlab)'],
  },
  {
    heading: 'Text editor & Tools',
    children: ['Visual studio code', 'Neovim', 'Figma'],
  },
];
