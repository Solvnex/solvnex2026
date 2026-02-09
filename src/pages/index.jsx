// import { Inter } from 'next/font/google';
import { Box, Fab } from '@mui/material';
import MainLayout from '@/components/layout/MainLayout';
import HomeSection1 from '@/components/home/HomeSection1';
import HomeSection2 from '@/components/home/HomeSection2';
import HomeSection3 from '@/components/home/HomeSection3';
import HomeSection4 from '@/components/home/HomeSection4';
import HomeSection5 from '@/components/home/HomeSection5';
import HomeSection6 from '@/components/home/HomeSection6';
import HomeSection7 from '@/components/home/HomeSection7';
import HomeSection8 from '@/components/home/HomeSection8';
// import HomeSection9 from '@/components/home/HomeSection9';
import LaunchIcon from '@mui/icons-material/Launch';
import { useRouter } from 'next/router';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  const handleConnect = () => {
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfyhaIOn0k97VCN8f0kycdueBsOLSrm_iueuhEXVUadGwZAPQ/viewform?usp=publish-editor';
    if (formUrl) {
      window.open(formUrl, '_blank', 'noopener,noreferrer');
    } else {
      router.push('/faq/page-2');
    }
  };
  return (
    <MainLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
        <HomeSection7 />
        <HomeSection8 />
        {/* <HomeSection9 /> */}
      </Box>
      <Fab
        variant="extended"
        onClick={handleConnect}
        aria-label="connect with us"
        data-testid="connect-with-us"
        sx={{
          position: 'fixed',
          bottom: { xs: 96, md: 128 },
          right: { xs: 24, md: 32 },
          background: '#01b1a8',
          color: '#fff',
          '&:hover': { background: '#01b1a8' },
          boxShadow: '0px 3px 6px #00000029',
          fontWeight: 600,
          textTransform: 'none',
          zIndex: 1300,
        }}
      >
        <LaunchIcon sx={{ mr: 1 }} /> Connect With Us!
      </Fab>
    </MainLayout>
  );
}

Home.pageLayout = MainLayout;
