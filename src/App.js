import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Premium Concierge DMV</h1>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>Exceptional Home Care in Bethesda, MD</h2>
          <p>Compassionate, Professional Care for Your Loved Ones</p>
          <a href="#contact" className="cta-button">Get Started Today</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Personal Care</h3>
              <p>Assistance with daily activities including bathing, dressing, grooming, and mobility support.</p>
            </div>
            <div className="service-card">
              <h3>Companionship</h3>
              <p>Friendly conversation, activities, and emotional support to combat loneliness and isolation.</p>
            </div>
            <div className="service-card">
              <h3>Meal Preparation</h3>
              <p>Nutritious meal planning and preparation tailored to dietary needs and preferences.</p>
            </div>
            <div className="service-card">
              <h3>Medication Management</h3>
              <p>Reminders and assistance to ensure medications are taken correctly and on schedule.</p>
            </div>
            <div className="service-card">
              <h3>Light Housekeeping</h3>
              <p>Maintaining a clean and safe home environment with laundry, cleaning, and organization.</p>
            </div>
            <div className="service-card">
              <h3>Transportation</h3>
              <p>Safe transportation to appointments, errands, and social activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>Why Choose Premium Concierge DMV?</h2>
          <div className="about-content">
            <div className="about-item">
              <h3>Experienced Caregivers</h3>
              <p>Our team consists of trained, background-checked professionals dedicated to providing the highest quality care.</p>
            </div>
            <div className="about-item">
              <h3>Personalized Care Plans</h3>
              <p>We create customized care plans tailored to each client's unique needs and preferences.</p>
            </div>
            <div className="about-item">
              <h3>24/7 Availability</h3>
              <p>Round-the-clock support and care coordination to ensure peace of mind for families.</p>
            </div>
            <div className="about-item">
              <h3>Local Bethesda Experts</h3>
              <p>Deep knowledge of the Bethesda community and local resources to better serve our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>What Families Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"The care provided by Premium Concierge DMV has been exceptional. Our mother is happier and healthier thanks to their compassionate team."</p>
              <p className="author">- Sarah M., Bethesda</p>
            </div>
            <div className="testimonial-card">
              <p>"Professional, reliable, and truly caring. We couldn't ask for better support for our father's daily needs."</p>
              <p className="author">- Michael R., Bethesda</p>
            </div>
            <div className="testimonial-card">
              <p>"The personalized attention and dedication to quality care sets Premium Concierge DMV apart. Highly recommended!"</p>
              <p className="author">- Jennifer K., Bethesda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p><strong>Phone:</strong> (1046) 271-1565</p>
              <p><strong>Email:</strong> info@premiumconciergedmv.com</p>
              <p><strong>Address:</strong> Bethesda, MD 20814</p>
              <p><strong>Hours:</strong> 24/7 Available</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Tell us about your needs"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Premium Concierge DMV. All rights reserved.</p>
          <p>Providing exceptional home care services in Bethesda, MD and surrounding areas.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
