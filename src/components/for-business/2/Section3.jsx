import BusinessHiringProcess from '@/components/hiring-process';
import { Stack } from '@mui/material';

const Section3 = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'start',
        padding: { xs: '0 30px', md: '0 69px 0 76px' },
      }}
    >
      <BusinessHiringProcess />
    </Stack>
  );
};

export default Section3;
