import MainLayout from '@/components/layout/MainLayout';
import CeoQuote from '@/components/why-solvnex/CeoQuote';
import Gallery from '@/components/why-solvnex/Gallery';
import Investor from '@/components/why-solvnex/Investor';
import Partners from '@/components/why-solvnex/Partners';
import WhoWeAre from '@/components/why-solvnex/WhoWeAre';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { responsive } from '@/components/shared/responsive';

const WhySolvnex = () => {
  return (
    <MainLayout>
      <Box sx={{ background: '#fcfcfc' }}>
        <Stack
          sx={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
            background: '#FCF8EA',
            padding: { xs: '40px 30px', md: '118px 216px 48px 52px' },
            gap: '20px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: '32px', md: '50px' },
              color: '#212020',
            }}
          >
            “We unlocking the gig workers for businesses.”
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: '18px', md: '20px' },
              color: '#212020',
            }}
          >
            Here where it all started
          </Typography>
        </Stack>
        <WhoWeAre />
        <Gallery />
        <CeoQuote />
        <Investor />
        <Partners />
      </Box>
    </MainLayout>
  );
};

export default WhySolvnex;
