import React, { useState } from 'react';


const ContactForm = () => {

  const [formData, setFormData] = useState({
    phoneNumber: '',
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully', result);
        // handle success
      } else {
        console.error('Form submission failed', response.status, await response.text());
        // handle error
      }
    } catch (error) {
      console.error('An error occurred while submitting the form', error);
      // handle error
    }
  };

  return (
    <div className="frame-contact-form">
      <h2>Request A Callback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input type="tel" className="form-control" id="phoneNumber" required />
      </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;


