import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import SidebarNav, { menuOptions } from '@/components/sidebar-nav';
import { InViewWrapper } from '@/components/in-view-wrapper';
import Loader from '@/components/loader';

import HeroSection from './sections/hero';
import SkillsSection from './sections/skills';
import WorkSection from './sections/work';
import ExperienceSection from './sections/experience';
import ContactSection from './sections/contact';
import { InView } from 'react-intersection-observer';

const App = () => {
  const [isLoaderOpen, setIsLoaderOpen] = useState(true);
  const [activeSection, setActiveSection] = useState(menuOptions[0].id);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaderOpen(false);
    }, 1500);
  }, []);

  return (
    <div
      className={cn(
        'bg-zinc-900',
        isLoaderOpen ? 'overflow-hidden h-screen' : 'overflow-unset h-unset'
      )}
    >
      <Loader isLoaderOpen={isLoaderOpen} />
      <SidebarNav activeSection={activeSection} />
      <InViewWrapper onChange={setActiveSection}>
        <HeroSection isActiveSection={activeSection === 'home'} />
      </InViewWrapper>
      <InViewWrapper onChange={setActiveSection}>
        <SkillsSection />
      </InViewWrapper>
      {/* <InViewWrapper onChange={setActiveSection}>
        <WorkSection />
      </InViewWrapper> */}
      <InViewWrapper onChange={setActiveSection}>
        <ExperienceSection />
      </InViewWrapper>
      <InViewWrapper onChange={setActiveSection}>
        <ContactSection />
      </InViewWrapper>
    </div>
  );
};

export default App;
