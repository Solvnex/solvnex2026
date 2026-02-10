import { Box, Button, Stack, Typography } from '@mui/material';
import QuestionType from '@/components/faq/QuestionType';
import MainLayout from '@/components/layout/MainLayout';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardOutlined';
import { responsive } from '@/components/shared/responsive';

const FAQ = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          px: responsive.padXPage,
          pt: { xs: '30px', md: '60px' },
          pb: { xs: '60px', md: '100px' },
          background: '#fcfcfc',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: responsive.titleLg,
            color: '#1F1D1D',
            marginBottom: '40px',
          }}
        >
          Frequent Asked Questions
        </Typography>
        <QuestionType />
        {/* <Stack
          sx={{
            flexDirection: responsive.rowToCol,
            justifyContent: 'space-between',
            alignItems: { xs: 'start', md: 'start' },
            marginTop: '60px',
            px: { xs: '24px', md: '50px' },
            py: { xs: '24px', md: '44px' },
            background: '#212020 0% 0% no-repeat padding-box',
            width: '100%',
            borderRadius: '10px',
            gap: { xs: '24px', md: 0 },
          }}
        >
          <Stack
            sx={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'start',
              width: { xs: '100%', md: '38%' },
            }}
          >
            <Typography
              sx={{ fontSize: responsive.textMd, color: '#fff', marginBottom: '15px' }}
            >
              If you cannot find the answer, We are here to help.
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: responsive.titleMd,
                color: '#fff',
                marginBottom: '10px',
              }}
            >
              You still have a question?
            </Typography>
            <Typography
              sx={{ fontWeight: 700, fontSize: responsive.titleMd, color: '#fff' }}
            >
              Send us here.
            </Typography>
          </Stack>
          <Button
            href="/faq/page-2"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              padding: '15px 20px',
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              boxShadow: '0px 3px 6px #FFFFFF',
              borderRadius: '5px',
              color: '#01b1a8',
              '&:hover': {
                background: '#01b1a8',
                color: '#fff',
              },
              alignSelf: { xs: 'start', md: 'center' },
            }}
          >
            Send A Question
            <ArrowForwardIcon />
          </Button>
        </Stack> */}
      </Box>
    </MainLayout>
  );
};

export default FAQ;
