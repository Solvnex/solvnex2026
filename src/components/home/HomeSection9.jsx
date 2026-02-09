import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeSection9 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: { xs: '0 30px 30px', md: '0 101px 100px' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: '20px', md: '100px 0' },
          gap: '42px',
          background: '#F7D102 0% 0% no-repeat padding-box',
          borderRadius: '10px',
          width: '100%',
        }}
      >
        <Typography
          sx={{ fontWeight: 700, fontSize: '55px', color: '#212020' }}
        >
          It&apos;s Free! Ready to get matched?
        </Typography>
        <Button
          href="/sign-up"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 'max-content',
            gap: '10px',
            background: '#01B1A8 0% 0% no-repeat padding-box',
            boxShadow: '0px 3px 6px #FFFFFF00',
            borderRadius: '5px',
            color: '#fff',

            '&:hover': {
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              color: '#01b1a8',
            },
          }}
        >
          Sign Up Now
          <ArrowForwardIcon />
        </Button>
      </Stack>
    </Box>
  );
};

export default HomeSection9;
