import React from 'react';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Agences from './components/Agences';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <Services />
      <Agences />
      <Footer />
    </>
  );
}

export default App;
