/* eslint-disable @next/next/no-img-element */
import { Stack, Typography, styled } from '@mui/material';

const TitleStyle = { fontWeight: 600, fontSize: '28px', color: '#1F1D1D' };

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
        padding: '0 144px 100px 145px',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '38px',
          color: '#1F1D1D',
          marginBottom: '40px',
        }}
      >
        You have problem with hiring and get the right talents?
      </Typography>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'flex-start',
          alignItems: 'start',
          gap: { xs: '30px', md: '82px' },
        }}
      >
        <Stack sx={{ flexDirection: 'column', width: '30%' }}>
          <img
            src="/icon/routeIcon.png"
            alt="..."
            width="46px"
            height="46px"
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>
            Access To Diverse And Skilled Talent
          </Typography>
          <CustomUl>
            <CustomLi>
              Allows you to customize your job postings to your specific
              governance compliance requirements
            </CustomLi>
            <CustomLi>
              Ensures a broad spectrum of skills and expertise to meet the
              unique needs of each project.
            </CustomLi>
          </CustomUl>
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: '30%' }}>
          <img
            src="/icon/chatIcon.png"
            alt="..."
            width="46px"
            height="46px"
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>
            Efficient Task-Based Collaboration
          </Typography>
          <CustomUl>
            <CustomLi>
              Our platform is designed to streamline project management by
              breaking down tasks into manageable units.
            </CustomLi>
            <CustomLi>
              Allowing for seamless collaboration between the corporate team and
              skilled individuals.
            </CustomLi>
          </CustomUl>
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: '30%' }}>
          <img
            src="/icon/chartIcon.png"
            alt="..."
            width="46px"
            height="46px"
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>
            Cost-Effective And Scalable Solutions
          </Typography>
          <CustomUl>
            <CustomLi>
              Solvnex empowers corporations to strategically plan their project
              budget before job posting.
            </CustomLi>
            <CustomLi>
              Allows businesses to align financial resources with project
              requirements, fostering informed decision-making and optimizing
              cost efficiency.
            </CustomLi>
          </CustomUl>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section2;
