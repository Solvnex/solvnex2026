import { Box } from '@mui/material';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const imageData = [
  '/images/galleryImage1.png',
  '/images/galleryImage2.png',
  '/images/galleryImage3.png',
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const el = scrollRef.current;
    if (!el) return;
    let rafId;
    const step = 0.6;
    const tick = () => {
      if (!paused) {
        el.scrollLeft += step;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: { xs: '16px', md: '35px' },
        overflowX: 'auto',
        padding: { xs: '0 30px', md: '0' },
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          height: '0.4em',
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'transparent',
        },
      }}
      ref={scrollRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      data-testid="gallery-container"
    >
      {imageData.map((imagePath, index) => (
        <Image
          key={index}
          src={imagePath}
          alt={`Image ${index + 1}`}
          width={810}
          height={556}
          style={{ width: '100%', height: 'auto' }}
        />
      ))}
    </Box>
  );
};

export default Gallery;
