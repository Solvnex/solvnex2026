import {
  Box,
  Breadcrumbs,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NextIcon from '@mui/icons-material/NavigateNext';
import SecondaryLayout from '@/components/layout/SecondaryLayout';
import { useRouter } from 'next/router';
import BusinessHiringProcess from '@/components/hiring-process';

const HiringProcess = () => {
  const router = useRouter();

  const handleGoback = () => {
    router.back();
  };

  const breadcrumbs = [
    <Link
      key="1"
      href="/sign-up"
      sx={{
        fontWeight: 500,
        fontSize: '16px',
        color: '#504C4C',
        textDecoration: 'none',
      }}
    >
      Sign Up
    </Link>,
    <Typography key="2" sx={{ fontSize: '16px', color: '#504C4C' }}>
      Business Hiring Process
    </Typography>,
  ];
  return (
    <SecondaryLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          gap: '32px',
          padding: '30px 69.5px 72px',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <IconButton
            onClick={handleGoback}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ArrowBackIcon
              sx={{ width: '20px', height: '20px', color: '#01b1a8' }}
            />
          </IconButton>
          <Breadcrumbs separator={<NextIcon />}>{breadcrumbs}</Breadcrumbs>
        </Stack>
        <BusinessHiringProcess />
      </Box>
    </SecondaryLayout>
  );
};

export default HiringProcess;
