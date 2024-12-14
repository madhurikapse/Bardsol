import React from 'react';
import './our.css'; 

const OurCustomers = () => {
  return (
    <div className="our-customers">
      <h2>Our Customers</h2>
      <p>Meet the innovation-friendly workplaces we have helped build!</p>
      <div className="custmur1">
        <div className="custmer">
          <img src="logo1.png" alt="Customer Logo 1" />
        </div>
        <div className="custmor">
          <img src="logo2.png" alt="Customer Logo 2" />
        </div>
        <div className="custmor">
          <img src="logo3.png" alt="Customer Logo 3" />
        </div>
        <div className="custmor">
          <img src="logo4.png" alt="Customer Logo 4" />
        </div>
        {/* Add more logos as necessary */}
      </div>
    </div>
  );
};

export default OurCustomers;
