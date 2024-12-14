// /controllers/contactController.js
const ContactForm = require('../models/ContactForm');

exports.submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, country, organization, industry, role, services } = req.body;

    const newContact = new ContactForm({
      firstName,
      lastName,
      email,
      phone,
      country,
      organization,
      industry,
      role,
      services
    });

    const savedContact = await newContact.save();
    res.status(201).json({ message: 'Form submitted successfully', contact: savedContact });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
};
