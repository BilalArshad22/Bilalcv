import React, { useState } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import Experience from './components/sections/Experience';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import ProjectModal from './components/ui/ProjectModal';

import confetti from 'canvas-confetti';

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'portfolio',
  'experience',
  'resume',
  'contact',
];

function PortfolioApp() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleHeroDownloadCV = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 }
      });
    } catch (err) {}

    const link = document.createElement('a');
    link.href = '/Bilal_Arshad_UIUX_Resume.pdf';
    link.download = 'Bilal_Arshad_UIUX_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-lightSurface-base dark:bg-darkSurface-base text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Sticky frosted Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero onDownloadCV={handleHeroDownloadCV} />
        <About />
        <Skills />
        <Portfolio onSelectProject={handleSelectProject} />
        <Experience />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
