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
import CircleRadio from '@/components/custom-checkbox/CircleRadio';
import {
  BackBtnStyle,
  NextBtnStyle,
  QuestionStyle,
  RadioOptionStyle,
  SkipBtnStyle,
} from '../Signup.Styles';

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
        What&apos;s your preferred time commitment for the talent?
      </Typography>
      <RadioGroup
        sx={{ gap: '30px', marginBottom: '60px', paddingLeft: '20px' }}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <FormControlLabel
          value="Option A"
          control={<CircleRadio />}
          label={<Typography sx={RadioOptionStyle}>Full Time</Typography>}
        />
        <FormControlLabel
          value="Option B"
          control={<CircleRadio />}
          label={<Typography sx={RadioOptionStyle}>Part Time</Typography>}
        />
        <FormControlLabel
          value="Option C"
          control={<CircleRadio />}
          label={<Typography sx={RadioOptionStyle}>Hourly</Typography>}
        />
        <FormControlLabel
          value="Option D"
          control={<CircleRadio />}
          label={<Typography sx={RadioOptionStyle}>Flexible/Varies</Typography>}
        />
        <FormControlLabel
          value="Option E"
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
