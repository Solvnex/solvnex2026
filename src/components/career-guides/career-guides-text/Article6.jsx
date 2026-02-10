import { Box, Typography } from '@mui/material';
import React from 'react';
import {
  DescListStyle,
  DescStyle,
  SubtitleStyle,
  TitleStyle,
} from './CareerGuides.Styles';

const Article6 = ({ showTitle = true }) => {
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
          Salary Expectations and Setting Realistic Career Goals
        </Typography>
      )}
      <Typography sx={DescStyle}>
        Determining your salary expectations and setting realistic career goals
        are pivotal steps in your professional journey. These decisions can
        significantly impact your job satisfaction, financial stability, and
        overall career trajectory. In this guide, we will explore strategies to
        help you establish realistic career goals and align your salary
        expectations with your aspirations.
      </Typography>
      <Typography sx={SubtitleStyle}>
        1. Self-Assessment: Understand Your Values and Priorities
      </Typography>
      <Typography sx={DescListStyle}>
        Before setting career goals or discussing salary expectations, take the
        time to understand your values and priorities. What aspects of a job are
        most important to you? Is it financial compensation, work-life balance,
        career advancement, or personal fulfillment? Knowing your priorities
        will guide your goal setting.
      </Typography>
      <Typography sx={SubtitleStyle}>2. Research Industry Standards</Typography>
      <Typography sx={DescListStyle}>
        Conduct thorough research to understand industry standards for salary,
        benefits, and career progression. This knowledge provides a realistic
        benchmark for your salary expectations and career advancement goals.
      </Typography>
      <Typography sx={SubtitleStyle}>
        3. Consider Your Experience and Skill Set
      </Typography>
      <Typography sx={DescListStyle}>
        Your level of experience and skill set play a crucial role in
        determining your salary expectations. Evaluate your qualifications and
        compare them to industry standards to set realistic salary goals.
      </Typography>
      <Typography sx={SubtitleStyle}>
        4. Short-Term and Long-Term Goals
      </Typography>
      <Typography sx={DescListStyle}>
        Set both short-term and long-term career goals. Short-term goals can
        include specific job titles, certifications, or skill acquisitions
        within the next one to three years. Long-term goals may involve
        positions, roles, or achievements you aim to reach over a more extended
        period, such as five to ten years.
      </Typography>
      <Typography sx={SubtitleStyle}>5. Networking and Mentorship</Typography>
      <Typography sx={DescListStyle}>
        Connect with professionals in your industry and seek mentorship from
        experienced individuals. They can offer valuable insights and guidance
        on career progression and salary negotiations.
      </Typography>
      <Typography sx={SubtitleStyle}>6. Salary Negotiation Skills</Typography>
      <Typography sx={DescListStyle}>
        Develop effective salary negotiation skills. Learn how to present your
        value to employers and negotiate for fair compensation. Practice your
        negotiation techniques to increase your chances of securing the best
        possible offer.
      </Typography>
      <Typography sx={SubtitleStyle}>
        7. Flexibility and Adaptability
      </Typography>
      <Typography sx={DescListStyle}>
        While setting career goals, remain flexible and adaptable. The job
        market is dynamic, and opportunities may change over time. Be open to
        adjusting your goals as your circumstances and interests evolve.
      </Typography>
      <Typography sx={SubtitleStyle}>
        8. Balance Financial Goals with Job Satisfaction
      </Typography>
      <Typography sx={DescListStyle}>
        Consider the balance between financial goals and job satisfaction. A
        high-paying job may not always equate to career fulfillment. Weigh the
        pros and cons of potential career moves and ensure they align with your
        overall objectives.
      </Typography>
      <Typography sx={SubtitleStyle}>
        9. Seek Feedback and Evaluation
      </Typography>
      <Typography sx={DescListStyle}>
        Periodically evaluate your progress towards your career goals. Seek
        feedback from mentors or supervisors to assess your performance and
        identify areas for improvement.
      </Typography>
      <Typography sx={SubtitleStyle}>10. Stay Informed and Updated</Typography>
      <Typography sx={DescListStyle}>
        Stay informed about industry trends and changes. Continuously update
        your skills and knowledge to remain competitive in your field.
      </Typography>
      <Typography sx={DescStyle}>
        Setting realistic career goals and aligning your salary expectations is
        a dynamic process that requires self-awareness, industry knowledge, and
        adaptability. By considering your values, researching industry
        standards, and developing your skills, you can work towards achieving
        career success while maintaining a healthy work-life balance and
        financial stability. Remember that your career journey is unique, and
        your goals should reflect your individual aspirations and priorities.
      </Typography>
    </Box>
  );
};

export default Article6;
