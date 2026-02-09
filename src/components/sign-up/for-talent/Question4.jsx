import { useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import {
  BackBtnStyle,
  NextBtnStyle,
  QuestionStyle,
  RadioOptionStyle,
  SkipBtnStyle,
} from '../Signup.Styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SquareRadio from '@/components/custom-checkbox/SquareRadio';

const Question4 = ({ onNext, onBack, onSkip }) => {
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
        What type of projects or work are you interested in? <br />
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
          label={<Typography sx={RadioOptionStyle}>Full Time</Typography>}
        />
        <FormControlLabel
          value="Option B"
          control={<SquareRadio />}
          label={<Typography sx={RadioOptionStyle}>Part Time</Typography>}
        />
        <FormControlLabel
          value="Option C"
          control={<SquareRadio />}
          label={<Typography sx={RadioOptionStyle}>Hourly</Typography>}
        />
        <FormControlLabel
          value="Option D"
          control={<SquareRadio />}
          label={<Typography sx={RadioOptionStyle}>Flexible/Varies</Typography>}
        />
        <FormControlLabel
          value="Option E"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>I&apos;m not sure yet</Typography>
          }
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

export default Question4;
