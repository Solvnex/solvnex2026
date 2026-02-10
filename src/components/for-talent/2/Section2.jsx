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
        padding: { xs: '0 30px 60px', md: '0 128px 100px 129px' },
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '28px', md: '38px' },
          color: '#1F1D1D',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        Scale Your Gigs to New Heights: Explore Exciting Opportunities to Work
        with Scalable Corporates!
      </Typography>
      <Stack
        sx={{
          flexDirection: responsive.rowToCol,
          justifyContent: 'flex-start',
          alignItems: 'start',
          gap: { xs: '30px', md: '82px' },
        }}
      >
        <Stack sx={{ flexDirection: 'column', width: { xs: '100%', md: '30%' } }}>
          <Image
            src="/icon/targetIcon.png"
            alt="target"
            width={46}
            height={46}
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>
            Focus On Project-Based Requirements
          </Typography>
          <CustomUl>
            <CustomLi>
              Solvnex prioritizes project-based requirements, ensuring that gig
              talents can engage in focused and well-defined assignments.
            </CustomLi>
            <CustomLi>
              This approach allows you to channel their expertise into specific
              projects, enhancing the overall quality of your work.
            </CustomLi>
          </CustomUl>
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: { xs: '100%', md: '30%' } }}>
          <Image
            src="/icon/cubeIcon.png"
            alt="cube"
            width={46}
            height={46}
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>Fun Digital Product Making</Typography>
          <CustomUl>
            <CustomLi>
              Engage in the exciting world of digital product making with
              Solvnex.
            </CustomLi>
            <CustomLi>
              Work on projects that involve crafting innovative digital
              solutions, contributing to the creation of products that make a
              tangible impact in the digital landscape.
            </CustomLi>
          </CustomUl>
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: { xs: '100%', md: '30%' } }}>
          <Image
            src="/icon/buildingIcon.png"
            alt="building"
            width={46}
            height={46}
            style={{ marginBottom: '16px' }}
          />
          <Typography sx={TitleStyle}>
            Opportunity To Work With Scalable Corporates
          </Typography>
          <CustomUl>
            <CustomLi>
              Unlock opportunities to collaborate with corporate clients on
              Solvnex.
            </CustomLi>
            <CustomLi>
              By working on outsourcing projects, you gain exposure to projects
              initiated by leading corporations, expanding your professional
              network and contributing to their career growth.
            </CustomLi>
          </CustomUl>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section2;
