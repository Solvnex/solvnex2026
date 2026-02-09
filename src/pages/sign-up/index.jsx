import { Box, Button, Link, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MainLayout from '@/components/layout/MainLayout';
import {
  BtnDescStyle,
  BtnDivStyle,
  BtnIconStyle,
  BtnTitleStyle,
  CheckIconStyle,
  OptionBtnStyle,
} from '@/components/sign-up/Signup.Styles';

const SignUp = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          padding: { xs: '30px', md: '60px 163px 100px 127px' },
          background: '#ededed',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: '50px', md: '80px' },
            color: '#212020',
            marginBottom: '40px',
          }}
        >
          Choose Your Demand
        </Typography>
        <Stack
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'flex-start' },
            alignItems: 'center',
            alignSelf: 'center',
            gap: '50px',
            marginBottom: '30px',
          }}
        >
          <Button href="/sign-up/form?role=taskowner" sx={OptionBtnStyle}>
            <CheckCircleIcon sx={CheckIconStyle} />
            <Stack sx={BtnDivStyle}>
              <SearchIcon sx={BtnIconStyle} />
              <Typography sx={BtnTitleStyle}>Find Your Talents</Typography>
            </Stack>
            <Stack sx={{ flexDirection: 'row', paddingLeft: { md: '250px' } }}>
              <Typography sx={BtnDescStyle}>
                Get Talents
                <ArrowForwardIcon sx={{ color: '#01b1a8' }} />
              </Typography>
            </Stack>
          </Button>
          <Button href="/sign-up/form?role=freelancer" sx={OptionBtnStyle}>
            <CheckCircleIcon sx={CheckIconStyle} />
            <Stack sx={BtnDivStyle}>
              <WorkIcon sx={BtnIconStyle} />
              <Typography sx={BtnTitleStyle}>Become a Freelancer</Typography>
            </Stack>
            <Stack sx={{ flexDirection: 'row', paddingLeft: { md: '250px' } }}>
              <Typography sx={BtnDescStyle}>
                Explore Work
                <ArrowForwardIcon sx={{ color: '#01b1a8' }} />
              </Typography>
            </Stack>
          </Button>
        </Stack>
        <Typography
          sx={{
            alignSelf: 'center',
            fontWeight: 500,
            fontSize: '18px',
            color: '#504C4C',
          }}
        >
          Already have an account?
          <Link href="/sign-in" sx={{ color: '#01b1a8', marginLeft: '10px' }}>
            Sign In
          </Link>
        </Typography>
      </Box>
    </MainLayout>
  );
};

export default SignUp;
