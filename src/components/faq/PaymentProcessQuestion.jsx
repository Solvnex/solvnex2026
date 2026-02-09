import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))({
  background: '#fcfcfc',
  '&:before': {
    display: 'none',
  },
});

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ fontSize: '1.5rem', color: '#01b1a8' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    fontWeight: 500,
    fontSize: '18px',
    color: '#01b1a8',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '18px',
  color: '#504C4C',
}));

export default function PaymentProcessQuestion() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          Does e-ROTA take a portion of gig professional’s earnings?
        </AccordionSummary>
        <AccordionDetails>
          Yes. e-ROTA will charge a service fee of 10% out of total transaction
          value of each tasks completed by the gig professionals, this
          chargeable rate is for us to maintain the platform, support our team
          and continuously bring great solutions for the workforce in Malaysia.
        </AccordionDetails>
      </Accordion>
      <Accordion
      disabled
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          How long does it take for a gig professional to get paid once they
          have finished a project/milestone?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
