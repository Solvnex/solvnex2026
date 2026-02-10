import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import { responsive } from '@/components/shared/responsive';

const Section5 = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepHover = (step) => {
    setActiveStep(step);
  };
  return (
    <Stack sx={{ flexDirection: 'column', padding: { xs: '30px', md: '80px 110px 80px 181px' } }}>
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
          flexDirection: responsive.rowToCol,
          justifyContent: 'space-between',
          alignItems: 'start',
          gap: { xs: '24px', md: '0' },
        }}
      >
        <Stack sx={{ width: { xs: '100%', md: '60%' } }}>
          {activeStep === 1 && (
            <Image src="/images/talentSignup.png" alt="talentSignup" width={347} height={501} style={{ width: '100%', height: 'auto' }} />
          )}
          {activeStep === 2 && (
            <Image src="/images/talentProfileSetup.png" alt="talentProfileSetup" width={660} height={548} style={{ width: '100%', height: 'auto' }} />
          )}
          {activeStep === 3 && (
            <Image src="/images/talentJobmatch.png" alt="talentJobmatch" width={690} height={448} style={{ width: '100%', height: 'auto' }} />
          )}
        </Stack>
        <Stack sx={{ flexDirection: 'column', width: { xs: '100%', md: '40%' }, gap: '24px' }}>
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
                  {step === 3 && 'Get Matched'}
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
                    'This step is your gateway to connecting with skilled professionals who can bring your project to life.'}
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
