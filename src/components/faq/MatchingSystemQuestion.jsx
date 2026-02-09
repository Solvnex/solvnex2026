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

export default function MatchingSystemQuestion() {
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
          How does e-ROTA match gig professionals with task owners?
        </AccordionSummary>
        <AccordionDetails>
          We utilise the information our gig professional provide in their
          platform and match it with the requirements of our Task Owners, we
          gather information like skills, certificate, work experience, rate
          reviews and more.
        </AccordionDetails>
      </Accordion>
      <Accordion
      disabled
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          How do gig professionals benefit from e-ROTA’s selection system?
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
