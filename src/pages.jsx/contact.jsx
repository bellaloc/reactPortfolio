// Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (will be updated when you have a backend)
  };

  return (
    <section style={sectionStyle}>
      <h2>Contact</h2>
      <form onSubmit={handleFormSubmit} style={formStyle}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={inputStyle}
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
      {error && <p style={errorStyle}>{error}</p>}
    </section>
  );
};

const sectionStyle = {
  padding: '2rem',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
};

const inputStyle = {
  margin: '0.5rem 0',
  padding: '0.5rem',
};

const buttonStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '0.5rem',
  border: 'none',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  marginTop: '0.5rem',
};

export default Contact;
