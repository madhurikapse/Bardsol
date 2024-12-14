import React, { useState, useEffect } from 'react';
import "./slider.css"
const ImageSlider = () => {
  // Array of image URLs
  const images = [
    "https://bradsol.com/wp-content/uploads/2023/08/banner-01.png",
    "https://bradsol.com/wp-content/uploads/2023/08/banner-03.png",
    "https://bradsol.com/wp-content/uploads/2023/08/banner-02.png",
    "https://bradsol.com/wp-content/uploads/2023/08/banner-04.png"
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use effect to automatically change image every 1000ms (1 second)
  useEffect(() => {
    const interval = setInterval(nextSlide, 1000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Function to handle dot click (manual navigation)
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ width: '100%', maxWidth: '1500px', margin: 'auto', position: 'relative' }}>
      <div style={{ display: 'flex', overflow: 'hidden', borderRadius: '8px' }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: '100%', height: 'auto', transition: 'transform 0.5s ease' }}
        />
      </div>

      {/* Navigation Dots */}
      <div style={{
        position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex'
      }}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '15px', height: '15px', margin: '0 5px', borderRadius: '50%', backgroundColor: currentIndex === index ? '#717171' : '#bbb',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
