import TestimonyCard from '@/components/testimony';
import { Stack, Typography } from '@mui/material';

const Section7 = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        padding: { xs: '0 30px 69px', md: '0 79px 69px 101px' },
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: '45px', color: '#212020' }}>
        What people say about Solvnex
      </Typography>
      <TestimonyCard />
    </Stack>
  );
};

export default Section7;
