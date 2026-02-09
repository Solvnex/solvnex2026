import { Box, Typography } from '@mui/material';
import TestimonyCard from '../testimony';

const HomeSection8 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        padding: { xs: '30px', md: '0 79px 100px 101px' },
        background: '#fff',
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: '45px', color: '#212020' }}>
        What people say about Solvnex
      </Typography>
      <TestimonyCard />
    </Box>
  );
};

export default HomeSection8;
