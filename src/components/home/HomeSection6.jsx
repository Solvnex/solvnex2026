import { Box, Button, Card, Link, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CardStyle = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'start',
  background: 'none',
  width: { md: '25%' },
};

const CardTitle = {
  fontWeight: 500,
  fontSize: '18px',
  color: '#fff',
  marginBottom: '36px',
};

const CardDate = {
  fontSize: '16px',
  color: '#fff',
  marginBottom: '10px',
};

const ReadGuideBtn = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontWeight: '500',
  fontSize: '18px',
  textAlign: 'left',
  lineHeight: '21px',
  color: '#01b1a8',
  textDecoration: 'none',
  gap: '10px',
  marginBottom: { xs: '20px', md: '50px' },
};

const ArticleBtn = {
  padding: '43px 20px 20px',
  width: '100%',
  color: '#504c4c',
  textTransform: 'none',
  borderRadius: '10px',
};

const HomeSection6 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        background: '#090909',
        padding: { xs: '30px', md: '53px 101px 80px' },
      }}
    >
      <Typography
        sx={{
          fontSize: '18px',
          color: '#fff',
          marginBottom: '10px',
        }}
      >
        Career Guides
      </Typography>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'start',
          gap: '30px',
          marginBottom: '76px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '45px',
            textAlign: 'left',
            color: '#fff',
          }}
        >
          The Rise of Gig Professionals: Redefining the Workforce of the Future
        </Typography>
        <Button
          href="/career-guides"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px 20px',
            minWidth: 'max-content',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 3px 6px #01B1A800',
            gap: '20px',
            fontWeight: 600,
            fontSize: '18px',
            color: '#01b1a8',
            '&:hover': {
              background: '#89CECA 0% 0% no-repeat padding-box',
              boxShadow: '0px 3px 6px #FFFFFF00',
              color: '#fff',
            },
          }}
        >
          Explore Career Guides
          <ArrowForwardIcon />
        </Button>
      </Stack>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'flex-start',
          alignItems: 'start',
          gap: { xs: '50px', md: '30px' },
        }}
      >
        <Card sx={CardStyle}>
          <Typography sx={CardTitle}>
            It is beneficial to consider the 5 P&apos;s of career development
            when thinking about setting yourself up to excel in your own career…
          </Typography>
          <Typography sx={CardDate}>25 July 2023</Typography>
          <Link href="" sx={ReadGuideBtn}>
            Read the guide
            <ArrowForwardIcon />
          </Link>
          <Button
            href="/career-guides/career-development"
            sx={{
              ...ArticleBtn,
              background: '#89ceca',
              '&:hover': {
                background: '#89ceca',
              },
            }}
          >
            Career Development Tips
          </Button>
        </Card>
        <Card sx={CardStyle}>
          <Typography sx={CardTitle}>
            In a good interview, you&apos;ll share your professional story and
            ask insightful questions. Excellent communication – both verbal…
          </Typography>
          <Typography sx={CardDate}>25 July 2023</Typography>
          <Link href="" sx={ReadGuideBtn}>
            Read the guide
            <ArrowForwardIcon />
          </Link>
          <Button
            href="/career-guides/interview-preparation"
            sx={{
              ...ArticleBtn,
              background: '#F8EECC',
              '&:hover': {
                background: '#F8EECC',
              },
            }}
          >
            Interview Preparation
          </Button>
        </Card>
        <Card sx={CardStyle}>
          <Typography sx={CardTitle}>
            A resume is a concise, organized summary of your skills,
            accomplishments, experiences, and education, which is designed…
          </Typography>
          <Typography sx={CardDate}>25 July 2023</Typography>
          <Link href="" sx={ReadGuideBtn}>
            Read the guide
            <ArrowForwardIcon />
          </Link>
          <Button
            href="/career-guides/resume-and-cover-letter"
            sx={{
              ...ArticleBtn,
              background: '#F2DD6B',
              '&:hover': {
                background: '#F2DD6B',
              },
            }}
          >
            Resume & Cover Letter
          </Button>
        </Card>
        <Card sx={CardStyle}>
          <Typography sx={CardTitle}>
            When negotiating a salary for a new job. If you are negotiating the
            salary for a new position or a job at a new company, asking for 10%
            …
          </Typography>
          <Typography sx={CardDate}>25 July 2023</Typography>
          <Link href="" sx={ReadGuideBtn}>
            Read the guide
            <ArrowForwardIcon />
          </Link>
          <Button
            href="/career-guides/pay-and-salary-discovery"
            sx={{
              ...ArticleBtn,
              background: '#D4E86F',
              '&:hover': {
                background: '#D4E86F',
              },
            }}
          >
            Pay & Salary Discovery
          </Button>
        </Card>
      </Stack>
    </Box>
  );
};

export default HomeSection6;
