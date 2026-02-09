import { InputBase, styled } from '@mui/material';

export const CustomTextfield = styled(InputBase)({
  '& .MuiInputBase-input': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '16px 28px',
    borderRadius: '10px',
    background: '#EDEDED',
    fontWeight: '300',
    fontSize: '18px',
    color: '#504C4C',
  },
});

export const CustomInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '5px',
    position: 'relative',
    backgroundColor: '#F7F6F8',
    width: '269px',
    height: '36px',
    padding: '10px',
    fontSize: '16px',
    textAlign: 'left',
    lineHeight: '25px',
    color: '#212020',
  },
}));
