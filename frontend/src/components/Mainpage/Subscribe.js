import React, { useState } from "react";
import './Subscribe.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setFormMessage("Email is required.");
      return;
    }
   

    setFormMessage("Thank you for subscribing!");
  };

  return (
    <section className="container-fluid subscribe-section">
      <div className="subscribe-letter">
        <div className="subscribe-letter-inner">
          <div className="row">
            <div className="col-md-5 col-xs-12">
              <h1 className="h">Subscribe to our newsletter</h1>
            </div>
            <div className="col-md-7 col-xs-12 newsletterform vertical-center">
              <div className="subscribe-form-wrapper">
                <form
                  onSubmit={handleSubmit}
                  id="subscribe-form"
                  className="subscribe-form"
                >
                  <div className="form-body">
                    <div className="form-field">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>

                   
                  </div>

                  <div className="form-footer">
                    <button type="submit" className="subscribe-button">
                      SUBSCRIBE
                    </button>
                  </div>

                  {formMessage && (
                    <div className="form-message">
                      <p>{formMessage}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
