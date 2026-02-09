/* eslint-disable @next/next/no-img-element */
import { Box, Link, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';

const FooterDesc = {
  fontSize: '18px',
  color: '#212020',
};

const FooterTitle = {
  fontWeight: 600,
  fontSize: '20px',
  color: '#212020',
  marginBottom: '2px',
};

const FooterLinkStyle = {
  fontWeight: 500,
  fontSize: '18px',
  color: '#01b1a8',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
};

const ContactLink = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
  textDecoration: 'none',
};

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: '#EDEDED',
        width: '100%',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'start',
          padding: { xs: '30px', md: '80px 101px' },
        }}
      >
        <Stack
          sx={{
            flexDirection: 'column',
            width: { md: '50%' },
            justifyContent: 'flex-start',
          }}
        >
          <Stack sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img
              src="/images/logosolvnex.png"
              alt="logosolvnex"
              width="414px"
              height="89px"
              style={{ marginBottom: '32px' }}
            />
          </Stack>
          <Stack sx={{ display: { md: 'none' } }}>
            <img
              src="/images/logosolvnex.png"
              alt="logosolvnex"
              width="109px"
              height="23px"
              style={{ marginBottom: '20px' }}
            />
          </Stack>
          <Typography
            sx={{ ...FooterDesc, marginBottom: { xs: '20px', md: '48px' } }}
          >
            Solvnex values are providing quality gig professionals with faster
            matching time, and a transparent process for businesses and
            corporate by adopting the rising gig workforce as a new normal which
            is a cost-saving method to scale the organizations.
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '20px',
              color: '#212020',
              marginBottom: '20px',
            }}
          >
            Follow Us On
          </Typography>
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: '20px',
            }}
          >
            <Link href="">
              <img
                src="/images/instagram.png"
                alt="igLogo"
                width="50px"
                height="50px"
              />
            </Link>
            <Link href="">
              <img
                src="/images/linkedIn.png"
                alt="LinkedInLogo"
                width="50px"
                height="50px"
              />
            </Link>
            <Link href="">
              <img
                src="/images/fb.png"
                alt="fbLogo"
                width="50px"
                height="50px"
              />
            </Link>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'flex-end',
            gap: { xs: '15px', md: '20%' },
          }}
        >
          <Stack
            sx={{
              flexDirection: 'column',
              width: { md: '20%' },
              gap: { xs: '10px', md: '30px' },
            }}
          >
            <Typography sx={FooterTitle}>Quick Links</Typography>
            {/* <Link href="" sx={FooterLinkStyle}>
              For Business
            </Link>
            <Link href="" sx={FooterLinkStyle}>
              For Talents
            </Link> */}
            <Link href="/why-solvnex" sx={FooterLinkStyle}>
              Why Solvnex
            </Link>
            <Link href="/career-guides" sx={FooterLinkStyle}>
              Career Guides
            </Link>
            <Link href="" sx={FooterLinkStyle}>
              Articles
            </Link>
            {/* <Link href="" sx={FooterLinkStyle}>
              Discoveries
            </Link> */}
            <Link href="/faq/page-1" sx={FooterLinkStyle}>
              FAQ
            </Link>
            {/* <Link href="/sign-in" sx={FooterLinkStyle}>
              Sign In
            </Link>
            <Link href="/sign-up" sx={FooterLinkStyle}>
              Sign Up
            </Link> */}
          </Stack>
          <Stack sx={{ flexDirection: 'column', width: { md: '35%' } }}>
            <Typography
              sx={{ ...FooterTitle, marginBottom: { xs: '12px', md: '32px' } }}
            >
              Connect With Us Here
            </Typography>
            <Typography
              sx={{ ...FooterDesc, marginBottom: { xs: '12px', md: '32px' } }}
            >
              Level 23, Menara Exchange 106, Lingkaran TRX, Tun Razak Exchange,
              Kuala Lumpur, WP Kuala Lumpur 55188, MY
            </Typography>
            <Link
              href=""
              sx={{
                ...ContactLink,
                marginBottom: { xs: '12px', md: '25px' },
              }}
            >
              <EmailIcon
                sx={{ width: '24px', height: '24px', color: '#01b1a8' }}
              />
              <Typography sx={FooterDesc}>hello@solvnex.com</Typography>
            </Link>
            <Link href="" sx={ContactLink}>
              <PhoneIcon
                sx={{ width: '24px', height: '24px', color: '#01b1a8' }}
              />
              <Typography sx={FooterDesc}>03 2783 4441</Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          padding: { xs: '30px', md: '30px 101px' },
          borderTop: '1px solid #01B1A8',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            marginBottom: { xs: '10px', md: 'none' },
          }}
        >
          <Typography sx={{ ...FooterDesc, fontWeight: 300 }}>
            © 2023 Solvnex. All Rights Reserved.
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: { xs: 'start', sm: 'flex-start', md: 'flex-end' },
            alignItems: { xs: 'start', sm: 'center' },
            gap: { xs: '10px', md: '88px' },
          }}
        >
          <Link href="/privacy-policy" sx={{ ...ContactLink, ...FooterDesc, fontWeight: 600 }}>
            Privacy Policy
          </Link>
          <Link href="/code-of-conduct" sx={{ ...ContactLink, ...FooterDesc, fontWeight: 600 }}>
            Code of Conduct
          </Link>
          <Link href="/user-agreement" sx={{ ...ContactLink, ...FooterDesc, fontWeight: 600 }}>
            User Agreement
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
