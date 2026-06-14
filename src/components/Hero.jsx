import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, X, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.png';
import resumeFile from '../assets/JANARTHANAN_A_RESUME.docx';
import './Hero.css';

const Hero = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <section id="home" className="hero-section flex-center">
        <div className="container">
          <div className="hero-content">
            
            {/* Profile Image */}
            <motion.div
              className="profile-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src={profileImg} 
                alt="Janarthanan Annachi" 
                className="profile-img"
                onClick={() => setIsImageOpen(true)}
                whileHover={{ scale: 1.05 }}
                layoutId="profile-img"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="greeting">Hello, I'm</h2>
              <h1 className="name">
                Janarthanan <span className="text-gradient">Annachi</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="role">Backend Java Developer</h3>
              <p className="summary">
                Designing and deploying distributed systems and scalable enterprise
                applications using Spring Boot, Spring Cloud, and Microservices architecture.
              </p>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="about" smooth={true} duration={800} offset={-80} className="btn-primary" style={{ cursor: 'pointer' }}>
                  More About Me <ArrowRight size={18} />
                </Link>
                <a href={resumeFile} download="JANARTHANAN_A_RESUME.docx" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--accent-blue)', color: 'var(--accent-blue)' }}>
                  Download Resume <Download size={18} />
                </a>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/janadoni" target="_blank" rel="noopener noreferrer" className="social-btn glass-card">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/janarthanan13a/" target="_blank" rel="noopener noreferrer" className="social-btn glass-card">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:janarthananinfo123@gmail.com" className="social-btn glass-card">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Modal for Zoom */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div 
            className="image-modal-overlay flex-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageOpen(false)}
          >
            <div className="modal-close" onClick={() => setIsImageOpen(false)}>
              <X size={32} />
            </div>
            <motion.img 
              src={profileImg} 
              alt="Janarthanan Annachi Full" 
              className="profile-img-large"
              layoutId="profile-img"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
