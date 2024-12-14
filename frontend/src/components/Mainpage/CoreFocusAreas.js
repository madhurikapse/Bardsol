import React from 'react';
import "./core.css"
const CoreFocusAreas = () => {
  return (
    <div className="col-md-12 col-xs-12 vertical-center">
      <h1 className="text-center">Core Focus Areas</h1>
      <div className="description_content" style={{ padding: '32px 0 0' }}>
        <div className="grid-container core">
          {/* First Grid Item */}
          <div className="grid-item">
            <a href="/process-design-and-re-engineering/">
              <img
                src="https://bradsol.com/wp-content/uploads/2023/08/IQ-Bots3.png"
                alt="Process Design &amp; Re-engineering"
              />
            </a>
            <h3>
              <a href="/process-design-and-re-engineering/">
                Process Design &amp; Re-engineering
              </a>
            </h3>
            <p>Unlock the Power of Data for Informed Decision-Making and Business Optimization.</p>
          </div>

          {/* Second Grid Item */}
          <div className="grid-item">
            <a href="/rapid-innovation/">
              <img
                src="https://bradsol.com/wp-content/uploads/2023/08/IQ-Bots4.png"
                alt="Rapid Innovation &amp; Technology Adoption"
              />
            </a>
            <h3>
              <a href="/rapid-innovation/">Rapid Innovation &amp; Technology Adoption</a>
            </h3>
            <p>Powering Smart Decisions for Business Success.</p>
          </div>

          {/* Third Grid Item */}
          <div className="grid-item">
            <a href="/process-automation/">
              <img
                src="https://bradsol.com/wp-content/uploads/2023/08/IQ-Bots2.png"
                alt="Process Automation"
              />
            </a>
            <h3>
              <a href="/process-automation/">Process Automation</a>
            </h3>
            <p>Streamline Your Business with Intelligent Automation Solutions.</p>
          </div>

          {/* Fourth Grid Item */}
          <div className="grid-item">
            <a href="/data-analytics/">
              <img
                src="https://bradsol.com/wp-content/uploads/2023/08/IQ-Bots.png"
                alt="Data &amp; Analytics"
              />
            </a>
            <h3>
              <a href="/data-analytics/">Data &amp; Analytics</a>
            </h3>
            <p>Transform Your Business Processes for Operational Excellence.</p>
          </div>

          {/* Fifth Grid Item */}
          <div className="grid-item">
            <a href="/cognitive-intelligence/">
              <img
                src="https://bradsol.com/wp-content/uploads/2023/08/IQ-Bots1.png"
                alt="Cognitive Intelligence"
              />
            </a>
            <h3>
              <a href="/cognitive-intelligence/">Cognitive Intelligence</a>
            </h3>
            <p>Fuel Your Business with Cutting-Edge Technologies and Accelerate Growth</p>
          </div>

          {/* Sixth Grid Item */}
          <div className="grid-item">
            <a href="/generative-ai/">
              <img
                src="https://bradsol.com/wp-content/uploads/2023/08/IQ-Bots5.png"
                alt="Generative AI"
              />
            </a>
            <h3>
              <a href="/generative-ai/">Generative AI</a>
            </h3>
            <p>Enhance your Customer Experience by Co-pilots that Augment Human Capabilities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFocusAreas;
