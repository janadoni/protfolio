import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms access key
          access_key: "janarthananinfo123@gmail.com",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Sorry, something went wrong while sending your message.");
        console.error(result);
      }
    } catch (error) {
      alert("Network error. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
            Have a project in mind or want to discuss opportunities? Let's connect!
          </p>

          <motion.div
            className="contact-wrapper"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Contact Info */}
            <motion.div className="contact-info glass-card" variants={itemVariants}>
              <h3>Get In Touch</h3>
              <p>Feel free to reach out for collaborations or just a friendly hello.</p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:janarthananinfo123@gmail.com">janarthananinfo123@gmail.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaLinkedin size={20} />
                  </div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/janarthanan13a/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/janarthanan13a
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaGithub size={20} />
                  </div>
                  <div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/janadoni" target="_blank" rel="noopener noreferrer">
                      github.com/janadoni
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form-container glass-card" variants={itemVariants}>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
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
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello! I'd like to talk about..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`btn-primary submit-btn ${isSuccess ? 'success' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle size={18} /> Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
