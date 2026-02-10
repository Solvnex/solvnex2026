import MainLayout from '@/components/layout/MainLayout';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import NavigationButton from '@/components/career-guides/NavigationButton';
import ArticleList from '@/components/career-guides/ArticleList';
import { responsive } from '@/components/shared/responsive';

const CareerGuides = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <MainLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '30px', md: '30px 127px 100px 72px' },
          background: '#fcfcfc',
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
            Career Guides
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '20px' },
              color: '#212020',
              marginBottom: '40px',
              width: { xs: '100%', md: '68%' },
            }}
          >
            Let us help you define a career path, write a resume & cover letter,
            ace your interviews, and land a dream job with a company you love.
          </Typography>
          <NavigationButton />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: responsive.titleLg,
              color: '#212020',
              marginBottom: '0px',
            }}
          >
            Browse All Career Guides
          </Typography>
          <ArticleList />
        </Stack>
      </Box>
    </MainLayout>
  );
};

export default CareerGuides;
