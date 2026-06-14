import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import EducationCertifications from './components/EducationCertifications';

function App() {
  return (
    <>
      <div className="bg-glow"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <EducationCertifications />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p>© {new Date().getFullYear()} Janarthanan Annachi. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
