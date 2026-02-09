/* eslint-disable @next/next/no-img-element */
import { Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const buttonData = [
  {
    Link: '/career-guides/career-development',
    Image: '/icon/rocketIcon.png',
    Title: 'Career Development',
  },
  {
    Link: '/career-guides/pay-and-salary-discovery',
    Image: '/icon/handCoinIcon.png',
    Title: 'Pay & Salary Discovery',
  },
  {
    Link: '/career-guides/resume-and-cover-letter',
    Image: '/icon/resumeIcon.png',
    Title: 'Resume & Cover Letter',
  },
  {
    Link: '/career-guides/interview-preparation',
    Image: '/icon/scrollIcon.png',
    Title: 'Interview Preparation',
  },
];

const NavigationButton = () => {
  return (
    <Grid container spacing="30px" sx={{ margin: '0 38px 60px' }}>
      {buttonData.map((button, index) => (
        <Grid item key={index}>
          <Button
            href={button.Link}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'start',
              width: '540px',
              height: '268px',
              padding: '84px 60px 64px 85px',
              gap: '88px',
              background: '#F7F7F7 0% 0% no-repeat padding-box',
              borderRadius: '10px',
            }}
          >
            <img
              src={button.Image}
              alt={button.Title}
              width="100px"
              height="100px"
              style={{ marginRight: '8px' }}
            />
            <Stack
              sx={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'start',
                gap: '30px',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '32px',
                  color: '#212020',
                  textAlign: 'left',
                }}
              >
                {button.Title}
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#504c4c',
                }}
              >
                Read More
                <ArrowForwardIcon sx={{ color: '#01b1a8' }} />
              </Typography>
            </Stack>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default NavigationButton;
