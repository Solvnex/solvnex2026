import { Radio } from '@mui/material';
import { styled } from '@mui/system';

const CircleIcon = styled('span')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  width: '25px',
  height: '25px',
  border: '2px solid #01b1a8',
  backgroundColor: 'transparent',
  'input:hover ~ &': {
    backgroundColor: 'transparent',
    backgroundImage: '#01b1a8',
    '&:before': {
      display: 'flex',
      width: '23px',
      height: '23px',
      backgroundImage: 'radial-gradient(#01b1a8,#01b1a8 50%,transparent 0%)',
      content: '""',
    },
  },
});

const CircleCheckedIcon = styled(CircleIcon)({
  backgroundColor: 'transparent',
  backgroundImage: '#01b1a8',
  '&:before': {
    display: 'flex',
    width: '23px',
    height: '23px',
    backgroundImage: 'radial-gradient(#01b1a8,#01b1a8 50%,transparent 0%)',
    content: '""',
  },
});

function CircleRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<CircleCheckedIcon />}
      icon={<CircleIcon />}
      {...props}
    />
  );
}

export default CircleRadio;
