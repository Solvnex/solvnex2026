import { Box, Button, Stack, Typography } from '@mui/material';
import QuestionType from '../../../components/faq/QuestionType';
import MainLayout from '@/components/layout/MainLayout';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardOutlined';

const FAQ = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          padding: '60px 101px 100px',
          background: '#fcfcfc',
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
          Frequent Asked Questions
        </Typography>
        <QuestionType />
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'start',
            marginTop: '60px',
            padding: '46px 46px 44px 50px',
            background: '#212020 0% 0% no-repeat padding-box',
            width: '100%',
            borderRadius: '10px',
          }}
        >
          <Stack
            sx={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'start',
              width: '38%',
            }}
          >
            <Typography
              sx={{ fontSize: '18px', color: '#fff', marginBottom: '15px' }}
            >
              If you cannot find the answer, We are here to help.
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '35px',
                color: '#fff',
                marginBottom: '10px',
              }}
            >
              You still have a question?
            </Typography>
            <Typography
              sx={{ fontWeight: 700, fontSize: '35px', color: '#fff' }}
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
            }}
          >
            Send A Question
            <ArrowForwardIcon />
          </Button>
        </Stack>
      </Box>
    </MainLayout>
  );
};

export default FAQ;
