import { CareerGuidesData } from '@/app/data/careerGuidesData';
import ArticleView from '@/components/career-guides/ArticleView';
import { useRouter } from 'next/router';
import React from 'react';

const CareerGuides = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = CareerGuidesData().find((article) => article.id === id);

  if (!article) {
    return <p>Article not found</p>;
  }

  return <ArticleView article={article} />;
};

export default CareerGuides;
