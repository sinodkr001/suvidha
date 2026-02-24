import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Seo from './components/Seo';
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
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import FAQ from './components/FAQ';
import OutletTypes from './components/OutletTypes';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Seo
        title="POS Billing Software | Retail POS & GST Billing - Suvidha POS"
        description="Suvidha POS is POS billing software for retail & restaurants with GST billing, inventory management, reports, and 24/7 support. Book a free demo today."
        canonicalPath="/"
      />
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
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/outlet-types" element={<OutletTypes />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;