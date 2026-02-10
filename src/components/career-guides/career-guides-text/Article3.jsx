import { Box, Typography } from '@mui/material';
import React from 'react';
import {
  DescListStyle,
  DescStyle,
  SubtitleStyle,
  TitleStyle,
} from './CareerGuides.Styles';

const Article3 = ({ showTitle = true }) => {
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
          Tailoring Resumes for Different Job Roles
        </Typography>
      )}
      <Typography sx={DescStyle}>
        A well-crafted resume is your ticket to the job interview. However, one
        size does not fit all when it comes to resumes. To maximize your chances
        of landing the job you want, it&apos;s crucial to tailor your resume for
        different job roles. In this guide, we&apos;ll explore strategies to
        customize your resume and cover letter to match the specific
        requirements of various positions.
      </Typography>
      <Typography sx={SubtitleStyle}>
        1. Understand the Job Description
      </Typography>
      <Typography sx={DescListStyle}>
        Before you start customizing your resume, carefully analyze the job
        description for the role you&apos;re applying for. Identify the key
        skills, qualifications, and responsibilities the employer is seeking.
        This will be your blueprint for tailoring your resume.
      </Typography>
      <Typography sx={SubtitleStyle}>
        2. Highlight Relevant Experience
      </Typography>
      <Typography sx={DescListStyle}>
        For each job application, emphasize the experiences and achievements
        that are most relevant to the specific role. Your resume should showcase
        how your skills and background align with the needs of the employer.
      </Typography>
      <Typography sx={SubtitleStyle}>3. Use Keywords</Typography>
      <Typography sx={DescListStyle}>
        Many companies use applicant tracking systems (ATS) to screen resumes.
        To ensure your resume gets through, incorporate relevant keywords from
        the job description. This improves your chances of passing the initial
        screening.
      </Typography>
      <Typography sx={SubtitleStyle}>
        4. Create a Customized Objective or Summary
      </Typography>
      <Typography sx={DescListStyle}>
        Your resume&Apos;s objective or summary should reflect your interest in
        the specific role. Tailor it to show how your goals and skills align
        with what the employer is looking for.
      </Typography>
      <Typography sx={SubtitleStyle}>
        5. Customize Your Skills Section
      </Typography>
      <Typography sx={DescListStyle}>
        Adapt your skills section to highlight the abilities that are most
        pertinent to the job. Ensure that your skills match the key
        qualifications listed in the job description.
      </Typography>
      <Typography sx={SubtitleStyle}>6. Quantify Your Achievements</Typography>
      <Typography sx={DescListStyle}>
        Whenever possible, use quantifiable achievements to demonstrate your
        impact in previous roles. Numbers and metrics make your accomplishments
        more compelling.
      </Typography>
      <Typography sx={SubtitleStyle}>7. Customize Your Cover Letter</Typography>
      <Typography sx={DescListStyle}>
        Your cover letter should complement your tailored resume. Use it as an
        opportunity to further explain why you&apos;re a perfect fit for the
        role. Address the hiring manager by name if possible and reference the
        specific job title.
      </Typography>
      <Typography sx={SubtitleStyle}>
        8. Organize Your Resume Effectively
      </Typography>
      <Typography sx={DescListStyle}>
        Organize your resume in a way that highlights your most relevant
        experience and skills at the top. If you have work experience in
        different fields, consider using a combination resume format to showcase
        both.
      </Typography>
      <Typography sx={SubtitleStyle}>
        9. Remove Irrelevant Information
      </Typography>
      <Typography sx={DescListStyle}>
        Don&apos;t clutter your resume with irrelevant details. Focus on the
        aspects of your background that directly relate to the job you&apos;re
        applying for.
      </Typography>
      <Typography sx={SubtitleStyle}>10. Proofread Carefully</Typography>
      <Typography sx={DescListStyle}>
        Customizing your resume for different roles can introduce the risk of
        errors. Proofread your resume and cover letter meticulously to ensure
        they are free from typos and mistakes.
      </Typography>
      <Typography sx={DescStyle}>
        Customizing your resume for different job roles is a proactive step that
        can significantly improve your chances of securing interviews. By
        aligning your qualififcations, skills, and experiences with the specific
        needs of the employer, you shows that you&apos;re a dedicated and ideal.
      </Typography>
    </Box>
  );
};

export default Article3;
