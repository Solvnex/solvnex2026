import { Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardOutlined';
import Image from 'next/image';
import { responsive } from '@/components/shared/responsive';

const Section1 = () => {
  return (
    <Stack
      sx={{
        flexDirection: responsive.rowToCol,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: { xs: '24px', md: '0' },
        padding: { xs: '30px', md: '56px 139px 100px 101px' },
      }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          width: { xs: '100%', md: '50%' },
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '18px',
            color: '#1f1d1d',
            marginBottom: '23px',
          }}
        >
          Recruit Project-Based Talents
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: '32px', md: '50px' },
            color: '#0B9089',
            marginBottom: '28px',
            width: { xs: '100%', md: '70%' },
          }}
        >
          Unlock Digital Success With Solvnex Digital
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            color: '#212020',
            marginBottom: '45px',
          }}
        >
          Are you ready to take your digital products to the next level?
          <br />
          We&apos;ve got you covered!
          <br />
          <br />
          At Solvnex Digital, we&apos;re your partner in innovation. Our expert
          team of developers, designers, and project managers is dedicated to
          turning your ideas into cutting-edge digital products that drive
          success.
        </Typography>
        {/* <Button
          href="/sign-up"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px 20px',
            gap: '20px',
            background: '#01B1A8 0% 0% no-repeat padding-box',
            boxShadow: '0px 3px 6px #FFFFFF00',
            borderRadius: '5px',
            color: '#fff',
            '&:hover': {
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              color: '#01b1a8',
            },
          }}
        >
          Find Talent Now
          <ArrowForwardIcon />
        </Button> */}
      </Stack>
      <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
        <Image
          src="/images/forBusiness2Image.png"
          alt="for-business-2"
          width={800}
          height={453}
          style={{ width: '100%', height: 'auto' }}
        />
      </Stack>
    </Stack>
  );
};

export default Section1;
