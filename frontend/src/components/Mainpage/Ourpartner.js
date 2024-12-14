import React from "react";
import"./Partener.css"
const OurPartners = () => {
  return (
    <section className="container">
      <div className="our-partners">
        <div className="our-partners-inner">
          <div className="row">
            <div className="col-md-12 col-xs-12 vertical-center">
              <h1>Our Partners</h1>
              <p></p>
              <p style={{ textAlign: "center" }}>
                We are backed by the most innovative organisations, who are Industry-leaders in Intelligent Automation.
              </p>
              <p></p>
            </div>
          </div>
          <div className="row pt-5 pb-5 partners__grid">
            <div className="col-md-0 col-xs-12 pb-3">
              <img
                className="img-fluid"
                src="https://bradsol.com/wp-content/uploads/2023/09/01.png"
                alt="Automation Anywhere Implementation Partners"
              />
            </div>
            <div className="col-md-0 col-xs-12 pb-3">
              <img
                className="img-fluid"
                src="https://bradsol.com/wp-content/uploads/2023/09/04.png"
                alt="Power Platform Partner"
              />
            </div>
            <div className="col-md-0 col-xs-12 pb-3">
              <img
                className="img-fluid"
                src="https://bradsol.com/wp-content/uploads/2023/09/02.png"
                alt="Salesforce Partner"
              />
            </div>
            <div className="col-md-0 col-xs-12 pb-3">
              <img
                className="img-fluid"
                src="https://bradsol.com/wp-content/uploads/2023/09/05.png"
                alt="UiPath Business Partner"
              />
            </div>
            <div className="col-md-0 col-xs-12 pb-3">
              <img
                className="img-fluid"
                src="https://bradsol.com/wp-content/uploads/2023/09/03.png"
                alt="Salesforce Consulting Partners"
              />
            </div>
            <div className="col-md-0 col-xs-12 pb-3">
              <img
                className="img-fluid"
                src="https://bradsol.com/wp-content/uploads/2024/03/finalsalesforce-logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
