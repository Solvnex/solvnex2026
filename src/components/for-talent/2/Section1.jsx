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
          width: '55%',
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
          }}
        >
          Crafting Excellence, <br /> One Gig At A Time
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            color: '#212020',
            marginBottom: '45px',
          }}
        >
          Explore exciting projects and be part of a community that values your
          skills.
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
          Discover Your Potential
          <ArrowForwardIcon />
        </Button> */}
      </Stack>
      <Stack sx={{ width: '45%' }}>
        <img
          src="/images/talent2Image.png"
          alt="..."
          width="100%"
          height="460px"
        />
      </Stack>
    </Stack>
  );
};

export default Section1;
