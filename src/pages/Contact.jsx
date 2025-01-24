/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, like sending the data to an API
    setFormStatus('Message sent! Thank you for reaching out.');
  };

  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me via any of the platforms below:</p>
      <ul>
        <li>
          <a href="mailto:samuel.p.herrick@gmail.com" target="_blank" rel="noopener noreferrer">
            Email: samuel.p.herrick@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/SamPH29" target="_blank" rel="noopener noreferrer">
            GitHub: SamPH29
          </a>
        </li>
      </ul>

      <h3>Or fill out the form below:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {formStatus && <p>{formStatus}</p>}
    </div>
  );
};

export default Contact;
