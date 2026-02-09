import React, { useEffect, useState, useCallback } from 'react';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    const y = typeof window !== 'undefined' ? window.scrollY : 0;
    setVisible(y > 300);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  const handleClick = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <Fab
      data-testid="scroll-to-top"
      onClick={handleClick}
      aria-label="scroll to top"
      sx={{
        position: 'fixed',
        bottom: { xs: 24, md: 32 },
        right: { xs: 24, md: 32 },
        background: '#01b1a8',
        color: '#fff',
        '&:hover': { background: '#01b1a8' },
        boxShadow: '0px 3px 6px #00000029',
      }}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
};

export default ScrollToTop;
