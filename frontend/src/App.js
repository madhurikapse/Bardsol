import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import Navbar1 from './components/Navbar1';
import ImageSlider from './components/Mainpage/ImageSlider';
import HyperautomationSection from './components/Mainpage/HyperautomationSection';
import Industries from './components/Mainpage/Industries';
import CoreFocusAreas from './components/Mainpage/CoreFocusAreas';
import OurCustomers from './components/Mainpage/OurCustomers';
import Subscribe from './components/Mainpage/Subscribe';
import Ourpartners from './components/Mainpage/Ourpartner';
import BlogSection from './components/Mainpage/BlogSection';
import ContactUsForm from './components/Mainpage/ContactUsForm';
import ErrorBoundary from './components/Mainpage/ErrorBoundary';
import Footer from './components/Mainpage/Footer.js';

function App() {
  return (
  <>
 <div>
      <Navbar1/>
      <Navbar2/>
      <ImageSlider/>
      <HyperautomationSection/>
      <Industries/>
      <CoreFocusAreas/>
      <BrowserRouter>
      <OurCustomers/>
      <Subscribe/>
      <Ourpartners/>
      <BlogSection/>
      <ContactUsForm/>
     
      <ErrorBoundary>
        <Footer/>
      </ErrorBoundary>
      <Routes>
        <Route path="/navbar1" element={<Navbar1/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      </>
      
  );
}

export default App;
