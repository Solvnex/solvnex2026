import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';

const CommentSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        width: '100%',
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '30px',
          color: '#212020',
          marginBottom: '28px',
        }}
      >
        2 Comments
      </Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'start',
          gap: '26px',
          marginBottom: '39px',
          marginLeft: '8px',
        }}
      >
        <CircleIcon
          sx={{
            width: '50px',
            height: '50px',
            color: '#01b1a8',
          }}
        />
        <Stack
          sx={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
            gap: '12px',
            width: '75%',
          }}
        >
          <Typography
            sx={{ fontWeight: 600, fontSize: '18px', color: '#504C4C' }}
          >
            Colabrio
          </Typography>
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <Typography
              sx={{ fontWeight: 500, fontSize: '14px', color: '#504c4c' }}
            >
              August 5, 2023
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#504c4c' }}>
              3 min read
            </Typography>
          </Stack>
          <Typography
            sx={{ fontWeight: 500, fontSize: '14px', color: '#504c4c' }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: '14px', color: '#504c4c' }}
          >
            Reply
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'start',
          gap: '26px',
          marginLeft: '84px',
        }}
      >
        <CircleIcon
          sx={{
            width: '50px',
            height: '50px',
            color: '#01b1a8',
          }}
        />
        <Stack
          sx={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
            gap: '12px',
          }}
        >
          <Typography
            sx={{ fontWeight: 600, fontSize: '18px', color: '#504C4C' }}
          >
            Colabrio
          </Typography>
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <Typography
              sx={{ fontWeight: 500, fontSize: '14px', color: '#504c4c' }}
            >
              August 5, 2023
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#504c4c' }}>
              3 min read
            </Typography>
          </Stack>
          <Typography
            sx={{ fontWeight: 500, fontSize: '14px', color: '#504c4c' }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: '14px', color: '#504c4c' }}
          >
            Reply
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CommentSection;
