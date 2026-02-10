/* eslint-disable @next/next/no-img-element */
import {
  Stack,
  Typography,
  Grid,
  Link,
  Button,
  Pagination,
  PaginationItem,
  Breadcrumbs,
  Box,
} from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CareerGuidesData } from '@/app/data/careerGuidesData';
import { useState } from 'react';

const ArticleList = ({ targetType }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const articles = targetType
    ? CareerGuidesData().filter((article) => article.Type === targetType)
    : CareerGuidesData();

  const articlesPerPage = 6;
  const totalArticles = articles.length;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticle = articles.slice(
    indexOfFirstArticle,
    Math.min(indexOfLastArticle, totalArticles)
  );

  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const breadcrumbs = [
    <Typography
      key="1"
      href="/career-guides"
      sx={{
        fontWeight: 600,
        fontSize: '16px',
        color: '#01b1a8',
      }}
    >
      All
    </Typography>,
    <Link
      key="2"
      href="/career-guides/career-development"
      sx={{
        fontWeight: 500,
        fontSize: '16px',
        color: '#212020',
        textDecoration: 'none',
      }}
    >
      Career Development
    </Link>,
    <Link
      key="3"
      href="/career-guides/interview-preparation"
      sx={{
        fontWeight: 500,
        fontSize: '16px',
        color: '#212020',
        textDecoration: 'none',
      }}
    >
      Interview Preparation
    </Link>,
    <Link
      key="4"
      href="/career-guides/resume-and-cover-letter"
      sx={{
        fontWeight: 500,
        fontSize: '16px',
        color: '#212020',
        textDecoration: 'none',
      }}
    >
      Resume & Cover Letter
    </Link>,
    <Link
      key="5"
      href="/career-guides/pay-and-salary-discovery"
      sx={{
        fontWeight: 500,
        fontSize: '16px',
        color: '#212020',
        textDecoration: 'none',
      }}
    >
      Pay & Salaray Disoveries
    </Link>,
  ];

  return (
    <>
      <Stack
        sx={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'end',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '24px',
        }}
      >
        <Typography sx={{ fontSize: '16px', color: '#212020' }}>
          Showing {indexOfFirstArticle + 1} -{' '}
          {Math.min(indexOfLastArticle, articles.length)} of {articles.length}{' '}
          results
        </Typography>
        <Button
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            gap: '10px',
            background: '#F7F6F8 0% 0% no-repeat padding-box',
            borderRadius: '5px',
            fontWeight: 400,
            fontSize: '16px',
            color: '#212020',
          }}
        >
          Filter by latest <ArrowDownIcon />
        </Button>
      </Stack>
      <Stack
        sx={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '39px',
        }}
      >
        <Typography>Filter by</Typography>
        <Breadcrumbs sx={{}} separator="/">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Grid container spacing={2}>
        {currentArticle.map((article) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            key={article.id}
            sx={{ gap: '33px' }}
          >
            {article.notReadable ? (
              <Stack
                sx={{
                  position: 'relative',
                }}
              >
                <Stack
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '400px',
                    borderRadius: '10px',
                    marginBottom: '30px',
                    backgroundImage: `url(${article.Image})`,
                    backgroundBlendMode: 'darken',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#00000099',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#fff',
                    }}
                  >
                    Coming Soon
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '20px',
                    color: '#212020',
                    marginBottom: '12px',
                    width: { md: '95%' },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {article.Title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#212020',
                  }}
                >
                  {article.Type}
                </Typography>
              </Stack>
            ) : (
              <Link
                href={`/career-guides/${article.id}`}
                passHref
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'start',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  maxWidth: { xs: '100%', md: '373px' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '220px', md: '320px' },
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                  }}
                >
                  <Image src={article.Image} alt={article.Title} fill style={{ objectFit: 'cover' }} />
                </Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '18px', md: '20px' },
                    color: '#212020',
                    marginBottom: '12px',
                    width: { md: '95%' },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {article.Title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: '14px', md: '16px' },
                    color: '#212020',
                  }}
                >
                  {article.Type}
                </Typography>
              </Link>
            )}
          </Grid>
        ))}
      </Grid>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, newPage) => handlePageChange(newPage)}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              sx={{
                display:
                  item.type === 'previous'
                    ? currentPage > 1
                      ? 'block'
                      : 'none'
                    : item.type === 'next'
                    ? currentPage < totalPages
                      ? 'block'
                      : 'none'
                    : 'block',
              }}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
          sx={{
            marginTop: '60px',
            '& .MuiPaginationItem-root': {
              fontWeight: 600,
              fontSize: '16px',
              color: '#212020',
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              width: '48px',
              height: '48px',
              background: '#01b1a8',
              fontWeight: 600,
              fontSize: '16px',
              color: '#fff',
            },
          }}
        />
      )}
    </>
  );
};

export default ArticleList;
