import React from 'react';
import './hyper.css'; // Make sure to import your CSS for styling

const HyperautomationSection = () => {
  return (
    <section className="container-fluid">
      <div className="rpa">
        <div className="rpa-inner">
          <div className="row">
            <div className="col-md-12 col-xs-12 rpa-content-box">
              <div className="content-wrapper">
                <div className="text-section">
                  <h1>Empowering Your Business with Hyperautomation</h1>
                  <p>Elevate, Innovate, Dominate: Hyper Automation as Your Business Game-Changer!</p>
                </div>
                <div className="image-section">
                  <img
                    decoding="async"
                    src="https://bradsol.com/wp-content/uploads/2023/09/banner_hyper.svg"
                    alt="What is RPA"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HyperautomationSection;
