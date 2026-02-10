import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { responsive } from '@/components/shared/responsive';

const Investor = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        padding: { xs: '0 30px 40px', md: '0px 101px 60px 103px' },
      }}
    >
      <Typography
        sx={{
          fontSize: '16px',
          textAlign: 'left',
          lineHeight: '30px',
          textTransform: 'uppercase',
          color: '#212020',
          paddingBottom: '18.5px',
          marginBottom: '14.5px',
          borderBottom: '1px solid #01b1a8',
          width: { xs: '100%', md: '40%' },
        }}
      >
        Investor
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: responsive.rowToCol,
          justifyContent: 'space-between',
          alignItems: 'start',
          gap: { xs: '24px', md: '12%' },
        }}
      >
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: { xs: '32px', md: '50px' },
            textAlign: 'left',
            lineHeight: '60px',
            color: '#212020',
            width: { xs: '100%', md: '40%' },
          }}
        >
          We are committed to transparency
        </Typography>
        <Stack sx={{ flexDirection: 'column', gap: '37px', width: { xs: '100%', md: '48%' } }}>
          <Typography
            sx={{
              fontSize: '18px',
              textAlign: 'left',
              lineHeight: '30px',
              color: '#212020',
            }}
          >
            SOLVNEX is a brainchild product of the Social Enterprise Education
            Lab (SEEd.Lab) Program, an initiative powered by PETRONAS & Tata
            Consultancy Services (TCS). e-ROTA is a product of collaborative
            effort between SOLVNEX and industry leaders.
          </Typography>
          <Image src="/images/SeedLab.png" alt="seedlabimage" width={325} height={87} style={{ width: '100%', height: 'auto' }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Investor;
