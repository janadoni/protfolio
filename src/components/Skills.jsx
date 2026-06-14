import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Java 8+", "Spring Boot", "Spring Batch", "Spring Security", "Spring API Gateway", "Hibernate", "JPA"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Git", "Maven", "Jenkins", "Figma", "Eclipse/STS"]
  },
  {
    title: "Messaging & Caching",
    skills: ["Apache Kafka", "Redis"]
  },
  {
    title: "Testing & Web Services",
    skills: ["RESTful APIs", "Microservices", "Junit", "Mockito", "Postman", "Swagger", "JMeter"]
  },
  {
    title: "Frontend & Database",
    skills: ["React.js", "HTML", "CSS", "Oracle"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <motion.div 
                className="skill-badges"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-badge"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
