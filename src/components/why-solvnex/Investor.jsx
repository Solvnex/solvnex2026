/* eslint-disable @next/next/no-img-element */
import { Box, Stack, Typography } from '@mui/material';

const Investor = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        padding: '0px 101px 60px 103px',
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
          width: '40%',
        }}
      >
        Investor
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'start',
          gap: '12%',
        }}
      >
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '50px',
            textAlign: 'left',
            lineHeight: '60px',
            color: '#212020',
            width: '40%',
          }}
        >
          We are committed to transparency
        </Typography>
        <Stack sx={{ flexDirection: 'column', gap: '37px', width: '48%' }}>
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
          <img
            src="/images/SeedLab.png"
            alt="seedlabimage"
            width="325px"
            height="87px"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Investor;
