import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { CustomTextfield } from '../custom-textfield';
import SquareCheckbox from '../custom-checkbox/SquareCheckbox';

const QuestionStyle = {
  fontWeight: 500,
  fontSize: '18px',
  color: '#504c4c',
};

const LeaveAQuestion = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '25px',
          color: '#212020',
          marginBottom: '15px',
        }}
      >
        Leave A Question
      </Typography>
      <Typography
        sx={{
          ...QuestionStyle,
          marginBottom: '60px',
        }}
      >
        Your email address will not be publised. Required fields are marked{' '}
        <span style={{ color: '#01b1a8' }}>*</span>
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'start',
          gap: '20px',
          width: '100%',
          marginBottom: '15px',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
            gap: '10px',
            width: '100%',
          }}
        >
          <Typography sx={QuestionStyle}>
            Name <span style={{ color: '#01b1a8' }}>*</span>
          </Typography>
          <CustomTextfield fullWidth required placeholder="Enter your name" />
        </Stack>
        <Stack
          sx={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
            gap: '10px',
            width: '100%',
          }}
        >
          <Typography sx={QuestionStyle}>
            Email Address <span style={{ color: '#01b1a8' }}>*</span>
          </Typography>
          <CustomTextfield
            fullWidth
            required
            placeholder="Enter your email address"
          />
        </Stack>
      </Stack>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '30px',
        }}
      >
        <SquareCheckbox />
        <Typography sx={QuestionStyle}>
          Save my name, email, and website in this browser for the next time I
          comment.
        </Typography>
      </Stack>
      <Typography sx={{ ...QuestionStyle, marginBottom: '10px' }}>
        Your Question <span style={{ color: '#01b1a8' }}>*</span>
      </Typography>
      <CustomTextfield
        fullWidth
        placeholder="Enter your question here"
        multiline
        rows={5}
        sx={{ marginBottom: '30px' }}
      />
      <Button
        sx={{
          background: '#4FAEA7 0% 0% no-repeat padding-box',
          boxShadow: '0px 3px 6px #01B1A802',
          padding: '15px 20px',
          color: '#fff',
          '&:hover': {
            background: '#fff',
            color: '#01b1a8',
            border: '2px solid #01b1a8',
          },
        }}
      >
        Submit Question
      </Button>
    </Box>
  );
};

export default LeaveAQuestion;
