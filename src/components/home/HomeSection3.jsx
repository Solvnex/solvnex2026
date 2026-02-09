import { Box, Typography, Stack, Link } from '@mui/material';
import React from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForwardOutlined';

const ServiceTitle = {
  fontWeight: '600',
  fontSize: '18px',
  color: '#1F1D1D',
  marginBottom: { xs: '10px', md: '22px' },
};

const ServiceSubtitle = {
  fontWeight: '600',
  fontSize: { xs: '30px', md: '40px' },
  color: '#1F1D1D',
  marginBottom: { xs: '10px', md: '50px' },
};

const ServiceDesc = {
  fontSize: '18px',
  color: '#1F1D1D',
  marginBottom: { xs: '10px', md: '42px' },
};

const GetstartBtn = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontWeight: 500,
  fontSize: '18px',
  color: '#504C4C',
  textDecoration: 'none',
  gap: '10px',
  cursor: 'pointer',
};

const HomeSection3 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '20px', md: '40px' },
        padding: { xs: '0 30px 30px', md: '0 80px 80px' },
        background: '#fcfcfc',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: '38px', color: '#1F1D1D' }}>
        Our Services
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          height: 'auto',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            background: '#89CECA',
            width: { md: '50%' },
            borderRadius: { xs: '5px 5px 0 0', md: '5px 0 0 5px' },
            padding: '44px 20px',
          }}
        >
          <Typography sx={ServiceTitle}>Solvnex Matching Platform</Typography>
          <Typography sx={ServiceSubtitle}>Talent Matching Platform</Typography>
          <Typography sx={ServiceDesc}>
            Unlock the Power of Talent: This platform is a dynamic talent
            marketplace, bringing together skilled individuals and
            forward-thinking corporations for task-based collaboration.
          </Typography>
          <Link sx={GetstartBtn}>
            Get Started
            <ArrowForwardIcon sx={{ color: '#01B1A8' }} />
          </Link>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            background: '#F8EECC',
            width: { md: '50%' },
            borderRadius: { xs: '0 0 5px 5px', md: '0 5px 5px 0' },
            padding: '44px 20px',
          }}
        >
          <Typography sx={ServiceTitle}>
            Recruit Project-Based Talents
          </Typography>
          <Typography sx={ServiceSubtitle}>
            Business Process Outsourcing
          </Typography>
          <Typography sx={ServiceDesc}>
            Efficiency in Every Project: With Solvnex, we handle project
            management. Our experienced talent developers will ensure your
            projects thrive, unlocking higher productivity levels.
          </Typography>
          <Link sx={GetstartBtn}>
            Get Started
            <ArrowForwardIcon sx={{ color: '#01B1A8' }} />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeSection3;
