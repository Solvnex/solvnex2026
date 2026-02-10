/* eslint-disable @next/next/no-img-element */
import { Box, IconButton, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { useRouter } from 'next/router';

const ArticleViewHeader = ({ article }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        padding: '0',
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'flex-start',
          alignItems: { xs: 'start', md: 'end' },
          gap: { xs: '20px', md: '25px' },
          marginRight: { xs: 0, md: '116px' },
          width: '100%',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
            width: { xs: '100%', md: '50%' },
            minHeight: { xs: '360px', md: '812px' },
            height: { xs: 'auto', md: '812px' },
            backgroundImage: `url(${article.Image})`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: { xs: '20px', md: '30px 30px 171px 72px' },
            backgroundColor: '#00000099',
            overflow: 'hidden',
          }}
        >
          <IconButton
            onClick={handleGoBack}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'start',
              width: 'max-content',
              height: 'max-content',
              marginBottom: '47px',
            }}
          >
            <ArrowBackIcon
              sx={{ width: '20px', height: '20px', color: '#fff' }}
            />
          </IconButton>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'start',
              width: '100%',
              marginLeft: { xs: 0, md: '56px' },
            }}
          >
            <Stack
              sx={{
                flexDirection: 'row',
                gap: '10px',
              }}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: '14px', color: '#f7f7f7' }}
              >
                Career Guides : {article.Type}
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#f7f7f7' }}>
                {article.Duration}
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: '32px', md: '50px' },
                color: '#fff',
                width: '100%',
              }}
            >
              {article.Title}
            </Typography>
            <Stack
              sx={{
                marginTop: { xs: '30px', md: '100px' },
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'flex-start',
                alignItems: 'start',
                gap: { xs: '12px', md: 0 },
                width: '100%',
                flexWrap: { xs: 'wrap', md: 'nowrap' },
              }}
            >
              <CircleIcon
                sx={{
                  width: { xs: '24px', md: '50px' },
                  height: { xs: '24px', md: '50px' },
                  color: '#01b1a8',
                  marginRight: { xs: 0, md: '13px' },
                }}
              />
              <Stack
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'start',
                  gap: '8px',
                  marginRight: { xs: 0, md: '15px' },
                }}
              >
                <Typography
                  sx={{ fontWeight: 300, fontSize: { xs: '14px', md: '16px' }, color: '#fff' }}
                >
                  Posted by
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, fontSize: { xs: '14px', md: '16px' }, color: '#fff' }}
                >
                  Solvnex Team
                </Typography>
              </Stack>
              <Stack
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'start',
                  gap: '8px',
                  marginRight: { xs: 0, md: '19px' },
                  width: { xs: 'auto', md: '106px' },
                }}
              >
                <Typography
                  sx={{ fontWeight: 300, fontSize: { xs: '14px', md: '16px' }, color: '#fff' }}
                >
                  Published
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, fontSize: { xs: '14px', md: '16px' }, color: '#fff' }}
                >
                  {article.Date}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'start',
                  gap: '8px',
                  marginRight: { xs: 0, md: '32px' },
                  width: { xs: 'auto', md: '106px' },
                }}
              >
                <Typography
                  sx={{ fontWeight: 300, fontSize: { xs: '14px', md: '16px' }, color: '#fff' }}
                >
                  2 Comments
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, fontSize: { xs: '14px', md: '16px' }, color: '#fff' }}
                >
                  Join The Conversation
                </Typography>
              </Stack>
              <Stack
                sx={{
                  flexDirection: { xs: 'row', md: 'column' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: { xs: '12px', md: '10px' },
                  width: { xs: 'auto', md: '40px' },
                  height: 'auto',
                  background: '#FFFFFF 0% 0% no-repeat padding-box',
                  borderRadius: '5px',
                  padding: '10px',
                }}
              >
                <Link href="#" aria-label="Share on Instagram">
                  <Image src="/images/instagram.png" alt="Instagram" width={20} height={20} />
                </Link>
                <Link href="#" aria-label="Share on LinkedIn">
                  <Image src="/images/linkedIn.png" alt="LinkedIn" width={20} height={20} />
                </Link>
                <Link href="#" aria-label="Share on Facebook">
                  <Image src="/images/fb.png" alt="Facebook" width={20} height={20} />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            paddingTop: { xs: '0', md: '97px' },
            width: { xs: '100%', md: '42%' },
            height: { xs: 'auto', md: '812px' },
            overflowY: { xs: 'visible', md: 'scroll' },
            '&::-webkit-scrollbar': {
              width: 0,
            },
            scrollbarWidth: 'none',
          }}
        >
          {React.isValidElement(article.Desc)
            ? React.cloneElement(article.Desc, { showTitle: false })
            : article.Desc}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ArticleViewHeader;
