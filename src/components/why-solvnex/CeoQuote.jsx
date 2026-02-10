import { Box, Divider, Stack, Typography } from '@mui/material';
import { responsive } from '@/components/shared/responsive';

const textStyle = {
  fontWeight: '300',
  fontSize: '20px',
  textAlign: 'left',
  lineHeight: '50px',
  color: 'white',
};

const CeoQuote = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: '30px', md: '60px 101px' },
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          padding: { xs: '24px', md: '46px 50px' },
          background: '#01b1a8',
          borderRadius: '10px',
        }}
      >
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: { xs: '28px', md: '40px' },
            textAlign: 'left',
            lineHeight: '50px',
            color: 'white',
            marginBottom: '35px',
          }}
        >
          “We are working with corporations to deconstruct and disrupt
          traditional hiring mechanism while taking into account the security
          and risk factors, and adhering with the governing policy in place.”
        </Typography>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: responsive.rowToCol,
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: { xs: '16px', md: 0 },
            width: '100%',
          }}
        >
          <Divider
            sx={{
              border: '1px solid white',
              marginRight: '27.5px',
              width: { xs: '100%', md: '65.51%' },
            }}
          />
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
            }}
          >
            <Typography sx={{ ...textStyle, fontWeight: '500' }}>
              Qadir Hairi
            </Typography>
            <Typography sx={textStyle}>
              Chief Executive Officer, SOLVNEX
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CeoQuote;
