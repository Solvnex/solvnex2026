import React from 'react';
import Navbar from '../navbar/Navbar';
import BlackFooter from '../footer/BlackFooter';
import ScrollToTop from '../ui/ScrollToTop';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ScrollToTop />
      <BlackFooter />
    </>
  );
};

export default MainLayout;
