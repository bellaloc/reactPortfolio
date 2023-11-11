import React, { useState } from 'react';
import '../styles/styles.css';
import AnimatedExample from '../components/Animated/AnimatedExample'; 

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitted Data:', { name, email, message });
    // Simulate API call to a backend server
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // Add additional logic after a successful submission
      } else {
        console.error('Error submitting form:', response.statusText);
        // Handle error, show user a message, etc.
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
      // Handle error, show user a message, etc.
    }
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

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
      <AnimatedExample /> {/* Include the suggested animated component */}
    </section>
  );
};

export default Contact;
