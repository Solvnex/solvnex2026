import { Stack, Typography } from '@mui/material';
import React from 'react';

const ProcessDivStyle = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'start',
  width: '30%',
};

const ProcessStepStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  width: '66px',
  height: '66px',
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  fontWeight: 700,
  fontSize: '30px',
  color: '3212020',
  marginBottom: '28px',
};

const ProcessTitleStyle = {
  fontWeight: 700,
  fontSize: '25px',
  color: '#F7F7F7',
  marginBottom: '20px',
};

const ProcessDescStyle = {
  fontWeight: 500,
  fontSize: '18px',
  color: '#f7f7f7',
};

const BusinessHiringProcess = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        padding: '91px 118px 90px 84px',
        marginLeft: '3.5px',
        background: '#3B3838 0% 0% no-repeat padding-box',
        borderRadius: '10px',
        width: '100%',
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '18px',
          color: '#F7F7F7',
          marginBottom: '18px',
        }}
      >
        PROCESS
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '38px',
          color: '#01B1A8',
          marginBottom: '28px',
        }}
      >
        We Made Hiring Easy
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '18px',
          color: '#f7f7f7',
          marginBottom: '60px',
        }}
      >
        Finding the right talent for your project has never been easier. At
        Solvnex Digital, we&apos;ve streamlined the hiring process to make it as
        straightforward as possible.
      </Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'start',
        }}
      >
        <Stack sx={ProcessDivStyle}>
          <Typography sx={ProcessStepStyle}>1</Typography>
          <Typography sx={ProcessTitleStyle}>Register</Typography>
          <Typography sx={ProcessDescStyle}>
            Kickstart your journey by registering with Solvnex Digital. Tell us
            about your project, your vision, and your requirements. This is your
            first step toward realizing your digital goals.
          </Typography>
        </Stack>
        <Stack sx={ProcessDivStyle}>
          <Typography sx={ProcessStepStyle}>2</Typography>
          <Typography sx={ProcessTitleStyle}>
            Discussion and Business
          </Typography>
          <Typography sx={ProcessDescStyle}>
            Once you&apos;re registered, we&apos;ll reach out to you. Our
            experienced team will engage in a comprehensive discussion to
            understand your business requirements. We believe in getting to know
            your project inside and out to ensure a perfect match.
          </Typography>
        </Stack>
        <Stack sx={ProcessDivStyle}>
          <Typography sx={ProcessStepStyle}>3</Typography>
          <Typography sx={ProcessTitleStyle}>ML Talent Matching</Typography>
          <Typography sx={ProcessDescStyle}>
            This is where the magic happens. Our Machine Learning (ML)
            algorithms swing into action. They analyze your project needs and
            compare them with our database of talented professionals. Within no
            time, we&apos;ll present you with the ideal candidates to choose
            from.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BusinessHiringProcess;
