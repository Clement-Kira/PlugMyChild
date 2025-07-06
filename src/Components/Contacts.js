import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Components.css';
import contactImg from '../Images/contact.jpeg';
import Footer from './Footer';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_6a0t5fn',       
      'template_nqw0u1b',       
      formData,                
      '-Vtuts_gjCNCbLBnf',       
    )
    .then(() => {
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Email send error:', error);
      alert('Failed to send the message, please try again.');
    });

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <nav className="navbar">
        <div className="brand">PlugMyChild</div>
        <div className="navLinks">
          <Link to='/home' className="navLink">Home</Link>
          <Link to='/about' className="navLink">About</Link>
          <Link to='/activities' className="navLink">Activities</Link>
          <Link to='/contacts' className="navLink">Contacts</Link>
          <Link to='/forms' className="navLink">Forms</Link>
        </div>
      </nav>

  
        {/*     <div className='wel-mess-right'>
          <h3>Our Address</h3>
            <p>City: Pretoria</p>
            <h3>Location</h3>
            <p>30174 Tsotetsi Street <br/>
              Ext 10 <br/>
              Mamelodi East <br/>
              0122 
            </p>.
          </div> */}
      <div className="welcome-container">
        <div className="welcome-message">
          <h1 className='heading'>Feel Free to <br/> Contact us</h1>
          <p>
            We are excited to have you here. Our kindergarten is a place where
            children can learn, play, and grow in a safe and nurturing environment.
          </p>

          <p>
            If you have any enquiries, feel free to reach for here.</p>
        </div>
        <div className="welcome-image">
          <img src={contactImg} alt="Contact"/>
        </div>
      </div>

      <div className="contact-form-container">
        <h1 className='heading'>Contact Us</h1>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

     <Footer/>
    </div>
  );
};

export default Contacts;
