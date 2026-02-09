import { LinearProgress, linearProgressClasses, styled } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)({
  display: 'flex',
  width: '100%',
  height: '8px',
  borderRadius: '5px',
  marginBottom: '0px',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'white',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: '5px',
    backgroundColor: '#01b1a8',
  },
});

const CustomLinearProgress = () => {
  return <BorderLinearProgress variant="determinate" value={60} />;
};

export default CustomLinearProgress;
