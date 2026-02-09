import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ScrollToTop from '../ui/ScrollToTop';

const SecondaryLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default SecondaryLayout;
