// Contact.jsx
import React, { useState } from 'react';
import './styles.css';
import ExampleComponent from './ExampleComponent';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (will be updated when you have a backend)
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleFormSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* Add similar inputs for email and message */}
        <button type="submit">Submit</button>
      </form>
      <ExampleComponent />
    </section>
  );
};

export default Contact;
