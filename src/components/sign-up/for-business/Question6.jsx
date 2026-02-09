import {
  Box,
  Button,
  FormControlLabel,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import {
  BackBtnStyle,
  FormquestionStyle,
  NextBtnStyle,
  QuestionStyle,
  RadioOptionStyle,
  SubquestionStyle,
} from '../Signup.Styles';
import { CustomTextfield } from '../../custom-textfield';
import CircleRadio from '../../custom-checkbox/CircleRadio';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Question6 = ({ onDone, onBack }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleBack = () => {
    onBack();
  };

  const handleDone = () => {
    onDone();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ ...QuestionStyle, marginBottom: '26px' }}>
        Help us understand your business.
      </Typography>
      <Typography sx={SubquestionStyle}>
        These questions help us understand your business needs and project
        requirements. Please provide as much detail as possible for successful
        talent matching.
      </Typography>
      <Stack sx={{ flexDirection: 'column', marginLeft: '20px' }}>
        <Typography sx={FormquestionStyle}>
          What is the name of your project, or can you provide a brief
          description? <span style={{ color: '#01b1a8' }}>*</span>
        </Typography>
        <CustomTextfield
          placeholder="Enter your project name or project description"
          sx={{ width: '50%', marginBottom: '30px' }}
        />
        <Typography sx={FormquestionStyle}>
          Is there any other information or specific requests you&apos;d like to
          share regarding your project requirements?
        </Typography>
        <CustomTextfield
          placeholder="Please describe"
          sx={{ width: '50%', marginBottom: '30px' }}
        />
        <Typography sx={{ ...FormquestionStyle, marginBottom: '31px' }}>
          Are there any legal or industry-specific compliance requirements that
          need to be considered in this project?
        </Typography>
        <RadioGroup
          sx={{ gap: '30px', marginBottom: '60px' }}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <FormControlLabel
            value="Option A"
            control={<CircleRadio />}
            label={<Typography sx={RadioOptionStyle}>No</Typography>}
          />
          <FormControlLabel
            value="Option B"
            control={<CircleRadio />}
            label={<Typography sx={RadioOptionStyle}>Yes</Typography>}
          />
          <CustomTextfield
            placeholder="If yes, please explain the compliance requirements"
            sx={{ width: '50%', marginLeft: '25px' }}
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
            <Button onClick={handleDone} sx={NextBtnStyle}>
              Next
              <ArrowForwardIcon />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Question6;
