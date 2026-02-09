import { Box, Button, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import SecondaryLayout from '@/components/layout/SecondaryLayout';

const CallArranged = () => {
  const router = useRouter();

  const handleGoback = () => {
    router.back();
  };
  return (
    <SecondaryLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          padding: '30px 0 100px 72px',
        }}
      >
        <IconButton
          onClick={handleGoback}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '48px',
          }}
        >
          <ArrowBackIcon
            sx={{ width: '20px', height: '20px', color: '#01b1a8' }}
          />
        </IconButton>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '40px',
            color: '#212020',
            marginBottom: '30px',
            width: '90%',
          }}
        >
          Thank you for submitting your request. We&apos;ll be in touch shortly.
          Your request is important to us. Thank you for choosing us.
        </Typography>
        <Button
          href="/"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '13.5px 244.5px',
            background: '#01B1A8 0% 0% no-repeat padding-box',
            borderRadius: '5px',
            color: '#fff',
            width: '50%',
            marginBottom: '20px',
            '&:hover': {
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              border: '2px solid #00AB9F',
              color: '#00AB9F',
            },
          }}
        >
          Back to homepage
        </Button>
      </Box>
    </SecondaryLayout>
  );
};

export default CallArranged;
