import { Box, Typography } from '@mui/material';
import React from 'react';
import {
  DescListStyle,
  DescStyle,
  SubtitleStyle,
  TitleStyle,
} from './CareerGuides.Styles';

const Article5 = ({ showTitle = true }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        gap: '30px',
      }}
    >
      {showTitle && (
        <Typography sx={TitleStyle}>
          Post-Interview Etiquette: Navigating the Next Steps with Professionalism
        </Typography>
      )}
      <Typography sx={DescStyle}>
        The job interview is a critical juncture in your career journey, but
        your actions and communications after the interview are equally
        important. Post-interview etiquette plays a vital role in leaving a
        positive impression on potential employers. In this guide, we&apos;ll
        explore the dos and don&apos;ts of post-interview etiquette to help you
        navigate the next steps with professionalism.
      </Typography>
      <Typography sx={SubtitleStyle}>1. Send a Thank-You Email</Typography>
      <Typography sx={DescListStyle}>
        One of the most crucial post-interview actions is sending a thank-you
        email to the interviewer. Express your gratitude for the opportunity to
        interview, reiterate your interest in the position, and briefly
        highlight your enthusiasm for the role.
      </Typography>
      <Typography sx={SubtitleStyle}>
        2. Customize Your Thank-You Note
      </Typography>
      <Typography sx={DescListStyle}>
        Make your thank-you note personal and specific. Mention something unique
        from the interview that demonstrates your attentiveness and engagement.
        This shows that you were genuinely interested in the conversation.
      </Typography>
      <Typography sx={SubtitleStyle}>
        3. Send Thank-You Notes Promptly
      </Typography>
      <Typography sx={DescListStyle}>
        Timeliness is key. Send your thank-you email within 24 hours of the
        interview while the conversation is still fresh in the
        interviewer&apos;s mind.
      </Typography>
      <Typography sx={SubtitleStyle}>4. Follow Up Strategically</Typography>
      <Typography sx={DescListStyle}>
        If you don&apos;t receive a response after sending a thank-you note,
        it&apos;s acceptable to follow up after a reasonable period, typically
        one to two weeks. Politely express your continued interest and inquire
        about the next steps in the hiring process.
      </Typography>
      <Typography sx={SubtitleStyle}>
        5. Stay Professional on Social Media
      </Typography>
      <Typography sx={DescListStyle}>
        Avoid sharing details about your interview experience or potential job
        offers on social media. It&apos;s essential to maintain a professional
        and discreet online presence throughout your job search.
      </Typography>
      <Typography sx={SubtitleStyle}>
        6. Don&apos;t Pester the Employer
      </Typography>
      <Typography sx={DescListStyle}>
        While it&apos;s acceptable to follow up after a reasonable period, avoid
        excessive or repetitive follow-up inquiries. Respect the employer&apos;s
        timeline and decision-making process.
      </Typography>
      <Typography sx={SubtitleStyle}>7. Handle Rejection Gracefully</Typography>
      <Typography sx={DescListStyle}>
        If you receive a rejection, respond graciously. Thank the employer for
        considering you and express your continued interest in the company. You
        never know when another opportunity might arise with the same employer.
      </Typography>
      <Typography sx={SubtitleStyle}>
        8. Seek Feedback (if Appropriate)
      </Typography>
      <Typography sx={DescListStyle}>
        If you receive a rejection and have a good rapport with the interviewer,
        consider politely asking for feedback on your interview performance.
        This can provide valuable insights for your future interviews.
      </Typography>
      <Typography sx={SubtitleStyle}>9. Continue Your Job Search</Typography>
      <Typography sx={DescListStyle}>
        While post-interview etiquette is important, don&apos;t put all your
        hopes on a single job opportunity. Continue your job search actively.
        This way, you&apos;ll have multiple prospects and options.
      </Typography>
      <Typography sx={SubtitleStyle}>10. Learn from Each Interview</Typography>
      <Typography sx={DescListStyle}>
        Use every interview experience as a learning opportunity. Reflect on
        what went well and what could be improved. Apply these lessons to
        enhance your performance in future interviews.
      </Typography>
      <Typography sx={DescStyle}>
        Post-interview etiquette is an integral part of your professional image.
        It demonstrates your professionalism, gratitude, and commitment to the
        job search process. Whether you receive a job offer or a rejection,
        handling the aftermath of an interview with grace and courtesy can leave
        a lasting impression and build a positive reputation in the professional
        world.
      </Typography>
    </Box>
  );
};

export default Article5;
