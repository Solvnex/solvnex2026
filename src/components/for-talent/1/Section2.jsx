/* eslint-disable @next/next/no-img-element */
import { Stack, Typography, styled } from '@mui/material';

const TitleStyle = {
  fontWeight: 600,
  fontSize: '28px',
  color: '#1F1D1D',
};

const CustomUl = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  margin: '20px 0 0 15px',
  padding: '0',
  gap: '20px',
});

const CustomLi = styled('li')({
  fontWeight: 500,
  fontSize: '18px',
  color: '#1F1D1D',
});

const Section2 = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '40px',
        padding: '0 50px 100px 50px',
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '38px',
          color: '#1f1d1d',
        }}
      >
        Crafting Your Own Workstory: Embrace Flexibility, Embrace Success
      </Typography>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'flex-start',
          alignItems: 'start',
          gap: { xs: '30px', md: '82px' },
          paddingX: '101px',
        }}
      >
        <Stack sx={{ flexDirection: 'column', width: '30%' }}>
          <img
            src="/icon/filterIcon.png"
            alt="..."
            width="46px"
            height="46px"
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={{ ...TitleStyle, width: '70%' }}>
            Freedom And Flexibility
          </Typography>
          <CustomUl>
            <CustomLi>
              Gain the freedom to work on your terms. Set your schedule, choose
              projects that align with your preferences.
            </CustomLi>
            <CustomLi>
              Achieve a work-life balance that suits you and balance between
              work and personal life.
            </CustomLi>
          </CustomUl>
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: '30%' }}>
          <img
            src="/icon/buildingIcon.png"
            alt="..."
            width="46px"
            height="46px"
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>
            Opportunity To Work With Corporates
          </Typography>
          <CustomUl>
            <CustomLi>
              Unlock the door to corporate collaborations. Explore projects with
              leading corporations.
            </CustomLi>
            <CustomLi>
              Expanding your professional network, and gaining valuable
              experience working on impactful assignments.
            </CustomLi>
          </CustomUl>
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: '30%' }}>
          <img
            src="/icon/handIcon.png"
            alt="..."
            width="46px"
            height="46px"
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>
            Precise Talent Matching With Rate Negotiation
          </Typography>
          <CustomUl>
            <CustomLi>
              Experience precise talent matching tailored to your skills and
              preferences. What sets us apart?
            </CustomLi>
            <CustomLi>
              Set your own pay for the job, ensuring fair compensation for your
              expertise and contributing to a transparent work.
            </CustomLi>
          </CustomUl>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section2;
