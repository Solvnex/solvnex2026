import { useState } from 'react';
import {
  Button,
  RadioGroup,
  Typography,
  Stack,
  Box,
  FormControlLabel,
  Link,
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
import CircleRadio from '@/components/custom-checkbox/CircleRadio';

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
      <Typography sx={QuestionStyle}>
        Which service are you interested in?
      </Typography>
      <RadioGroup
        sx={{ gap: '30px', marginBottom: '60px', paddingLeft: '20px' }}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <FormControlLabel
          value="Option A"
          control={<CircleRadio />}
          label={
            <Typography sx={RadioOptionStyle}>
              Solvnex Matching Platform: Recruit Task-Based
            </Typography>
          }
        />
        <FormControlLabel
          value="Option B"
          control={<CircleRadio />}
          label={
            <Typography sx={RadioOptionStyle}>
              Recruitment Outsourcing : Project-Based Talents
            </Typography>
          }
        />
        <FormControlLabel
          value="Option C"
          control={<CircleRadio />}
          label={<Typography sx={RadioOptionStyle}>Both</Typography>}
        />
        <FormControlLabel
          value="Option D"
          control={<CircleRadio />}
          label={
            <Typography sx={RadioOptionStyle}>I&apos;m not sure yet</Typography>
          }
        />
      </RadioGroup>
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
            Sign up as freelancer
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
