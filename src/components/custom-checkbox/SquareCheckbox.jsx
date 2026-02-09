import { Checkbox, styled } from '@mui/material';

const SquareIcon = styled('span')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  width: '20px',
  height: '20px',
  background: '#EDEDED 0% 0% no-repeat padding-box',
});

const SquareCheckedIcon = styled(SquareIcon)({
  backgroundColor: '#01b1a8',
  '&:before': {
    display: 'block',
    width: '20px',
    height: '20px',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
});

function SquareCheckbox() {
  return (
    <Checkbox
      sx={{}}
      disableRipple
      color="default"
      checkedIcon={<SquareCheckedIcon />}
      icon={<SquareIcon />}
    />
  );
}

export default SquareCheckbox;
