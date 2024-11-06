import { forwardRef } from 'react';

import SectionHeading from '@/components/section-heading';
import ExperienceAccordion from '@/components/experience-accordion';
import resumePDF from '@/assets/MACIEJ_JAZDZEWSKI_Resume.pdf';

const ExperienceSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section
      id="experience"
      ref={ref}
    >
      <div className="w-full flex flex-col gap-4 items-center lg:px-20 px-14 pt-12">
        <SectionHeading>Experience</SectionHeading>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 w-full">
          <div className="flex w-full h-auto lg:w-3/4 items-center justify-center">
            <ExperienceAccordion />
          </div>
          <div className="flex w-full h-auto lg:w-1/4 items-center justify-center cursor-pointer hover:scale-105 transition-all duration-200">
            <a
              href={resumePDF}
              target="_blank"
            >
              <img
                src="/src/assets/cv1.png"
                alt="Resume"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;
