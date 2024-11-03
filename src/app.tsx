import { useState } from 'react';

import SidebarNav, { menuOptions } from './components/sidebar-nav';
import { InViewWrapper } from './components/in-view-wrapper';

import HeroSection from './sections/hero';
import SkillsSection from './sections/skills';
import WorkSection from './sections/work';
import ExperienceSection from './sections/experience';
import ContactSection from './sections/contact';

const App = () => {
  const [activeSection, setActiveSection] = useState(menuOptions[0].id);

  return (
    <div className="bg-zinc-900 ">
      <SidebarNav activeSection={activeSection} />
      <InViewWrapper onChange={setActiveSection}>
        <HeroSection />
      </InViewWrapper>
      <InViewWrapper onChange={setActiveSection}>
        <SkillsSection />
      </InViewWrapper>
      <InViewWrapper onChange={setActiveSection}>
        <WorkSection />
      </InViewWrapper>
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
