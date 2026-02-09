import { useState } from 'react';
import {
  Button,
  Typography,
  Stack,
  Box,
  FormControlLabel,
  Link,
  FormGroup,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  BackBtnStyle,
  NextBtnStyle,
  QuestionStyle,
  RadioOptionStyle,
  SignupAsBtnStyle,
  SkipBtnStyle,
} from '../Signup.Styles';
import SquareRadio from '@/components/custom-checkbox/SquareRadio';
import { CustomTextfield } from '@/components/custom-textfield';

const Question1 = ({ onNext, onSkip }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSkip = () => {
    onSkip();
  };

  const handleNext = () => {
    if (selectedOption) {
    }
    onNext();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '20px',
          color: '#212020',
          marginBottom: '8px',
        }}
      >
        In Solvnex, we call you{' '}
        <span style={{ color: '#01B1A8' }}>“Gig Professional”</span>
      </Typography>
      <Typography sx={QuestionStyle}>
        What are your skills category? <br />
        <span style={{ fontSize: '30px' }}>(Select all that apply)</span>
      </Typography>
      <FormGroup
        sx={{ gap: '30px', margin: '0 0 60px 20px' }}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <FormControlLabel
          value="Option A"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>
              Programming and Development
            </Typography>
          }
        />
        <FormControlLabel
          value="Option B"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>Database Management</Typography>
          }
        />
        <FormControlLabel
          value="Option C"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>
              Data Science and Analytics
            </Typography>
          }
        />
        <FormControlLabel
          value="Option D"
          control={<SquareRadio />}
          label={<Typography sx={RadioOptionStyle}>UI/UX Design</Typography>}
        />
        <FormControlLabel
          value="Option E"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>
              Software Testing and Quality Assurance
            </Typography>
          }
        />
        <FormControlLabel
          value="Option F"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>Project Management</Typography>
          }
        />
        <FormControlLabel
          value="Option G"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>
              IT Support and Helpdesk
            </Typography>
          }
        />
        <FormControlLabel
          value="Option H"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>
              Artificial Intelligence (AI)
            </Typography>
          }
        />
        <FormControlLabel
          value="Option I"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>
              Other (Please Specify)
            </Typography>
          }
        />
        <CustomTextfield
          placeholder="Please specify"
          sx={{ width: '50%', marginLeft: '45px' }}
        />
      </FormGroup>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '50%',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Button href="/sign-up" sx={BackBtnStyle}>
            <ArrowBackIcon />
            Back
          </Button>
          <Link href="/sign-up" sx={SignupAsBtnStyle}>
            Sign up as hirer
          </Link>
        </Stack>
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '30px',
          }}
        >
          <Link onClick={handleSkip} sx={SkipBtnStyle}>
            Skip
          </Link>
          <Button
            disabled={!selectedOption}
            onClick={handleNext}
            sx={NextBtnStyle}
          >
            Next
            <ArrowForwardIcon />
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Question1;
