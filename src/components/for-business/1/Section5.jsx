/* eslint-disable @next/next/no-img-element */
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

const Section5 = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepHover = (step) => {
    setActiveStep(step);
  };
  return (
    <Stack sx={{ flexDirection: 'column', padding: '80px 110px 80px 181px' }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '45px',
          color: '#212020',
          marginBottom: '50px',
        }}
      >
        Sit back and relax! Everything at your fingertips…
      </Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'start',
        }}
      >
        <Stack sx={{ width: '60%' }}>
          {activeStep === 1 && (
            <img
              src="/images/loginSample.png"
              alt="..."
              width="347px"
              height="501px"
            />
          )}
          {activeStep === 2 && (
            <img
              src="/images/profileSetup.png"
              alt="..."
              width="660px"
              height="548px"
            />
          )}
          {activeStep === 3 && (
            <img
              src="/images/postJob.png"
              alt="..."
              width="690px"
              height="448px"
            />
          )}
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: '40%', gap: '24px' }}>
          {[1, 2, 3].map((step) => (
            <Stack
              key={step}
              onMouseEnter={() => handleStepHover(step)}
              sx={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'start',
                gap: '15px',
                cursor: 'pointer',
              }}
            >
              <Stack
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '60px',
                  minHeight: '60px',
                  background:
                    step === activeStep
                      ? '#01B1A8 0% 0% no-repeat padding-box'
                      : '#DED9D9 0% 0% no-repeat padding-box',
                  boxShadow: '0px 3px 6px #00000029',
                  borderRadius: '10px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '30px',
                    color: step === activeStep ? '#fff' : '#212020',
                  }}
                >
                  {step}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'start',
                  gap: '10px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '25px',
                    color: step === activeStep ? '#01b1a8' : '#212020',
                  }}
                >
                  {step === 1 && 'Sign Up For Free'}
                  {step === 2 && 'Profile Set Up'}
                  {step === 3 && 'Post A Job'}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '18px',
                    color: step === activeStep ? '#01b1a8' : '#504C4C',
                  }}
                >
                  {step === 1 &&
                    "Begin your journey with Solvnex by signing up for a free account. It's quick, easy, and the first step towards unlocking a world of talent."}
                  {step === 2 &&
                    'This step ensures your profile reflects the essence of your project and sets the stage for effective collaboration.'}
                  {step === 3 &&
                    'This step ensures your profile reflects the essence of your project and sets the stage for effective collaboration.'}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section5;
