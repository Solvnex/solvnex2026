import { Box, Divider, Stack, Typography } from '@mui/material';
import { responsive } from '@/components/shared/responsive';

const SectionTitle = {
  fontSize: '16px',
  textTransform: 'uppercase',
  color: '#212020',
  marginBottom: '18.5px',
};

const DividerStyle = {
  border: '1px solid #01b1a8',
  marginBottom: '14.5px',
  width: '100%',
};

const SectionSubtitle = {
  fontWeight: 700,
  color: '#212020',
  marginBottom: '28px',
};

const SectionDesc = {
  fontWeight: '18px',
  color: '#212020',
};

const WhoWeAre = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: responsive.rowToCol,
        justifyContent: 'flex-start',
        alignItems: 'start',
        padding: { xs: '30px', md: '60px 81px 60px 103px' },
        gap: { xs: '24px', md: '0' },
      }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          marginRight: { xs: 0, md: '146px' },
          width: { xs: '100%', md: '39.2%' },
        }}
      >
        <Typography sx={SectionTitle}>Solvnex</Typography>
        <Divider sx={DividerStyle} />
        <Typography
          sx={{
            ...SectionSubtitle,
            fontSize: { xs: '32px', md: '50px' },
          }}
        >
          Who we are
        </Typography>
        <Typography sx={SectionDesc}>
          Solvnex aims to shapeshift the gig economy in Malaysia by providing
          gig professionals access to work with corporates by offering a
          customized gig hiring platform for corporates to hire freelancers to
          work in their organizations without compromising their strong
          governance.
          <br />
          <br />
          Our core values are providing quality gig professionals with faster
          matching time, transparent process for businesses and corporate by
          adopting the rising gig workforce as a new normal which is a
          cost-saving method to scale the organisations.
          <br />
          <br />
          To embrace the new norm of working and facilitate businesses and
          individuals in operating a gig-like working environment.
          <br />
          <br />
          To accept the call of the government&apos;s initiative to support and
          strengthen the rising gig economy sector in Malaysia.
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          gap: '44px',
          width: { xs: '100%', md: '47.5%' },
        }}
      >
        <Stack
          sx={{
            flexDirection: responsive.rowToCol,
            justifyContent: 'flex-start',
            alignItems: 'self-start',
            gap: { xs: '20px', md: '3%' },
          }}
        >
          <Stack sx={{ flexDirection: 'column' }}>
            <Typography sx={SectionTitle}>Vision</Typography>
            <Divider sx={DividerStyle} />
            <Typography
              sx={{
                ...SectionSubtitle,
                fontSize: { xs: '22px', md: '25px' },
              }}
            >
              Be A Leading Player In The Gig Professional
            </Typography>
            <Typography sx={SectionDesc}>
              The vision of the platform is to be a leading player in the gig
              professional industry by providing solutions that suit every level
              of business.
            </Typography>
          </Stack>
          <Stack sx={{ flexDirection: 'column' }}>
            <Typography sx={SectionTitle}>Mission</Typography>
            <Divider sx={DividerStyle} />
            <Typography
              sx={{
                ...SectionSubtitle,
                fontSize: { xs: '22px', md: '25px' },
              }}
            >
              To Close The Gap In Gig Economy
            </Typography>
            <Typography sx={SectionDesc}>
              The main mission is to close the gap for gig professionals to be
              able to work with not only SMEs but some of the largest corporate
              companies nationwide.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            flexDirection: responsive.rowToCol,
            justifyContent: 'flex-start',
            alignItems: 'self-start',
            gap: { xs: '20px', md: '3%' },
          }}
        >
          <Stack sx={{ flexDirection: 'column' }}>
            <Typography sx={SectionTitle}>Aim</Typography>
            <Divider sx={DividerStyle} />
            <Typography
              sx={{
                ...SectionSubtitle,
                fontSize: { xs: '22px', md: '25px' },
              }}
            >
              Corporations, SMEs, And Corporates
              <br />
              <br />
            </Typography>
            <Typography sx={SectionDesc}>
              This platform is tailored for corporates to hire freelancers to
              work in their organizations without compromising their strong
              governance.
            </Typography>
          </Stack>
          <Stack sx={{ flexDirection: 'column' }}>
            <Typography sx={SectionTitle}>RECRUITMENT PLATFORM</Typography>
            <Divider sx={DividerStyle} />
            <Typography
              sx={{
                ...SectionSubtitle,
                fontSize: { xs: '22px', md: '25px' },
              }}
            >
              We Help You Tailored Your Rules And Regulations
            </Typography>
            <Typography sx={SectionDesc}>
              The platform is tailored to cater to the governance compliance of
              companies, helping them to remain compliant with all relevant laws
              and regulations.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default WhoWeAre;
