import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <motion.div 
            className="about-content glass-card"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.p className="about-text" variants={itemVariants}>
              I am a <strong>Java Backend Developer</strong> with 3 years of experience designing and deploying 
              distributed systems and scalable enterprise applications using <strong>Spring Boot</strong>, 
              <strong> Spring Cloud</strong>, and <strong>Microservices architecture</strong>.
            </motion.p>
            <motion.p className="about-text" variants={itemVariants}>
              Proficient in <strong>Apache Kafka</strong> for event-driven processing, <strong>Docker</strong> and 
              <strong> Kubernetes</strong> for container orchestration, and CI/CD pipelines with Jenkins. 
              Experienced in OAuth2 and JWT-based authentication via Spring Security and in Oracle and 
              Hibernate/JPA for data persistence and performance optimisation.
            </motion.p>
            <motion.p className="about-text" variants={itemVariants}>
              Proven track record delivering production-grade backend solutions in Agile/Scrum environments 
              at TCS and Azentio Software.
            </motion.p>
            
            <motion.div className="stats-grid" variants={itemVariants}>
              <div className="stat-item">
                <h3 className="stat-value text-gradient">3+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-value text-gradient">20+</h3>
                <p className="stat-label">REST APIs Delivered</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-value text-gradient">10k+</h3>
                <p className="stat-label">Records Processed Offline</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
