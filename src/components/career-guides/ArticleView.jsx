import React from 'react';
import SecondaryLayout from '../layout/SecondaryLayout';
import ArticleViewHeader from './ArticleViewHeader';
import ReadMore from './ReadMore';
import { Box } from '@mui/material';
import LeaveAQuestion from '../faq/LeaveAQuestion';
import CommentSection from './CommentSection';

const ArticleView = ({ article }) => {
  return (
    <SecondaryLayout>
      <ArticleViewHeader article={article} />
      <ReadMore />
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          width: '100%',
          background: '#f9f8f9',
          padding: '60px 101px 100px',
          gap: '60px',
        }}
      >
        <LeaveAQuestion />
      </Box> */}
    </SecondaryLayout>
  );
};

export default ArticleView;
