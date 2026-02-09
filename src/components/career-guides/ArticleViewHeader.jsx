/* eslint-disable @next/next/no-img-element */
import { Box, IconButton, Link, Stack, Typography } from '@mui/material';
import React from 'react';
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
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'end',
          gap: '25px',
          marginRight: '116px',
          width: '100%',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
            width: '50%',
            height: '812px',
            backgroundImage: `url(${article.Image})`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '30px 30px 171px 72px',
            backgroundColor: '#00000099',
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
              marginLeft: '56px',
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
                fontSize: '50px',
                color: '#fff',
                width: '95%',
              }}
            >
              {article.Title}
            </Typography>
            <Stack
              sx={{
                marginTop: '100px',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'start',
              }}
            >
              <CircleIcon
                sx={{
                  width: '50px',
                  height: '50px',
                  color: '#01b1a8',
                  marginRight: '13px',
                }}
              />
              <Stack
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'start',
                  gap: '8px',
                  marginRight: '15px',
                }}
              >
                <Typography
                  sx={{ fontWeight: 300, fontSize: '16px', color: '#fff' }}
                >
                  Posted by
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, fontSize: '16px', color: '#fff' }}
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
                  marginRight: '19px',
                  width: '106px',
                }}
              >
                <Typography
                  sx={{ fontWeight: 300, fontSize: '16px', color: '#fff' }}
                >
                  Published
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, fontSize: '16px', color: '#fff' }}
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
                  marginRight: '110px',
                  width: '106px',
                }}
              >
                <Typography
                  sx={{ fontWeight: 300, fontSize: '16px', color: '#fff' }}
                >
                  2 Comments
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, fontSize: '16px', color: '#fff' }}
                >
                  Join The Conversation
                </Typography>
              </Stack>
              <Stack
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  width: '40px',
                  height: 'auto',
                  background: '#FFFFFF 0% 0% no-repeat padding-box',
                  borderRadius: '5px',
                  padding: '10px',
                }}
              >
                <Link href="">
                  <img
                    src="/images/instagram.png"
                    alt="..."
                    width="20px"
                    height="20px"
                  />
                </Link>
                <Link href="">
                  <img
                    src="/images/linkedIn.png"
                    alt="..."
                    width="20px"
                    height="20px"
                  />
                </Link>
                <Link href="">
                  <img
                    src="/images/fb.png"
                    alt="..."
                    width="20px"
                    height="20px"
                  />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            paddingTop: '97px',
            width: '42%',
            height: '812px',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
              width: 0,
            },
            scrollbarWidth: 'none',
          }}
        >
          {article.Desc}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ArticleViewHeader;
