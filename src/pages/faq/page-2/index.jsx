import MainLayout from '@/components/layout/MainLayout';
import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import NextIcon from '@mui/icons-material/NavigateNext';
import { CustomTextfield } from '@/components/custom-textfield';
import SquareCheckbox from '@/components/custom-checkbox/SquareCheckbox';
import LeaveAQuestion from '@/components/faq/LeaveAQuestion';

const breadcrumbs = [
  <Link
    key="1"
    href="/"
    sx={{
      fontWeight: 500,
      fontSize: '16px',
      color: '#504C4C',
      textDecoration: 'none',
    }}
  >
    Home
  </Link>,
  <Link
    key="2"
    href="/faq/page-1"
    sx={{
      fontWeight: 500,
      fontSize: '16px',
      color: '#504C4C',
      textDecoration: 'none',
    }}
  >
    FAQ
  </Link>,
  <Typography key="3" sx={{ fontSize: '16px', color: '#504C4C' }}>
    Question
  </Typography>,
];

const SendQuestion = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          padding: '14px 101px 100px',
        }}
      >
        <Breadcrumbs sx={{ marginBottom: '30px' }} separator={<NextIcon />}>
          {breadcrumbs}
        </Breadcrumbs>
        <LeaveAQuestion />
      </Box>
    </MainLayout>
  );
};

export default SendQuestion;
