import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeSection5 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: '0 30px 30px', md: '0 101px 80px' },
        background: '#fff',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'start',
          background: '#01B1A8 0% 0% no-repeat padding-box',
          borderRadius: '10px',
          padding: { xs: '20px', md: '46px 46px 31px 50px' },
          gap: { xs: '20px', md: '75px' },
          width: '100%',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <Typography sx={{ fontSize: '18px', color: '#fff' }}>
            Connecting companies with the right expertise.
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: '35px', color: '#fff' }}>
            Our proprietary matching system helps to connect talent with
            companies in less than 24 hours!
          </Typography>
        </Stack>
        {/* <Button
          href="/sign-up"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 'max-content',
            background: '#fff 0% 0% no-repeat padding-box',
            boxShadow: '0px 3px 6px #FFFFFF00',
            borderRadius: '5px',
            padding: '15px 20px',
            gap: '20px',
            fontWeight: 600,
            fontSize: '18px',
            color: '#01B1A8',

            '&:hover': {
              background: '#89CECA 0% 0% no-repeat padding-box',
              boxShadow: '0px 3px 6px #FFFFFF00',
              color: '#fff',
            },
          }}
        >
          Sign Up Now
          <ArrowForwardIcon />
        </Button> */}
      </Stack>
    </Box>
  );
};

export default HomeSection5;
