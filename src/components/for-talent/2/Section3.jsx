import { Stack, Typography } from '@mui/material';
import { responsive } from '@/components/shared/responsive';

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

const Section3 = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'start',
        padding: { xs: '0 30px', md: '0 69px 0 76px' },
      }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          padding: { xs: '30px', md: '91px 118px 90px 84px' },
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
            fontSize: { xs: '28px', md: '38px' },
            color: '#01B1A8',
            marginBottom: '28px',
          }}
        >
          Simple Step to Get Hired
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            color: '#f7f7f7',
            marginBottom: '60px',
          }}
        >
          Unlocking opportunities at Solvnex is a breeze! Follow these simple
          steps to kickstart your journey: Sign up, engage in a friendly call
          with us, and voila — start working on projects that match your skills
          and preferences. Your next gig is just a few easy steps away
        </Typography>
        <Stack
          sx={{
            flexDirection: responsive.rowToCol,
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: { xs: '20px', md: '0' },
          }}
        >
          <Stack sx={{ ...ProcessDivStyle, width: { xs: '100%', md: '30%' } }}>
            <Typography sx={ProcessStepStyle}>1</Typography>
            <Typography sx={ProcessTitleStyle}>Sign Up for Free</Typography>
            <Typography sx={ProcessDescStyle}>
              Join Solvnex by filling in your work experiences, skills, job
              preferences, and showcasing your portfolio and sample works.
            </Typography>
          </Stack>
          <Stack sx={{ ...ProcessDivStyle, width: { xs: '100%', md: '30%' } }}>
            <Typography sx={ProcessStepStyle}>2</Typography>
            <Typography sx={ProcessTitleStyle}>Call from Us</Typography>
            <Typography sx={ProcessDescStyle}>
              Expect a call from us for a friendly discussion and interview to
              better understand your skills and aspirations.
            </Typography>
          </Stack>
          <Stack sx={{ ...ProcessDivStyle, width: { xs: '100%', md: '30%' } }}>
            <Typography sx={ProcessStepStyle}>3</Typography>
            <Typography sx={ProcessTitleStyle}>Job Matching</Typography>
            <Typography sx={ProcessDescStyle}>
              Experience immediate job matching! Receive project opportunities
              that align with your gig profile, and start working right away.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section3;
