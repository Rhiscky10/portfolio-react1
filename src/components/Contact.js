import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace YOUR_FORMSPREE_ENDPOINT with your Formspree URL
    const endpoint = "https://formspree.io/f/mblagala";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        alert("Thank you for your message! I’ll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("ERROR");
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("ERROR");
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>
            Ready to start your next project? Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="card">
              <h3>Send Me a Message</h3>
              <form
                id="contactForm"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  <i className="fas fa-envelope"></i> Send Message
                </button>
              </form>
              {status === "SUCCESS" && (
                <p className="success-message">Message sent successfully!</p>
              )}
              {status === "ERROR" && (
                <p className="error-message">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>

          {/* Contact Info */}
          {/* ... rest of your code remains unchanged ... */}
         {/* Contact Info Section */}
          <div className="contact-info-section">
            <div className="card">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <p className="contact-label">Email</p>
                    <p className="contact-value">rhis.cky10@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <p className="contact-label">Phone</p>
                    <p className="contact-value">+233 (0) 54 607 7868</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <p className="contact-label">Location</p>
                    <p className="contact-value">Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://github.com/" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kofi-osei-okyere-66b284264/"
                  className="social-link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://x.com/rhiscky2?s=21" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <p className="social-description">
                Let's connect on social media and stay in touch!
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Contact;
