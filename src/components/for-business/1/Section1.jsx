import { Button, Stack, Typography, Box } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Section1 = () => {
  return (
    <Stack
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: { xs: '20px', md: '0' },
        padding: { xs: '20px 30px', md: '20px 74px 53px 101px' },
      }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          width: { xs: '100%', md: '48%' },
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
      <Stack sx={{ width: { xs: '100%', md: '50%' }, height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ position: 'relative', width: '100%', maxWidth: { md: '690px' }, borderRadius: '10px', overflow: 'hidden' }}>
          <Image src="/images/tableimage.png" alt="table" width={690} height={510} style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Section1;
