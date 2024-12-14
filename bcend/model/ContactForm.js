
const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  organization: { type: String, required: true },
  industry: { type: String, required: true },
  role: { type: String },
  services: { type: String },
}, { timestamps: true });

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
