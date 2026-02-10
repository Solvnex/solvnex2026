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
import CircleIcon from '@mui/icons-material/Circle';
import { CareerGuidesData } from '@/app/data/careerGuidesData';
import { useState } from 'react';

const CircleIconStyle = {
  width: '4px',
  height: '4px',
  color: '#ff0000',
};

const ReadMore = ({ targetType }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const articles = targetType
    ? CareerGuidesData().filter((article) => article.Type === targetType)
    : CareerGuidesData();

  const articlesPerPage = 3;
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

  return (
    <Box sx={{ padding: { xs: '30px', md: '60px 128px 60px' }, background: '#fcfcfc' }}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '30px',
          color: '#212020',
          marginBottom: '30px',
        }}
      >
        Read Next Career Guides
      </Typography>
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
                    height: { xs: '220px', md: '400px' },
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
                      fontSize: { xs: '14px', md: '16px' },
                      color: '#fff',
                    }}
                  >
                    Coming Soon
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    marginBottom: '20px',
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 500, fontSize: { xs: '12px', md: '14px' }, color: '#504c4c' }}
                  >
                    {article.Date}
                  </Typography>
                  <CircleIcon sx={CircleIconStyle} />
                  <Typography sx={{ fontSize: { xs: '12px', md: '14px' }, color: '#504c4c' }}>
                    {article.Duration}
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '18px', md: '20px' },
                    color: '#212020',
                    marginBottom: '32px',
                    width: '100%',
                    height: { xs: 'auto', md: '50px' },
                  }}
                >
                  {article.Title.length > 65
                    ? `${article.Title.slice(0, 65)}...`
                    : article.Title}
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    fontWeight: 500,
                    fontSize: { xs: '14px', md: '16px' },
                    color: '#504c4c',
                  }}
                >
                  Read More
                  <ArrowForwardIcon sx={{ color: '#01b1a8' }} />
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
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '220px', md: '400px' },
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginBottom: '30px',
                  }}
                >
                  <Image src={article.Image} alt={article.Title} fill style={{ objectFit: 'cover' }} />
                </Box>
                <Stack
                  sx={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    marginBottom: '20px',
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 500, fontSize: { xs: '12px', md: '14px' }, color: '#504c4c' }}
                  >
                    {article.Date}
                  </Typography>
                  <CircleIcon sx={CircleIconStyle} />
                  <Typography sx={{ fontSize: { xs: '12px', md: '14px' }, color: '#504c4c' }}>
                    {article.Duration}
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '18px', md: '20px' },
                    color: '#212020',
                    marginBottom: '32px',
                    width: '100%',
                    height: { xs: 'auto', md: '50px' },
                  }}
                >
                  {article.Title.length > 65
                    ? `${article.Title.slice(0, 65)}...`
                    : article.Title}
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    fontWeight: 500,
                    fontSize: { xs: '14px', md: '16px' },
                    color: '#504c4c',
                  }}
                >
                  Read More
                  <ArrowForwardIcon sx={{ color: '#01b1a8' }} />
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
    </Box>
  );
};

export default ReadMore;
