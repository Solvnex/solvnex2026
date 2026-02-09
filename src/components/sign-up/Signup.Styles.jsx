export const OptionBtnStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { xs: 'center', md: 'flex-start' },
  alignItems: { xs: 'center', md: 'start' },
  width: { xs: '90vw', sm: '100%', md: '550px' },
  height: { xs: 'auto', md: '275px' },
  padding: { xs: '20px', md: '30px 72px 56px 30px' },
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0px 3px 6px #0000001A',
  textTransform: 'none',
  '&:hover': {
    background: '#fff',
    border: '4px solid #01b1a8',
    '& > :first-child': {
      color: '#01b1a8',
    },
  },
};

export const CheckIconStyle = {
  display: { xs: 'none', md: 'flex' },
  width: '30px',
  height: '30px',
  color: '#fff',
  marginBottom: '33px',
};

export const BtnDivStyle = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: { md: '77.5px' },
};

export const BtnIconStyle = {
  width: '60px',
  height: '60px',
  color: '#89CECA',
  marginRight: { md: '110px' },
  marginBottom: '10px',
};

export const BtnTitleStyle = {
  fontWeight: 700,
  fontSize: '42px',
  textAlign: { md: 'left' },
  color: '#212020',
};

export const BtnDescStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: '18px',
  color: '#212020',
};

export const QuestionStyle = {
  fontWeight: 600,
  fontSize: '40px',
  color: '#212020',
  marginBottom: '44px',
  width: '85%',
};

export const SubquestionStyle = {
  fontSize: '20px',
  color: '#212020',
  marginBottom: '60px',
  width: '85%',
};

export const FormquestionStyle = {
  fontWeight: 500,
  fontSize: '18px',
  color: '#504C4C',
  marginBottom: '10px',
};

export const RadioOptionStyle = {
  fontWeight: 500,
  fontSize: '18px',
  color: '#243140',
};

export const SkillCategoryStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px',
  marginX: '10px',
  fontSize: '16px',
  textAlign: 'left',
  color: '#212020',
  background: '#fff',
  '&:hover': {
    background: '#89CECA',
    borderRadius: '5px',
  },
  '&:focus': {
    background: '#89CECA',
    borderRadius: '5px',
  },
};

export const AddCategoryBtn = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '14px 20px',
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  borderRadius: '5px',
  color: '#01b1a8',
  gap: '10px',
  '&:hover': {
    color: '#01b1a8',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
  },
  '&:focus': {
    color: '#fff',
    background: '#01B1A8 0% 0% no-repeat padding-box',
  },
};

export const ChipStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '20px',
  width: 'max-content',
  border: '2px solid #00ab9f',
  background: 'white',
  fontSize: '18px',
  color: '#01b1a8',
  textTransform: 'none',
  '&:hover': { background: '#D5EFED', border: 'none' },
};

export const SelectedChipStyle = {
  ...ChipStyle,
  background: '#d5efed',
};

export const BackBtnStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '14px 20px',
  gap: '20px',
  background: 'transparent',
  borderRadius: '5px',
  color: '#01B1A8',

  '&:hover': {
    background: 'transparent',
  },

  '&.Mui-selected': {
    background: '#01b1a8',
    color: '#fff',
  },
};

export const SignupAsBtnStyle = {
  fontWeight: 500,
  fontSize: '18px',
  color: '#01B1A8',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
};

export const SkipBtnStyle = {
  fontWeight: 500,
  fontSize: '18px',
  color: '#01B1A8',
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    textDecoration: 'underline',
  },
};

export const NextBtnStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '14px 20px',
  gap: '20px',
  background: '#01b1a8',
  borderRadius: '5px',
  color: '#fff',

  '&:hover': {
    background: 'transparent',
    color: '#01b1a8',
  },

  '&.Mui-selected': {
    background: '#01b1a8',
    color: '#fff',
  },
};

export const SignupFormTitle = {
  fontWeight: 600,
  fontSize: '40px',
  color: '#212020',
};

export const SignupFormDesc = {
  fontSize: '20px',
  color: '#212020',
};

export const TabStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '14.5px',
  width: 'max-content',
  fontWeight: 700,
  fontSize: '18px',
  color: '#212020',
};

export const FormTitle = {
  fontWeight: 500,
  fontSize: '18px',
  color: '#504c4c',
  marginBottom: '10px',
};

export const SignupWithEmailBtn = {
  width: '100%',
  background: '#01b1a8',
  borderRadius: '5px',
  padding: '14px 0',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  '&:hover': {
    background: '#fff',
    color: '#01b1a8',
    border: '2px solid #00AB9F',
  },
};

export const SignupWithGoogleBtn = {
  width: '100%',
  background: '#EDEDED',
  borderRadius: '5px',
  padding: '14px 0',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '20px',
  color: '#212020',
  '&:hover': {
    background: '#ededed',
    color: '#212020',
  },
};
