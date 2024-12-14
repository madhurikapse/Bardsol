import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import Navbar1 from './components/Navbar1';
import ImageSlider from './components/Mainpage/ImageSlider';
import HyperautomationSection from './components/Mainpage/HyperautomationSection';
import Industries from './components/Mainpage/Industries';
import CoreFocusAreas from './components/Mainpage/CoreFocusAreas';
import OurCustomers from './components/Mainpage/OurCustomers';


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
      <Routes>
        <Route path="/navbar1" element={<Navbar1/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      </>
      
  );
}

export default App;
