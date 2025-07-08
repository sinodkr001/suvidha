import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PosFeatures from './components/PosFeatures';
import WhyChooseUs from './components/WhyChooseUs';
import CoreFeatures from './components/CoreFeatures';
import StoreTypes from './components/StoreTypes';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PosFeatures />
      <WhyChooseUs />
      <CoreFeatures />
      <StoreTypes />
      <KeyFeatures />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;