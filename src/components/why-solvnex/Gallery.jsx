/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';

const imageData = [
  '/images/galleryImage1.png',
  '/images/galleryImage2.png',
  '/images/galleryImage3.png',
];

const Gallery = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '35px',
        overflow: 'scroll',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          width: '0.4em',
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'transparent',
        },
      }}
    >
      {imageData.map((imagePath, index) => (
        <img
          key={index}
          src={imagePath}
          alt={`Image ${index + 1}`}
          width="810px"
          height="556px"
        />
      ))}
    </Box>
  );
};

export default Gallery;
