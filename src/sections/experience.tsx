import { forwardRef } from 'react';

import { ImageDialog } from '@/components/motion/image-dialog';
import SectionHeading from '@/components/section-heading';
import ExperienceAccordion from '@/components/experience-accordion';
import cvThumbImage from '@/assets/cv1.png';
import fullCvImage from '@/assets/cv-full.webp';
import verticalCvImage from '@/assets/cv-vert.webp';

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
          <div className="hidden lg:flex w-full h-auto lg:w-1/4 items-center justify-center">
            <ImageDialog
              thumbUrl={cvThumbImage}
              fullImgUrl={fullCvImage}
              alt="CV"
            />
          </div>
          <div className="flex lg:hidden w-full h-auto lg:w-1/4 items-center justify-center">
            <ImageDialog
              thumbUrl={cvThumbImage}
              fullImgUrl={verticalCvImage}
              alt="CV"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;
