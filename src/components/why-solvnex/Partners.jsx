import { Box } from '@mui/material';
import Image from 'next/image';

const Partners = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '30px',
        padding: { xs: '30px', md: '73px 345px' },
        background: '#F9F8F9',
      }}
    >
      <Image src="/images/petronas.png" alt="logopetronas" width={128} height={49} />
      <Image src="/images/tata-consultancy.png" alt="logotata" width={152} height={61} />
      <Image src="/images/mdec.png" alt="logomdec" width={168} height={35} />
      <Image src="/images/aws.png" alt="logoaws" width={222} height={43} />
    </Box>
  );
};

export default Partners;
