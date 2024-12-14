import React, { useState } from 'react';
import './slider.css'; // Make sure to add some styles for the slider

const Slider = () => {
  const slides = [
    {
      image: 'https://bradsol.com/wp-content/uploads/2023/08/banner-01.png',
      alt: 'Process Automation',
      title: 'Embrace the Future of AI-Powered Automation',
      description: 'Gartner Predicts RPA to Revolutionize Industries by 2033.',
      button1Link: '/schedule-a-meeting/',
      button1Text: 'Schedule a Call',
      button2Link: 'https://bradsol.com/process-automation/',
      button2Text: 'Know More',
    },
    {
      image: 'https://bradsol.com/wp-content/uploads/2023/08/banner-03.png',
      alt: 'Intelligent Automation',
      title: 'Empower business evolution and craft personalized solutions through the power of Gen AI',
      description: 'Transforming Industries and Creating New Opportunities!',
      button1Link: '/schedule-a-meeting/',
      button1Text: 'Schedule a Call',
      button2Link: 'https://bradsol.com/generative-ai/',
      button2Text: 'Know More',
    },
    {
      image: 'https://bradsol.com/wp-content/uploads/2023/08/banner-02.png',
      alt: 'Business Process Automation Services',
      title: 'Unleash HyperAutomation',
      description: 'Transforming Work, Empowering Teams, Shaping Tomorrow',
      button1Link: '/schedule-a-meeting/',
      button1Text: 'Schedule a Call',
      button2Link: '/#main',
      button2Text: 'Know More',
    },
    {
      image: 'https://bradsol.com/wp-content/uploads/2023/08/banner-04.png',
      alt: 'Business Process Automation Solutions',
      title: 'Embrace the Future with Hyperautomation',
      description: 'Transforming Workforce, Amplifying Teams, and Unleashing Digital Twins for Success.',
      button1Link: '/schedule-a-meeting/',
      button1Text: 'Schedule a Call',
      button2Link: 'https://bradsol.com/contact-us/',
      button2Text: 'Contact Us',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          className={`slider-item ${index === activeIndex ? 'active' : ''}`}
          key={index}
          data-index={index}
        >
          <img
            className="slider-image"
            src={slide.image}
            alt={slide.alt}
          />
          <div className="carousel-caption">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <div className="d-lg-inline d-md-inline d-sm-block">
              <a className="btn bannerbtn" href={slide.button1Link}>
                {slide.button1Text}
              </a>
            </div>
            <div className="d-lg-inline d-md-inline d-sm-block">
              <a className="btn bannerbtn2" href={slide.button2Link}>
                {slide.button2Text}
              </a>
            </div>
          </div>
        </div>
      ))}
      <button className="prev" onClick={goToPreviousSlide}>
        &#10094;
      </button>
      <button className="next" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
