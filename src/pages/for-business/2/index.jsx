import Section1 from '@/components/for-business/2/Section1';
import Section2 from '@/components/for-business/2/Section2';
import Section3 from '@/components/for-business/2/Section3';
import Section4 from '@/components/for-business/2/Section4';
import Section5 from '@/components/for-business/2/Section5';
import MainLayout from '@/components/layout/MainLayout';
import { Box } from '@mui/material';
import React from 'react';

const ForBusiness2 = () => {
  return (
    <MainLayout>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', background: '#fcfcfc' }}
      >
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </Box>
    </MainLayout>
  );
};

export default ForBusiness2;
