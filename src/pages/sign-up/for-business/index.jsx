import SecondaryLayout from '@/components/layout/SecondaryLayout';
import Question1 from '@/components/sign-up/for-business/Question1';
import Question2 from '@/components/sign-up/for-business/Question2';
import Question3 from '@/components/sign-up/for-business/Question3';
import Question4 from '@/components/sign-up/for-business/Question4';
import Question5 from '@/components/sign-up/for-business/Question5';
import Question6 from '@/components/sign-up/for-business/Question6';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

const ForBusiness = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleDone = () => {
    router.push('/sign-up/form');
  };

  const renderQuestion = () => {
    switch (step) {
      case 0:
        return <Question1 onNext={handleNext} onSkip={handleNext} />;
      case 1:
        return (
          <Question2
            onNext={handleNext}
            onBack={handleBack}
            onSkip={handleSkip}
          />
        );
      case 2:
        return (
          <Question3
            onNext={handleNext}
            onBack={handleBack}
            onSkip={handleSkip}
          />
        );
      case 3:
        return (
          <Question4
            onNext={handleNext}
            onBack={handleBack}
            onSkip={handleSkip}
          />
        );
      case 4:
        return (
          <Question5
            onNext={handleNext}
            onBack={handleBack}
            onSkip={handleSkip}
          />
        );
      case 5:
        return <Question6 onDone={handleDone} onBack={handleBack} />;
    }
  };

  return (
    <SecondaryLayout>
      <Box
        sx={{
          display: 'flex',
          padding: '92px 0 100.5px 127px',
          background: '#fcfcfc',
        }}
      >
        {renderQuestion()}
      </Box>
    </SecondaryLayout>
  );
};

export default ForBusiness;
