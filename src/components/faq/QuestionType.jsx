import { useState } from 'react';
import { Box, Tab, Tabs, styled } from '@mui/material';
import PropTypes from 'prop-types';
import GeneralQuestion from './GeneralQuestion';
import PaymentProcessQuestion from './PaymentProcessQuestion';
import MatchingSystemQuestion from './MatchingSystemQuestion';

const CustomTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  },
  width: '28%',
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textTransform: 'none',

  fontWeight: 600,
  fontSize: '20px',
  color: '#01b1a8',
  marginRight: '3%',

  '&.Mui-selected': {
    background: '#01B1A8 0% 0% no-repeat padding-box',
    border: '1px solid #01B1A8',
    borderRadius: '10px',
    padding: '20px',

    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      sx={{ width: '69%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function QuestionType() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'start',
        gap: '3%',
        width: '100%',
      }}
    >
      <CustomTabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <CustomTab label="General Questions" {...a11yProps(0)} />
        <CustomTab label="Payment Process" {...a11yProps(1)} />
        <CustomTab label="Matching System" {...a11yProps(2)} />
      </CustomTabs>

      <TabPanel value={value} index={0}>
        <GeneralQuestion />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PaymentProcessQuestion />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MatchingSystemQuestion />
      </TabPanel>
    </Box>
  );
}
