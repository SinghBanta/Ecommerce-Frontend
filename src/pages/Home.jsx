
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import BannerSection from '../components/Layout/BannerSection';
import CategorySection from '../components/Layout/CategorySection';
import PromotionalGrid from '../components/Layout/PromotionalGrid';

const Home = () => {
  return (
    <>
      <Navbar />
      <BannerSection/>
      <CategorySection/>
      <PromotionalGrid/>
      <Footer />
    </>
  );
};

export default Home;
