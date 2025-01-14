import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Conditions from '../components/Conditions';
import About from '../components/About';
import Reviews from '../components/Reviews';
import PatientForms from '../components/PatientForms';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Conditions />
      <About />
      <PatientForms />
      <Reviews />
      <Footer />
    </>
  );
};

export default HomePage;