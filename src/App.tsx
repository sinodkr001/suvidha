import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ContactSales from './components/ContactSales';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function HomePage() {
  return (
    <>
      <Hero />
      <PosFeatures />
      <WhyChooseUs />
      <CoreFeatures />
      <StoreTypes />
      <KeyFeatures />
      <HowItWorks />
      <CTA />
      <Testimonials />
      <ContactSales />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;