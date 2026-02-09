import {
  Badge,
  Box,
  Button,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleIcon from '@mui/icons-material/Circle';

const CardStyle = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'flex-start',
  alignItems: 'start',
  marginBottom: '20px',
  gap: { xs: '10px', md: 'none' },
};

const ArticleDate = {
  fontWeight: 500,
  fontSize: '14px',
  color: '#504C4C',
  minWidth: 'max-content',
  marginRight: { md: '16px' },
  marginBottom: { xs: '10px', md: 'none' },
};

const ArticleDuration = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'end',
  gap: '5px',
  fontSize: '14px',
  color: '#504C4C',
  minWidth: 'max-content',
  marginRight: { md: '104px' },
  marginBottom: { xs: '10px', md: 'none' },
};

const CircleIconStyle = {
  width: '4px',
  height: '4px',
  color: '#ff0000',
};

const ArticleDescCard = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'start',
  marginRight: { md: '184px' },
  gap: '15px',
  marginBottom: { xs: '10px', md: 'none' },
};

const ArticleTitle = { fontWeight: 700, fontSize: '25px', color: '#504C4C' };

const ArticleContent = { fontSize: '16px', color: '#504C4C' };

const ArticleBadge = {
  borderRadius: '5px',
  minWidth: 'max-content',
  padding: '5px 10px',
};

const ReadArticleBtn = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '10px',
  fontWeight: 500,
  fontSize: '16px',
  color: '#01B1A8',
  textDecoration: 'none',
  minWidth: 'max-content',
};

const HomeSection7 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        padding: { xs: '30px', md: '80px 101px' },
        background: '#fff',
      }}
    >
      <Typography sx={{ fontSize: '18px', color: '#212020' }}>
        Latest Articles
      </Typography>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { xs: 'flex-start', md: 'space-between' },
          alignItems: { xs: 'start', md: 'center' },
          width: '100%',
          marginBottom: '67px',
        }}
      >
        <Typography
          sx={{ fontWeight: 700, fontSize: '45px', color: '#212020' }}
        >
          You Need To Know
        </Typography>
        <Button
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 'max-content',
            padding: '15px 20px',
            background: '#01B1A8 0% 0% no-repeat padding-box',
            boxShadow: '0px 3px 6px #01B1A800',
            borderRadius: '5px',
            gap: '20px',
            color: '#fff',

            '&:hover': {
              background: '#fff',
              boxShadow: '0px 3px 6px #FFFFFF00',
              color: '#01b1a8',
            },
          }}
        >
          Read Articles
          <ArrowForwardIcon />
        </Button>
      </Stack>
      <Stack sx={CardStyle}>
        <Typography sx={ArticleDate}>August 5, 2023</Typography>
        <Typography sx={ArticleDuration}>
          <CircleIcon sx={CircleIconStyle} />4 min read
        </Typography>
        <Stack sx={ArticleDescCard}>
          <Typography sx={ArticleTitle}>
            The Rise of Gig Professionals: Redefining the Workforce of the
            Future
          </Typography>
          <Typography sx={ArticleContent}>
            In today&apos;s fast-paced and digital-driven world, the gig economy
            has emerged as a transformative force, reshaping the way people…
          </Typography>
          <Badge
            sx={{
              ...ArticleBadge,
              background: '#F8EECC 0% 0% no-repeat padding-box',
            }}
          >
            Gig Professional
          </Badge>
        </Stack>
        <Link href="" sx={ReadArticleBtn}>
          Read Article
          <ArrowForwardIcon />
        </Link>
      </Stack>
      <Divider
        sx={{
          display: 'flex',
          width: '100%',
          background: '#89CECA',
          height: '1px',
          marginBottom: '27px',
        }}
      />
      <Stack sx={CardStyle}>
        <Typography sx={ArticleDate}>August 5, 2023</Typography>
        <Typography sx={ArticleDuration}>
          <CircleIcon sx={CircleIconStyle} />4 min read
        </Typography>
        <Stack sx={ArticleDescCard}>
          <Typography sx={ArticleTitle}>
            3 Reasons Businesses Are Upping Into The Gig Economy
          </Typography>
          <Typography sx={ArticleContent}>
            Due to labor shortages and inflation more people are turning to the
            gig economy for work, and technology advances have…
          </Typography>
          <Badge
            sx={{
              ...ArticleBadge,
              background: '#B6E6E4 0% 0% no-repeat padding-box',
            }}
          >
            Business
          </Badge>
        </Stack>
        <Link href="" sx={ReadArticleBtn}>
          Read Article
          <ArrowForwardIcon />
        </Link>
      </Stack>
    </Box>
  );
};

export default HomeSection7;
