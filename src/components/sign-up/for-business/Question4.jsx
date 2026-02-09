import { useState } from 'react';
import { skillByCategory } from '../SkillData';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Chip,
  FormControl,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import {
  AddCategoryBtn,
  BackBtnStyle,
  ChipStyle,
  NextBtnStyle,
  QuestionStyle,
  SelectedChipStyle,
  SkillCategoryStyle,
  SkipBtnStyle,
} from '../Signup.Styles';
import { CustomInput, CustomTextfield } from '../../custom-textfield';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Question4 = ({ onNext, onBack, onSkip }) => {
  const [skill, setSkill] = useState('1');
  //   const [selectedCategory, setSelectedCategory] = useState([]);
  const [skillOption, setSkillOption] = useState([]);

  const handleChange = (event) => {
    const selectedSkill = event.target.value;
    setSkill(selectedSkill);
    setSkillOption(skillByCategory[selectedSkill] || []);
  };

  const handleSkillToggle = (selectedSkill) => {
    setSkillOption((prevSkills) => {
      if (prevSkills.includes(selectedSkill)) {
        return prevSkills.filter((skill) => skill !== selectedSkill);
      } else {
        return [...prevSkills, selectedSkill];
      }
    });
  };

  const isSkillSelected = (skill, skillOption) => {
    return skillOption.includes(skill);
  };

  const getIconForSkill = (skill) => {
    return skillOption.includes(skill) ? <CloseIcon /> : <AddIcon />;
  };

  const handleBack = () => {
    onBack();
  };

  const handleSkip = () => {
    onSkip();
  };

  const handleNext = () => {
    if ('') {
    }
    onNext();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={QuestionStyle}>
        What skills do you want to hire for your business/project?
      </Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '10px',
          margin: ' 0 0 16px 20px',
        }}
      >
        <Typography
          sx={{ fontWeight: 500, fontSize: '18px', color: '#504C4C' }}
        >
          Select Category
        </Typography>
        <FormControl>
          <Select input={<CustomInput />} value={skill} onChange={handleChange}>
            <MenuItem value={1} sx={SkillCategoryStyle}>
              Programming and Development
            </MenuItem>
            <MenuItem value={2} sx={SkillCategoryStyle}>
              Database Management
            </MenuItem>
            <MenuItem value={3} sx={SkillCategoryStyle}>
              Data Science and Analytics
            </MenuItem>
            <MenuItem value={4} sx={SkillCategoryStyle}>
              UI/UX Design
            </MenuItem>
            <MenuItem value={5} sx={SkillCategoryStyle}>
              Software Testing and Quality Assurance
            </MenuItem>
            <MenuItem value={6} sx={SkillCategoryStyle}>
              Project Management
            </MenuItem>
            <MenuItem value={7} sx={SkillCategoryStyle}>
              IT Support and Helpdesk
            </MenuItem>
            <MenuItem value={8} sx={SkillCategoryStyle}>
              Artificial Intelligence (AI)
            </MenuItem>
          </Select>
        </FormControl>
        <Button disabled sx={AddCategoryBtn}>
          <AddIcon />
          Add category
        </Button>
      </Stack>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '80%',
          gap: '10px',
          margin: '0 0 30px 20px',
        }}
      >
        {skillByCategory[skill]?.map((availableSkill) => (
          <Chip
            key={availableSkill}
            sx={
              isSkillSelected(availableSkill, skillOption)
                ? SelectedChipStyle
                : ChipStyle
            }
            label={availableSkill}
            onClick={() => handleSkillToggle(availableSkill)}
            icon={getIconForSkill(availableSkill)}
          />
        ))}
      </Stack>
      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '20px',
          margin: '0 0 61px 20px',
          width: '50%',
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            color: '#504c4c',
          }}
        >
          Other Skills
        </Typography>
        <CustomTextfield placeholder="Eg. Project Manager" />
        {/* <Chip sx={ChipStyle} label="New Added Skil" icon={<AddIcon />} /> */}
      </Stack>
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
            disabled={skillOption.length === 0}
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
