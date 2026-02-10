import { Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import { responsive } from '@/components/shared/responsive';

const TitleStyle = {
  fontWeight: 600,
  fontSize: '28px',
  color: '#1F1D1D',
  height: { xs: 'auto', md: '107px' },
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
        padding: { xs: '0 30px 60px 30px', md: '0 50px 100px 50px' },
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '38px',
          color: '#1f1d1d',
        }}
      >
        You have a product idea but lack the necessary talent bring it to life?
      </Typography>
      <Stack
        sx={{
          flexDirection: responsive.rowToCol,
          justifyContent: 'flex-start',
          alignItems: 'start',
          gap: { xs: '30px', md: '82px' },
          paddingX: responsive.padXPage,
        }}
      >
        <Stack sx={{ flexDirection: 'column', width: { xs: '100%', md: '30%' } }}>
          <Image
            src="/icon/settingIcon.png"
            alt="setting"
            width={46}
            height={46}
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>
            “Seeking A Talent? We Match The Right Talent For Your Project”
          </Typography>
          <CustomUl>
            <CustomLi>
              We takes the burden off your shoulders by providing access to
              project-based talents with a seamless platform.
            </CustomLi>
            <CustomLi>
              Focus on your core business while we assist you on your next
              on-demand talent hiring process.
            </CustomLi>
          </CustomUl>
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: { xs: '100%', md: '30%' } }}>
          <Image
            src="/icon/chartIcon.png"
            alt="chart"
            width={46}
            height={46}
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>Cost-Effective Outsourcing</Typography>
          <CustomUl>
            <CustomLi>
              Instead of maintaining an in-house team, leverage our platform to
              access top-notch talents on a project basis.
            </CustomLi>
            <CustomLi>
              This flexibility allows you to scale resources based on project
              needs, optimizing your budget.
            </CustomLi>
          </CustomUl>
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: { xs: '100%', md: '30%' } }}>
          <Image
            src="/icon/chainIcon.png"
            alt="chain"
            width={46}
            height={46}
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>
            Precise Talent Matching For Project Needs
          </Typography>
          <CustomUl>
            <CustomLi>
              Our platform ensures that the right talent perfectly matches your
              project requirements.
            </CustomLi>
            <CustomLi>
              Benefit from a curated pool of skilled professionals, enhancing
              the quality and efficiency of your projects.
            </CustomLi>
          </CustomUl>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section2;
