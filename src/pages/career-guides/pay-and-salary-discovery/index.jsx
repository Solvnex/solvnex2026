import MainLayout from '@/components/layout/MainLayout';
import {
  Box,
  Breadcrumbs,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/router';
import ArticleDivisions from '@/components/career-guides/ArticleDivisions';
import { responsive } from '@/components/shared/responsive';

const PayAndSalaryDiscovery = () => {
  const router = useRouter();
  const targetType = 'Pay & Salary Discoveries';

  const handleGoBack = () => {
    router.back();
  };

  const breadcrumbs = [
    <Link
      key="1"
      href="/career-guides"
      sx={{
        fontWeight: 500,
        fontSize: '16px',
        color: '#504C4C',
        textDecoration: 'none',
      }}
    >
      Career Guides
    </Link>,
    <Typography key="2" sx={{ fontSize: '16px', color: '#504C4C' }}>
      Pay & Salary Discoveries
    </Typography>,
  ];

  return (
    <MainLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '30px', md: '30px 128px 103px 72px' },
        }}
      >
        <IconButton
          onClick={handleGoBack}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'start',
            width: 'max-content',
            height: 'max-content',
            marginBottom: '16px',
          }}
        >
          <ArrowBackIcon
            sx={{ width: '20px', height: '20px', color: '#01b1a8' }}
          />
        </IconButton>
        <Stack
          sx={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
            marginLeft: { xs: 0, md: '55px' },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: responsive.titleXL,
              color: '#212020',
              marginBottom: '20px',
            }}
          >
            Pay & Salary Discoveries
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '20px' },
              color: '#212020',
              marginBottom: '40px',
              width: { xs: '100%', md: '90%' },
            }}
          >
            This exploration helps you gain insights into average salary ranges,
            factors that influence pay, and opportunities for negotiation or
            career advancement.
          </Typography>
          <Breadcrumbs
            sx={{ marginLeft: { xs: 0, md: '23px' }, marginBottom: '40px' }}
            separator={<NextIcon />}
          >
            {breadcrumbs}
          </Breadcrumbs>
          <ArticleDivisions targetType={targetType} />
        </Stack>
      </Box>
    </MainLayout>
  );
};

export default PayAndSalaryDiscovery;
