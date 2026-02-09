/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const StackStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const StatStyle = {
  color: '#212020',
  fontWeight: '700',
  fontSize: '60px',
};

const StatName = {
  fontSize: '20px',
  fontWeight: '500',
  color: '#504C4C',
};

const HomeSection2 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#fcfcfc',
        padding: { xs: '0 30px', md: '0 333.75px 115px 355.75px' },
        width: '100%',
      }}
    >
      <Typography
        sx={{
          fontWeight: '500',
          fontSize: '18px',
          color: '#504C4C',
          marginBottom: '50px',
        }}
      >
        Trusted Nationwide
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          marginBottom: { xs: '30px', md: '115px' },
        }}
      >
        <img
          src="/images/petronas.png"
          alt="logopetronas"
          width="128px"
          height="49px"
        />
        <img
          src="/images/tata-consultancy.png"
          alt="logotata"
          width="152px"
          height="61px"
        />
        <img
          src="/images/mdec.png"
          alt="logomdec"
          width="168px"
          height="35px"
        />
        <img src="/images/aws.png" alt="logoaws" width="222px" height="43px" />
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: '30px', md: '146px' },
        }}
      >
        <Stack sx={StackStyle}>
          <Typography sx={StatStyle}>550+</Typography>
          <Typography sx={StatName}>Freelancers</Typography>
        </Stack>
        <Stack sx={StackStyle}>
          <Typography variant="h1" sx={StatStyle}>
            20+
          </Typography>
          <Typography sx={StatName}>Companies</Typography>
        </Stack>
        <Stack sx={StackStyle}>
          <Typography variant="h1" sx={StatStyle}>
            250+
          </Typography>
          <Typography sx={StatName}>Job Posting</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeSection2;
