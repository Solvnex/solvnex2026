import { Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardOutlined';

const Section6 = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'start',
        gap: '15px',
        margin: '0 101px 80px',
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
          Empowering businesses with strategic talent solutions.
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: '35px', color: '#fff' }}>
          SOLVNEX able to connect you with the right talents tailored to your
          projects with matching accuracy up to 84%.
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
        Register Now
        <ArrowForwardIcon />
      </Button> */}
    </Stack>
  );
};

export default Section6;
