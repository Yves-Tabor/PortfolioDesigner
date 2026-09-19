import { useState, useEffect } from 'react';
import { LeftSidebar } from './components/LeftSidebar';
import { RightTracker } from './components/RightTracker';
import { MobileNav } from './components/MobileNav';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { HomeSection } from './sections/HomeSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import {
  profileData,
  sectionsData,
  statsData,
  skillCategoriesData,
  techTagsData,
  projectsData,
} from './data/portfolioData';
import { ProjectItem } from './types/portfolio';

export function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const idx = sectionsData.findIndex((sec) => sec.id === sectionId);
    if (idx !== -1) {
      setActiveIndex(idx);
    }

    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop && idx !== -1) {
      window.scrollTo({
        top: idx * window.innerHeight,
        behavior: 'smooth',
      });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sectionElements = sectionsData
      .map((sec) => document.getElementById(sec.id))
      .filter((el): el is HTMLElement => el !== null);

    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (isDesktop) {
        const vh = window.innerHeight;
        const currentIdx = Math.min(
          sectionsData.length - 1,
          Math.max(0, Math.round(window.scrollY / vh))
        );
        setActiveIndex(currentIdx);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const idx = sectionsData.findIndex((sec) => sec.id === id);
            if (idx !== -1) {
              setActiveIndex(idx);
            }
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="layout layout-grid min-h-screen">
      <LeftSidebar profile={profileData} onNavigate={handleNavigate} />

      <main className="center relative">
        <HomeSection
          eyebrow={sectionsData[0].eyebrow}
          headline={sectionsData[0].headline}
          stats={statsData}
        />
        <SkillsSection
          eyebrow={sectionsData[1].eyebrow}
          headline={sectionsData[1].headline}
          categories={skillCategoriesData}
          tags={techTagsData}
        />
        <ProjectsSection
          eyebrow={sectionsData[2].eyebrow}
          headline={sectionsData[2].headline}
          projects={projectsData}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
        <ContactSection
          eyebrow={sectionsData[3].eyebrow}
          headline={sectionsData[3].headline}
          email={profileData.email}
          onNavigate={handleNavigate}
        />
      </main>

      <RightTracker
        sections={sectionsData}
        activeIndex={activeIndex}
        onNavigate={handleNavigate}
      />

      <MobileNav
        sections={sectionsData}
        activeIndex={activeIndex}
        onNavigate={handleNavigate}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
