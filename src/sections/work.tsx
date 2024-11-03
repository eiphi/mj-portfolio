import SectionHeading from '@/components/section-heading';
import { forwardRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

const WorkSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section
      id="work"
      ref={ref}
    >
      <div className="w-full flex flex-col gap-4 items-center">
        <SectionHeading>Work</SectionHeading>
      </div>
    </section>
  );
});

export default WorkSection;
