import { useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Link,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  BackBtnStyle,
  NextBtnStyle,
  QuestionStyle,
  RadioOptionStyle,
  SkipBtnStyle,
} from '../Signup.Styles';
import CircleRadio from '@/components/custom-checkbox/CircleRadio';

const Question3 = ({ onNext, onBack, onSkip }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleBack = () => {
    onBack();
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
        How many total years of professional experience do you have in your
        field?
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
            <Typography sx={RadioOptionStyle}>Less than 1 year</Typography>
          }
        />
        <FormControlLabel
          value="Option B"
          control={<CircleRadio />}
          label={<Typography sx={RadioOptionStyle}>1-2 years</Typography>}
        />
        <FormControlLabel
          value="Option C"
          control={<CircleRadio />}
          label={<Typography sx={RadioOptionStyle}>3-5 years</Typography>}
        />
        <FormControlLabel
          value="Option D"
          control={<CircleRadio />}
          label={<Typography sx={RadioOptionStyle}>6-10 years</Typography>}
        />
        <FormControlLabel
          value="Option E"
          control={<CircleRadio />}
          label={<Typography sx={RadioOptionStyle}>11-15 years</Typography>}
        />
        <FormControlLabel
          value="Option F"
          control={<CircleRadio />}
          label={
            <Typography sx={RadioOptionStyle}>More than 15 years</Typography>
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
          <Button onClick={handleBack} sx={BackBtnStyle}>
            <ArrowBackIcon />
            Back
          </Button>
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

export default Question3;
