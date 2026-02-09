import Section1 from '@/components/for-business/1/Section1';
import Section2 from '@/components/for-business/1/Section2';
import Section3 from '@/components/for-business/1/Section3';
import Section4 from '@/components/for-business/1/Section4';
import Section5 from '@/components/for-business/1/Section5';
import Section6 from '@/components/for-business/1/Section6';
import Section7 from '@/components/for-business/1/Section7';
import MainLayout from '@/components/layout/MainLayout';
import { Box } from '@mui/material';
import React from 'react';

const ForBusiness1 = () => {
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
        <Section6 />
        <Section7 />
      </Box>
    </MainLayout>
  );
};

export default ForBusiness1;
