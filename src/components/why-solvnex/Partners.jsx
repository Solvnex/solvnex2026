/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';

const Partners = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        padding: '73px 345px',
        background: '#F9F8F9',
      }}
    >
      <img
        src="/images/petronas.png"
        alt="logopetronas"
        width="128px"
        height="49px"
      />
      <img
        src="/images/tata-consultancy.png"
        alt="logotata"
        width="152px"
        height="61px"
      />
      <img src="/images/mdec.png" alt="logomdec" width="168px" height="35px" />
      <img src="/images/aws.png" alt="logoaws" width="222px" height="43px" />
    </Box>
  );
};

export default Partners;
