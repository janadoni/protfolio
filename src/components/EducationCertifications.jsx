import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import './EducationCertifications.css';

const certifications = [
  "Apache Kafka for Event-Driven Spring Boot Microservices - Udemy",
  "Low Level System Design, Design Patterns & SOLID Principles - Udemy",
  "Start the UX Design Process: Empathize, Define, and Ideate - Coursera",
  "Build Wireframes and Low-Fidelity Prototypes - Coursera"
];

const EducationCertifications = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="edu-cert-grid">
          {/* Education Column */}
          <motion.div 
            className="edu-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="column-title">
              <GraduationCap className="title-icon" /> Education
            </h2>
            <div className="edu-card glass-card">
              <h3 className="degree">Bachelor of Engineering (BE)</h3>
              <p className="major text-gradient">Information Technology</p>
              <p className="university">Annamalai University</p>
              <div className="edu-meta">
                <span>Chidambaram, India</span>
                <span className="edu-year">Graduated 2023</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div 
            className="cert-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="column-title">
              <Award className="title-icon" /> Certifications
            </h2>
            <div className="cert-list">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="cert-item glass-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <Award size={18} className="cert-icon" />
                  <p>{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
