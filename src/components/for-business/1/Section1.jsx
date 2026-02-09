/* eslint-disable @next/next/no-img-element */
import { Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Section1 = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 74px 53px 101px',
      }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          width: '48%',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '18px',
            color: '#1F1D1D',
            marginBottom: '23px',
          }}
        >
          Solvnex Matching Platform
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '50px',
            color: '#0B9089',
            marginBottom: '28px',
          }}
        >
          The Most Deeply Rested Talent Marketplace By Machine Learning
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            color: '#212020',
            marginBottom: '45px',
          }}
        >
          Unlock the Power of Talent: This platform is a dynamic talent
          marketplace, bringing together skilled individuals and
          forward-thinking corporations for task-based collaboration.
        </Typography>
        {/* <Button
          href="/sign-up"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px 20px',
            gap: '10px',
            background: '#01B1A8 0% 0% no-repeat padding-box',
            color: '#fff',
            '&:hover': {
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              color: '#01b1a8',
            },
          }}
        >
          Hire Talent Now
          <ArrowForwardIcon />
        </Button> */}
      </Stack>
      <Stack sx={{ width: '50%', height: '510px' }}>
        <img src="/images/tableimage.png" alt="..." />
      </Stack>
    </Stack>
  );
};

export default Section1;
