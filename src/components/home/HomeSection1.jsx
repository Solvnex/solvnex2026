/* eslint-disable @next/next/no-img-element */
import { Box, Stack, Typography, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/DoneOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardOutlined';

const smallText = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontWeight: 500,
  fontSize: '14px',
  color: '#212020',
  gap: '6px',
};

const checkIconStyle = {
  color: '#0B9089',
  fontSize: '18px',
};

const HomeSection1 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#fcfcfc',
        padding: { xs: '10px 30px', md: '0 30px 22px 101px' },
        width: '100%',
      }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          alignItems: 'start',
          width: { md: '48%' },
        }}
      >
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: { xs: '35px', md: '50px' },
            color: '#0B9089',
            marginBottom: { xs: '14px', md: '28px' },
          }}
        >
          Turning Projects Into Productivity Powerhouses
        </Typography>
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '18px',
            color: '#212020',
            lineHeight: '30px',
            marginBottom: { xs: '22.5px', md: '45px' },
          }}
        >
          Solvnex: Redefining Project Excellence. Unleash your projects&apos;
          full potential with our dynamic talent marketplace—a hub for seamless
          collaboration between skilled individuals and visionary corporations.
          Elevate your projects, redefine productivity.
        </Typography>
        {/* <Button
          href="/sign-up"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            padding: '15px 20px',
            background: '#01B1A8 0% 0% no-repeat padding-box',
            boxShadow: '0px 3px 6px #FFFFFF00',
            borderRadius: '5px',
            color: '#fff',
            marginBottom: '20px',
            '&:hover': {
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              color: '#01b1a8',
            },
          }}
        >
          Join Us Now
          <ArrowForwardIcon />
        </Button> */}
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '10px',
            width: '100%',
          }}
        >
          <Typography sx={smallText}>
            <CheckIcon sx={checkIconStyle} />
            FREE
          </Typography>
          <Typography sx={smallText}>
            <CheckIcon sx={checkIconStyle} />
            Instant set-up
          </Typography>
          <Typography sx={smallText}>
            <CheckIcon sx={checkIconStyle} />
            24 hours job match
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ display: { xs: 'none', md: 'flex' }, width: '52%' }}>
        <img src="/images/imageSection1.png" alt="..." />
      </Stack>
    </Box>
  );
};

export default HomeSection1;
