/* eslint-disable @next/next/no-img-element */
import { Box, Stack, Typography, styled } from '@mui/material';

const TitleStyle = { fontWeight: 600, fontSize: '28px', color: '#1F1D1D' };

const CustomUl = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  margin: '20px 0 0 15px',
  padding: '0',
  gap: '20px',
});

const CustomLi = styled('li')({
  fontWeight: 500,
  fontSize: '18px',
  color: '#1F1D1D',
});

const HomeSection4 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: { xs: '0 30px 30px', md: '0 145px 80px' },
        background: '#fcfcfc',
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '20px', md: '38px' },
          color: '#1F1D1D',
        }}
      >
        Everything is easy with Solvnex
      </Typography>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'flex-start',
          alignItems: 'start',
          gap: { xs: '30px', md: '82px' },
        }}
      >
        <Stack sx={{ flexDirection: 'column', width: '30%' }}>
          <img
            src="/icon/network.png"
            alt="..."
            width="46px"
            height="46px"
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>Simplified Process</Typography>
          <CustomUl>
            <CustomLi>
              Allows you to customize your job postings to your specific
              governance compliance requirements
            </CustomLi>
            <CustomLi>
              Ensure you only receive proposals from freelancers who meet your
              criteria.
            </CustomLi>
          </CustomUl>
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: '30%' }}>
          <img
            src="/icon/arrowinsquare.png"
            alt="..."
            width="46px"
            height="46px"
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>All In One Platform</Typography>
          <CustomUl>
            <CustomLi>
              Integrated collaboration tools, such as project management, time
              tracking, and communication tools.
            </CustomLi>
            <CustomLi>
              Facilitate seamless collaboration between freelancers and your
              business.
            </CustomLi>
          </CustomUl>
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: '30%' }}>
          <img
            src="/icon/chainIcon.png"
            alt="..."
            width="46px"
            height="46px"
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>Matching System</Typography>
          <CustomUl>
            <CustomLi>
              We analyze job postings and freelancer profiles.
            </CustomLi>
            <CustomLi>
              We automate suggest matches based on skills, experience, and other
              relevant factors.
            </CustomLi>
          </CustomUl>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeSection4;
