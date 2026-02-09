import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import {
  BackBtnStyle,
  FormquestionStyle,
  NextBtnStyle,
  QuestionStyle,
  SubquestionStyle,
} from '../Signup.Styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileUploadIcon from '@mui/icons-material/FileUploadOutlined';
import PdfIcon from '@mui/icons-material/PictureAsPdfOutlined';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import AddIcon from '@mui/icons-material/Add';
import CustomLinearProgress from '@/components/custom-progress/CustomLinearProgress';
import { CustomTextfield } from '@/components/custom-textfield';

const Question6 = ({ onDone, onBack }) => {
  const handleBack = () => {
    onBack();
  };

  const handleDone = () => {
    onDone();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ ...QuestionStyle, marginBottom: '26px' }}>
        Help us understand your expertise.
      </Typography>
      <Typography sx={SubquestionStyle}>
        Tell us about your skills. Providing details here will help us match you
        with the right projects. Please share as much as you can for successful
        project matching.
      </Typography>
      <Stack sx={{ flexDirection: 'column', marginLeft: '20px' }}>
        <Typography sx={FormquestionStyle}>
          Upload your related portfolio or sample work
        </Typography>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px dashed #00ab9f',
            borderRadius: '5px',
            width: '50%',
            height: '218px',
            marginBottom: '20px',
            padding: '57px 155px',
          }}
        >
          <FileUploadIcon
            sx={{
              width: '25px',
              height: '25px',
              color: '#01b1a8',
              marginBottom: '27.45px',
            }}
          />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '18px',
              color: '#504C4C',
              marginBottom: '21px',
            }}
          >
            Drag & Drop or <a style={{ color: '#01b1a8' }}>Choose</a> file to
            upload
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '18px',
              color: '#504C4C',
            }}
          >
            PDF or JPEG
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
            width: '50%',
            height: '117px',
            borderRadius: '5px',
            background: '#DCEBE7',
            marginBottom: '30px',
            padding: '20px',
            gap: '12px',
          }}
        >
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'start',
              gap: '8px',
              width: '100%',
            }}
          >
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '57px',
                height: '57px',
                background: 'white',
                borderRadius: '5px',
                border: '1px solid #DCEBE7',
              }}
            >
              <PdfIcon
                sx={{ width: '25px', height: '25px', color: '#01b1a8' }}
              />
            </Stack>
            <Stack
              sx={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '12px',
                width: '100%',
              }}
            >
              <Stack
                sx={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: '16px',
                    textAlign: 'left',
                    lineHeight: '15px',
                    color: '#01b1a8',
                  }}
                >
                  Portfolio.pdf
                </Typography>
                <IconButton>
                  <CloseIcon
                    sx={{ width: '18px', height: '18px', color: '#959595' }}
                  />
                </IconButton>
              </Stack>
              <Stack
                sx={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '16px',
                    textAlign: 'left',
                    lineHeight: '15px',
                    color: '#504C4C',
                  }}
                >
                  441KB . 2 seconds left
                </Typography>
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '16px',
                    textAlign: 'left',
                    lineHeight: '15px',
                    color: '#504C4C',
                  }}
                >
                  60%
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <CustomLinearProgress />
        </Stack>
        <Typography sx={FormquestionStyle}>
          Share your related link to your online portfolio or work samples
        </Typography>
        <CustomTextfield
          placeholder="Paste link"
          sx={{ marginBottom: '20px', width: '50%' }}
        />
        <Button
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            padding: '14px 20px',
            borderRadius: '5px',
            background: '#fff',
            lineHeight: '20px',
            color: '#01b1a8',
            marginBottom: '125px',
            width: 'max-content',

            '&:hover': {
              background: '#01b1a8',
              color: 'white',
            },
          }}
        >
          <AddIcon />
          Add link
        </Button>
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
