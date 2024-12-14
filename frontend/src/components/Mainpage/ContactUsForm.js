import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import "./Contact.css";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    organization: '',
    industry: '',
    role: '',
    services: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      const response = await axios.post('http://localhost:8000/submit', formData);
      setMessage('Form submitted successfully!');
    } catch (error) {
      setMessage('Error submitting the form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container-fluid">
      <div className="contact-form">
        <div className="container">
          <div className="contact-title-form">
            <div className="row">
              <div className="col-md-3 contact-info">
                <h1>Contact Us</h1>
                <p>Get in touch with a <strong>Bradsol automation</strong> expert!</p>
              </div>
              <div className="col-md-9 home-contact-form">
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your First Name*"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your Last Name*"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email*"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number*"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      className="form-control"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Your Country*"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="organization">Organization *</label>
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      className="form-control"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your Organization*"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="industry">Industry *</label>
                    <input
                      type="text"
                      name="industry"
                      id="industry"
                      className="form-control"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="Your Industry*"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <input
                      type="text"
                      name="role"
                      id="role"
                      className="form-control"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Your Role"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="services">What services are you looking for?</label>
                    <textarea
                      name="services"
                      id="services"
                      className="form-control"
                      value={formData.services}
                      onChange={handleChange}
                      placeholder="What services are you looking for?"
                      rows="5"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value={loading ? 'Submitting...' : 'SEND'}
                      disabled={loading}
                    />
                  </div>
                </form>

                {message && (
                  <div className={`alert ${message.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
