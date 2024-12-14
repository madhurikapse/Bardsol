import React, { useState, useEffect } from 'react';
import './our.css';

const OurCustomers = () => {
  const logos = [
    "https://bradsol.com/wp-content/uploads/2021/08/cqa-logo-250x250-1.png",
    "https://bradsol.com/wp-content/uploads/2021/08/Smart-shift-technologies-250x250-1.jpg",
    "https://bradsol.com/wp-content/uploads/2021/08/shrinath-rotopack-logo-1-250x250-1.png",
    "https://bradsol.com/wp-content/uploads/2021/08/Telangana-Peoples-Association-Of-Dallas-250x250-1.png",
    "https://bradsol.com/wp-content/uploads/2021/08/Oshon-logo-250x250-1.png",
    "https://bradsol.com/wp-content/uploads/2021/08/vacancy-logo-250x250-1.png",
    "https://bradsol.com/wp-content/uploads/2021/08/columbia-logo-250x250-1.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % logos.length);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [logos.length]);

  return (
    <div className="our-customers">
      <h2>Our Customers</h2>
      <p>Meet the innovation-friendly workplaces we have helped build!</p>
      <div className="customers">
        <div className="customer-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {logos.map((logo, index) => (
            <div className="customer" key={index}>
              <img src={logo} alt={`Customer Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
