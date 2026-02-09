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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  BackBtnStyle,
  NextBtnStyle,
  QuestionStyle,
  RadioOptionStyle,
  SkipBtnStyle,
} from '../Signup.Styles';
import SquareRadio from '@/components/custom-checkbox/SquareRadio';
import { CustomTextfield } from '@/components/custom-textfield';

const Question2 = ({ onNext, onBack, onSkip }) => {
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
        What are your skills and areas of expertise? <br />
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
          label={<Typography sx={RadioOptionStyle}>Database Design</Typography>}
        />
        <FormControlLabel
          value="Option B"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>
              SQL and NoSQL Databases
            </Typography>
          }
        />
        <FormControlLabel
          value="Option C"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>
              Database Administration
            </Typography>
          }
        />
        <FormControlLabel
          value="Option D"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>Data Architecture</Typography>
          }
        />
        <FormControlLabel
          value="Option E"
          control={<SquareRadio />}
          label={<Typography sx={RadioOptionStyle}>Data Analysis</Typography>}
        />
        <FormControlLabel
          value="Option F"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>Machine Learning</Typography>
          }
        />
        <FormControlLabel
          value="Option G"
          control={<SquareRadio />}
          label={
            <Typography sx={RadioOptionStyle}>Data Visualization</Typography>
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
            <Typography sx={RadioOptionStyle}>Big Data Technologies</Typography>
          }
        />
        <FormControlLabel
          value="Option J"
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

export default Question2;
