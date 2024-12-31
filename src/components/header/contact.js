import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'; 

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    setError(null);

    emailjs
      .send(
        'service_5g0j4kd', 
        'template_mbsyb3m',
        formData,
        '65HncBcKCn-GHxTLU' 
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ from_name: '', from_email: '', message: '' });
        },
        (err) => {
          setError('Failed to send message. Please try again later.');
          console.error('EmailJS error:', err);
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT US</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="from_name" className="form-label">Name</label>
          <input
            id="from_name"
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="contact-input"
            placeholder='Enter your name'
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="from_email" className="form-label">Email</label>
          <input
            id="from_email"
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            className="contact-input"
            placeholder='Enter your email'
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-input"
            placeholder='Any queries ?'
            required
          />
        </div>

        <button type="submit" className="contact-button">
          Send Message
        </button>

        {isSubmitted && (
          <div className="success-message">
            Your message has been sent successfully!
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactUsPage;