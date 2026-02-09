import { Box, Button, Link, Typography } from '@mui/material';
import SecondaryLayout from '@/components/layout/SecondaryLayout';
import { useRouter } from 'next/router';
import {
  QuestionStyle,
  SubquestionStyle,
} from '@/components/sign-up/Signup.Styles';
import { CustomTextfield } from '@/components/custom-textfield';

const SignupSuccess = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/sign-up/call-arranged');
  };
  return (
    <SecondaryLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '92px 0 100.5px 127px',
          background: '#fcfcfc',
        }}
      >
        <Typography sx={{ ...QuestionStyle, marginBottom: '26px' }}>
          Sign up successful. Let&apos;s kick things off!
        </Typography>
        <Typography sx={SubquestionStyle}>
          Thank you for registering. We&apos;ll be in touch by phone soon to
          discuss your project in detail. Our experienced team is eager to
          understand your unique business requirements to ensure a perfect
          match.
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '20px',
            color: '#212020',
            marginBottom: '30px',
          }}
        >
          Please choose call time{' '}
          <span style={{ fontWeight: 400 }}>(optional)</span>
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            color: '#504C4C',
            marginBottom: '10px',
          }}
        >
          Date
        </Typography>
        <CustomTextfield
          type="Date"
          sx={{ width: '50%', marginBottom: '20px' }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            color: '#504C4C',
            marginBottom: '10px',
          }}
        >
          Time
        </Typography>
        <CustomTextfield
          type="Time"
          sx={{ width: '50%', marginBottom: '30px' }}
        />
        <Button
          onClick={handleClick}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '13.5px 244.5px',
            background: '#01B1A8 0% 0% no-repeat padding-box',
            borderRadius: '5px',
            color: '#fff',
            width: '50%',
            marginBottom: '20px',
            '&:hover': {
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              border: '2px solid #00AB9F',
              color: '#00AB9F',
            },
          }}
        >
          Arrange a Call
        </Button>
        <Link
          href="/sign-up/hiring-process"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 600,
            fontSize: '18px',
            color: '#01B1A8',
            textDecoration: 'none',
            width: '50%',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          I will like to know about the hiring process
        </Link>
      </Box>
    </SecondaryLayout>
  );
};

export default SignupSuccess;
