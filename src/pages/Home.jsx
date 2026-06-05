import React from 'react';
import CustomNavbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Agences from '../components/Agences';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <Services />
      <Agences />
      <Footer />
    </>
  );
};

export default Home;
