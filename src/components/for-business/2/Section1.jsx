/* eslint-disable @next/next/no-img-element */
import { Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardOutlined';

const Section1 = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '56px 139px 100px 101px',
      }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          width: '50%',
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
            fontSize: '50px',
            color: '#0B9089',
            marginBottom: '28px',
            width: '70%',
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
      <Stack sx={{ width: '50%' }}>
        <img
          src="/images/forBusiness2Image.png"
          alt="..."
          width="100%"
          height="453px"
        />
      </Stack>
    </Stack>
  );
};

export default Section1;
