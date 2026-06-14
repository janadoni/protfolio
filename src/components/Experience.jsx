import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: "System Engineer – Backend Development",
    company: "Tata Consultancy Services",
    period: "Jun 2025 - Present",
    location: "Chennai, India",
    achievements: [
      "Implemented automated scaling and performance monitoring for Kubernetes clusters using Docker and Helm, reducing manual intervention by 30% and improving system reliability.",
      "Built a full-stack application with React.js and Spring Boot, increasing development efficiency by 15%.",
      "Optimized database ingestion pipeline using Apache POI, reducing data import time by 35%."
    ]
  },
  {
    role: "Software Engineer – Backend Development",
    company: "Azentio Software",
    period: "Sep 2023 – Jun 2025",
    location: "Chennai, India",
    achievements: [
      "Migrated monolithic ERP system to Microservices Architecture, reducing deployment time by 40%.",
      "Designed and delivered 20+ REST APIs, reducing manual processing time by 30%.",
      "Built offline data processing system handling 10,000+ records without downtime.",
      "Developed enterprise web application using Java and JSF for multiple departments."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">
                    <Briefcase size={18} className="timeline-icon" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                
                <div className="timeline-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
