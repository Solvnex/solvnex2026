import { Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardOutlined';

const Section4 = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'start',
        gap: '15px',
        margin: '100px 101px 80px',
        padding: '46px 46px 31px 50px',
        background: '#01B1A8 0% 0% no-repeat padding-box',
        borderRadius: '10px',
      }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          gap: '15px',
        }}
      >
        <Typography sx={{ fontSize: '18px', color: '#fff' }}>
          Bridge the gap between independent talents and corporate projects.
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: '35px', color: '#fff' }}>
          We elevate the lifestyle of Gig Professionals with attractive benefits
          and support!
        </Typography>
      </Stack>
      {/* <Button
        href="/sign-up"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '15px 20px',
          gap: '20px',
          minWidth: 'max-content',
          background: '#FFFFFF 0% 0% no-repeat padding-box',
          boxShadow: '0px 3px 6px #FFFFFF00',
          borderRadius: '5px',
          color: '#01b1a8',

          '&:hover': {
            background: '#89CECA 0% 0% no-repeat padding-box',
            color: '#fff',
          },
        }}
      >
        Join Now
        <ArrowForwardIcon />
      </Button> */}
    </Stack>
  );
};

export default Section4;
